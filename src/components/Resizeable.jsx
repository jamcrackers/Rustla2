import { useState, createElement } from "react";
import Draggable from "react-draggable";
import cs from "classnames";

import "../css/Resizeable.scss";

function Resizeable(props) {
  const [state, setState] = useState({
    dragging: false,
  });

  const dragStart = () => {
    if (!state.dragging) {
      setState({ dragging: true });
    }
  };
  const dragStop = (e, dragData) => {
    if (state.dragging) {
      setState({ dragging: false });
    }
    if (typeof props.onResize === "function") {
      props.onResize(e, dragData);
    }
  };

  const { children, barSize = 5, axis = "x", onResize, ...rest } = props;

  if (children.length !== 2) {
    throw new Error("Resizeable: unsupported children length");
  }
  const content = [];
  children.forEach((child, i) => {
    content.push(child);
    if (i % 2 === 0) {
      content.push(
        <Draggable
          axis={axis}
          onStart={dragStart}
          onStop={dragStop}
          bounds="parent"
          position={{ x: 0, y: 0 }}
        >
          <div className={`resizeable-bar resizeable-bar-${axis}`}>
            <div
              className="resizeable-bar-child"
              style={{ [axis === "x" ? "width" : "height"]: barSize }}
            />
          </div>
        </Draggable>
      );
    }
  });
  if (state.dragging) {
    content.push(<div className="resizeable-backdrop" />);
  }
  return createElement(
    "div",
    {
      ...rest,
      className: cs("resizeable", `resizeable-${axis}`, rest.className),
    },
    ...content
  );
}

export default Resizeable;
