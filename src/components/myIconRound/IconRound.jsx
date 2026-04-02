import { Avatar, Image } from 'antd';
import { UtilString } from '../../utils/UtilString';
import { FileImageOutlined } from '@ant-design/icons';
import { getBaseURLShowImage } from '../../utils/UrlHelper';

const IconRound = ({
  src,
  name,
  style,
  width = 32,
  shape = 'circle',
  ...otherProps
}) => {
  const iconSrc = getBaseURLShowImage(src);

  const isText = Boolean(!iconSrc) && name;

  let styleAvatar = {
    backgroundColor: isText ? UtilString.getStringToColor(name) : 'transparent',
    minWidth: width,
    ...style,
  };

  return (
    <Avatar
      {...otherProps}
      size={width}
      shape={shape}
      style={styleAvatar}
      src={
        !isText && iconSrc ? (
          <Image preview={false} src={iconSrc} style={{ minWidth: width }} />
        ) : null
      }
      icon={!isText && !iconSrc ? <FileImageOutlined /> : null}
    >
      {isText ? UtilString.getAvatarName(name) : null}
    </Avatar>
  );
};

export default IconRound;
