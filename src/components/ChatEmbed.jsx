import supportedChats from "../util/supported-chats";
import Chat from "./Chat";

const ChatEmbed = ({
  channel,
  onClose,
  service,
  isDggChat,
  isStrimsChat,
  isServiceChat,
}) => {
  let src;
  if (channel && service && typeof supportedChats[service] === "function") {
    src = supportedChats[service](channel) || src;
  }

  return (
    <div style={{ height: "inherit" }}>
      <Chat
        onClose={onClose}
        style={{ display: isStrimsChat ? undefined : "none" }}
        src={
          window.location.toString() === import.meta.env.CHAT2_DOMAIN
            ? import.meta.env.CHAT2_URL
            : import.meta.env.CHAT_URL
        }
      />
      <Chat
        onClose={onClose}
        style={{ display: isDggChat ? undefined : "none" }}
        src="https://destiny.gg/embed/chat"
      />
      {src ? (
        <Chat
          onClose={onClose}
          style={{ display: isServiceChat ? undefined : "none" }}
          src={src}
        />
      ) : null}
    </div>
  );
};

export default ChatEmbed;
