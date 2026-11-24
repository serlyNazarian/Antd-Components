import { Pagination } from 'antd';

const MyPagination = ({
  onShowSizeChange,
  onChange,
  pageSize = 10,
  hideOnSinglePage = true,
  pageSizeOptions = [5, 10, 25, 50, 100, 500],
  responsive = true,
  showQuickJumper = true,
  showSizeChanger = true,
  simple = false,
  showLessItems = false,
  current = 1,
  size = 'small',
  ...otherProps
}) => {
  return (
    <Pagination
      {...otherProps}
      hideOnSinglePage={hideOnSinglePage}
      pageSizeOptions={pageSizeOptions}
      responsive={responsive}
      showQuickJumper={showQuickJumper}
      showSizeChanger={showSizeChanger}
      showTotal={(total, range) => {
        return `${range[1] * range[0]} / ${total}`;
      }}
      size={size}
      simple={simple} // true for mobile
      showLessItems={showLessItems} // true for mobile
      current={current + 1}
      pageSize={pageSize}
      onShowSizeChange={(p, pp) => {
        onShowSizeChange(p - 1, pp);
      }}
      onChange={(p) => {
        onChange(p - 1);
      }}
    />
  );
};

export default MyPagination;
