import MyHelmet from '../helmet/MyHelmet';
import MyFlexVertical from '../flex/MyFlexVertical';
import MyPageHeader from '../page-header/MyPageHeader';

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
