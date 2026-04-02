import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from 'react';
import { Table } from 'antd';
import UtilString from '../../utils/UtilString';

const MyTableInfinity = forwardRef(
  (
    {
      page,
      total,
      loading,
      perPage,
      columns,
      editingRow,
      dataSource,
      onRowClick,
      height = 400,
      onChangePage,
      rowClassName,
      onRowDoubleClick,
      className = UtilString.EMPTY_STRING,
      ...otherProps
    },
    ref
  ) => {
    const refTableDiv = useRef(null);

    const CLICK_DELAY = 250; // ms
    let clickTimer = null;

    // const [selectedRow, setSelectedRow] = useState();
    const [fetching, setFetching] = useState(false);

    useImperativeHandle(ref, () => ({
      scrollToTop: () => {
        const body = refTableDiv.current?.querySelector('.ant-table-body');
        body?.scrollTo?.(0, 0);
      },
    }));

    useEffect(() => {
      const body = refTableDiv.current?.querySelector('.ant-table-body');
      if (!body) return;

      const handleOnScroll = (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        const isBottom = scrollTop + clientHeight >= scrollHeight - 5;
        if (isBottom && dataSource.length < total && !loading && !fetching) {
          setFetching(true);
          onChangePage?.(page + 1, perPage);
          setTimeout(() => setFetching(false), 300);
        }
      };

      body.addEventListener('scroll', handleOnScroll);
      return () => body.removeEventListener('scroll', handleOnScroll);
    }, [
      dataSource.length,
      total,
      loading,
      page,
      perPage,
      onChangePage,
      fetching,
    ]);

    const handleOnClick = (record, index) => {
      // setSelectedRow(index);
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        onRowClick?.(record, index);
      }, CLICK_DELAY);
    };

    const handleOnDoubleClick = (record, index) => {
      clearTimeout(clickTimer);
      onRowDoubleClick?.(record, index);
    };

    return (
      <div
        ref={refTableDiv}
        style={{ height: height, display: 'flex', flexDirection: 'column' }}
      >
        <Table
          {...otherProps}
          className={`infinite_scroll_table_table ${className}`}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          loading={loading}
          showSorterTooltip={false}
          scroll={{ y: height, x: 'max-content' }}
          rowClassName={(record) => {
            return `table_row_infinity ${rowClassName} ${
              editingRow === record?.idTransaction ? 'edit' : ''
            }`;
          }}
          onRow={(record, index) => ({
            onClick: () => {
              handleOnClick(record, index);
            },
            onDoubleClick: () => {
              handleOnDoubleClick(record, index);
            },
          })}
        />
      </div>
    );
  }
);

export default MyTableInfinity;
