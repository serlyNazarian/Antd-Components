import { theme } from 'antd';

function RequiredStar() {
  const { token } = theme.useToken();

  return (
    <span aria-hidden="true" style={{ color: token.colorError, marginInlineStart: 4 }}>
      *
    </span>
  );
}

export const uiFormConfig = {
  colon: false,
  requiredMark: (label, { required }) => (
    <>
      {label}
      {required && <RequiredStar />}
    </>
  ),
};
