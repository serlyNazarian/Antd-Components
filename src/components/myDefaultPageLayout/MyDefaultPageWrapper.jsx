import MyHelmet from '../helmet/MyHelmet';
import MyFlexVertical from '../myFlex/MyFlexVertical';
import MyPageHeader from '../myPageHeader/MyPageHeader';

const MyDefaultPageWrapper = ({
  modal,
  title,
  children,
  extraRight,
  helmetTitle,
  helmetContent,
  ...otherProps
}) => {
  return (
    <>
      <MyHelmet title={helmetTitle || title} content={helmetContent} />
      <MyFlexVertical block>
        <MyPageHeader title={title} extraRight={extraRight} {...otherProps} />
        {children}
      </MyFlexVertical>
      {modal}
    </>
  );
};

export default MyDefaultPageWrapper;
