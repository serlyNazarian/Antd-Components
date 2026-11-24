import { List } from 'antd';

const MyList = ({
  data,
  emptyText,
  renderItem,
  onSelectItem,
  ...otherProps
}) => {
  const handleClick = (_, item, index) => {
    onSelectItem && onSelectItem(item, index);
  };

  return (
    <List
      {...otherProps}
      itemLayout="horizontal"
      dataSource={data}
      locale={{ emptyText: emptyText }}
      renderItem={(item, index) => (
        <List.Item
          onClick={(e) => {
            handleClick(e, item, index);
          }}
        >
          {renderItem && renderItem(item)}
        </List.Item>
      )}
    />
  );
};

export default MyList;
