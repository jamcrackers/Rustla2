import { Router } from "react-router-dom";
import history from "../history";
import Routes from "../routes";
import ChatEmbed from "./ChatEmbed";
import Resizeable from "./Resizeable";

import Header from "./Header";
import Footer from "./Footer";

import CustomScrollbar from "./CustomScrollbar";

import "../css/Stream.scss";

const RoutesWithChat = ({
  showHeader = true,
  showFooter,
  setChatSize,
  showChat,
  showLeftChat = false,
  chatClosed,
  chatSize,
}) => {
  let left = (
    <div
      className="flex-shrink-0 stream-embed"
      style={{
        width: chatClosed ? "100%" : `calc(100% - ${chatSize}px)`,
        height: chatClosed ? "100%" : "",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomScrollbar style={{ width: "100%", height: "100%" }}>
        <Routes />
      </CustomScrollbar>
      {showFooter ? <Footer /> : null}
    </div>
  );
  let right = chatClosed ? null : (
    <div className="chat-embed" style={{ width: chatSize, height: "inherit" }}>
      <ChatEmbed onClose={() => showChat(false)} />
    </div>
  );

  if (showLeftChat) {
    const temp = left;
    left = right;
    right = temp;
  }

  return (
    <div style={{ height: "100%" }}>
      <Router history={history}>
        <div
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          {showHeader ? <Header history={history} /> : null}
          <Resizeable
            className="flex-grow-1 flex-column flex-lg-row"
            onResize={(e) => {
              let newChatSize;
              if (showLeftChat) {
                newChatSize = e.pageX;
              } else {
                newChatSize = window.innerWidth - e.pageX;
              }
              setChatSize(newChatSize);
            }}
          >
            {left}
            {right}
          </Resizeable>
        </div>
      </Router>
    </div>
  );
};

export default RoutesWithChat;
