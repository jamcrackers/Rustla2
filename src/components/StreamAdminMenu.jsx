import React from "react";
import { useClickAway } from "react-use";

import "../css/StreamAdminMenu.scss";

const StreamAdminMenu = ({
  id,
  channel,
  service,
  overrustle_id,
  afk,
  nsfw,
  promoted,
  hidden,
  modifyStream,
  banViewers,
}) => {
  const containerRef = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  useClickAway(containerRef, () => setIsOpen(false));

  const handleToggleClick = (prop, state) => {
    modifyStream({ channel, service, overrustle_id }, { [prop]: state });
  };

  const handleBanClick = () => banViewers(id);

  const menu = isOpen && (
    <div className="stream-admin-menu">
      <button onClick={() => handleToggleClick("afk", !afk)}>
        toggle afk {afk ? "off" : "on"}
      </button>
      <button onClick={() => handleToggleClick("nsfw", !nsfw)}>
        toggle nsfw {nsfw ? "off" : "on"}
      </button>
      <button onClick={() => handleToggleClick("promoted", !promoted)}>
        toggle promoted {promoted ? "off" : "on"}
      </button>
      <button onClick={() => handleToggleClick("hidden", !hidden)}>
        toggle hidden {hidden ? "off" : "on"}
      </button>
      <button onClick={() => handleToggleClick("removed", true)}>remove</button>
      <button onClick={handleBanClick}>ban viewers</button>
    </div>
  );

  return (
    <div className="stream-admin-menu-container" ref={containerRef}>
      <button onClick={toggleIsOpen}>&bull;&bull;&bull;</button>
      {menu}
    </div>
  );
};

export default StreamAdminMenu;
