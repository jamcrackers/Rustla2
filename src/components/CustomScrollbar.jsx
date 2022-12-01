import { Scrollbars } from "react-custom-scrollbars";

const viewStyle = {
  padding: 1,
};

const thumbStyle = {
  backgroundColor: "rgb(55, 55, 55)",
};

const ColoredScrollbars = (props) => <div />;
// <Scrollbars
//   renderView={({ style }) => (
//     <div className="box" style={{ ...style, ...viewStyle }} />
//   )}
//   renderThumbVertical={({ style }) => (
//     <div style={{ ...style, ...thumbStyle }} />
//   )}
//   {...props}
// />

export default ColoredScrollbars;
