const MySelectWrapper = ({ value, loading, children, ...rest }) => (
  <Select value={loading ? undefined : value} loading={loading} {...rest}>
    {children}
  </Select>
);

export default MySelectWrapper;
