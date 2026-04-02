import SVGTableSortIcon from "../../icons/SVGTableSortIcon";
import MyFlexVertical from "../myFlex/MyFlexVertical";
import colors from "../../styles/Color.module.scss";

const MyDefaultSortArrows = ({ sortOrder }) => {
  const getColor = (order) =>
    sortOrder.sortOrder === order ? colors.bluishColor : colors.secondaryText;

  return (
    <MyFlexVertical gap={5}>
      <SVGTableSortIcon rotate={"-180"} color={getColor("ascend")} />
      <SVGTableSortIcon color={getColor("descend")} />
    </MyFlexVertical>
  );
};

export default MyDefaultSortArrows;
