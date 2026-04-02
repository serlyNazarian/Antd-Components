import { Link } from 'react-router-dom';

const MyLink = ({
  path,
  state,
  label,
  search,
  _blank = false,
  ...otherProps
}) => {
  let to = {
    pathname: `${path}`,
    search: search,
    state: state,
  };

  return (
    <Link {...otherProps} target={_blank ? '_blank' : ''} state={state} to={to}>
      {label}
    </Link>
  );
};

export default MyLink;
