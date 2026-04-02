import { useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const MyCaptcha = ({ onChange }) => {
  const reCaptchaRef = useRef(null);

  useEffect(() => {
    let isSubscribed = true;
    const check = async () => {
      if (isSubscribed) {
        try {
          const token = await reCaptchaRef?.current?.executeAsync();
          if (token && isSubscribed) {
            onChange && onChange(token);
          }
        } catch (error) {
          console.warn('reCAPTCHA execution failed:', error?.message || error);
        }
      }
    };
    check();
    return () => {
      isSubscribed = false;
    };
  }, [reCaptchaRef, onChange]);

  return (
    <ReCAPTCHA
      ref={reCaptchaRef}
      sitekey={process.env.REACT_APP_CHAPCHA_KEY}
      onChange={onChange}
      size="invisible"
    />
  );
};

export default MyCaptcha;
