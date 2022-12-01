import cs from "classnames";

const Chat = ({ className, onClose = noop, src, style, ...rest }) => {
  return (
    <div
      {...rest}
      className={cs("fill-percentage", className)}
      style={{
        ...style,
      }}
    >
      <div>
        <a title="Close" onClick={onClose}>
          <span className="glyphicon glyphicon-remove float-right" />
        </a>
        <a href={src} target="_blank" rel="noopener noreferrer">
          <span className="glyphicon glyphicon-share-alt float-right" />
        </a>
      </div>
      {/* <iframe
        style={{
          height: "calc(100% - 1em)",
        }}
        width="100%"
        height="100%"
        marginHeight="0"
        marginWidth="0"
        frameBorder="0"
        scrolling="no"
        src={src}
      /> */}
    </div>
  );
};
export default Chat;
