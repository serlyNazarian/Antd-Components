import { Image } from 'antd';

const MyImage = ({ src, alt, ...otherProps }) => {
  return (
    <div className="full_width flex_center" {...otherProps}>
      <Image preview={false} src={src} alt={alt} />
    </div>
  );
};

export default MyImage;
