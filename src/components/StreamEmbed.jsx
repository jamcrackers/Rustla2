import { Redirect } from 'react-router-dom';

import AdvancedStreamEmbed from './AdvancedStreamEmbed';
import M3u8StreamEmbed from './M3u8StreamEmbed';
import ThirdPartyWarning from './ThirdPartyWarning';

// Use `window.URL` as our WHATWG `URL` implementation. See
// <http://caniuse.com/#feat=url> for the browsers which do not support this.
const isValidAdvancedUrl = require('../util/is-valid-advanced-url')(window.URL);

const getSrc = (channel, service) => {
    switch (service) {
        case 'angelthump':
            return `https://player.angelthump.com/?channel=${channel}`;
        case 'facebook':
            return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/${channel}/&show_text=0`;
        case 'smashcast':
            return `https://www.smashcast.tv/embed/${channel}?popout=true&autoplay=true`;
        case 'twitch-vod':
            return `https://player.twitch.tv/?video=v${channel}&parent=${location.hostname}`;
        case 'twitch':
            return `https://player.twitch.tv/?channel=${channel}&parent=${location.hostname}`;
        case 'ustream':
            return `https://www.ustream.tv/embed/${channel}?autoplay=true&html5ui=true`;
        case 'youtube-playlist':
            return `https://www.youtube-nocookie.com/embed/videoseries?list=${channel}&autoplay=1`;
        case 'youtube':
            return `https://www.youtube-nocookie.com/embed/${channel}?autoplay=1`;
        default:
            return null;
    }
};

const StreamEmbed = ({ channel, service }) => {
    if (service === 'advanced') {
        if (isValidAdvancedUrl(channel)) {
            return (
                <ThirdPartyWarning channel={channel}>
                    <AdvancedStreamEmbed channel={channel} />
                </ThirdPartyWarning>
            );
        }
        return <Redirect to="/" />;
    }

    if (service === 'm3u8') {
        return (
            <ThirdPartyWarning channel={channel}>
                <M3u8StreamEmbed src={channel} />
            </ThirdPartyWarning>
        );
    }

    const src = getSrc(channel, service);
    if (src) {
        return (
            <iframe
                width="100%"
                height="100%"
                marginHeight="0"
                marginWidth="0"
                frameBorder="0"
                scrolling="no"
                seamless
                allow="autoplay; fullscreen"
                allowFullScreen
                src={src}
            />
        );
    }
    return <div className="jiggle-background" style={{ width: '100%', height: '100%' }} />;
};

export default StreamEmbed;
