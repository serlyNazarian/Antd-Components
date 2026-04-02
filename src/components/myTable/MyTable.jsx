import { Table } from "antd";
import MyPagination from "../myPagination/MyPagination";

const MyTable = ({
  onRow,
  scroll,
  page = 0,
  total = 0,
  onRowClick,
  onChangePage,
  pageSize = 10,
  onRowDoubleClick,
  showHeader = true,
  ...otherProps
}) => {
  return (
    <div>
      <Table
        {...otherProps}
        pagination={false}
        showHeader={showHeader}
        onRow={
          onRow ||
          (() => {
            return {
              onClick: onRowClick, // click row
              onDoubleClick: onRowDoubleClick, // double click row
            };
          })
        }
        scroll={scroll}
      />
      <MyPagination
        total={total}
        current={page + 1}
        pageSize={pageSize}
        onChange={onChangePage}
        onShowSizeChange={(page, pageSize) => onChangePage(page, pageSize - 1)}
      />
    </div>
  );
};

export default MyTable;
