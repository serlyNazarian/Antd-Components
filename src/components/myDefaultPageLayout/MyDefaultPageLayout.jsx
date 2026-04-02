import { Helmet } from 'react-helmet';
import MyFlexVertical from '../myFlex/MyFlexVertical';
import MyDefaultPageHeader from '../myDefaultPageHeader/MyDefaultPageHeader';

const MyDefaultPageLayout = ({
  align,
  content,
  children,
  helmetTitle,
  headerProps,
}) => {
  return (
    <MyFlexVertical align={align} block gap={0}>
      {Boolean(helmetTitle) && (
        <Helmet>
          <title></title>
          <meta name="description" content="Some description." />
          <meta property="og:title" content={content} />
          <meta
            property="og:image"
            content="public/favicon/mstile-150x150.png"
          />
        </Helmet>
      )}
      {headerProps && <MyDefaultPageHeader headerProps={headerProps} />}
      {children}
    </MyFlexVertical>
  );
};
export default MyDefaultPageLayout;
