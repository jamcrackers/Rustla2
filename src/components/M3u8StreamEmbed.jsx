import { Component } from 'react';
import clappr from 'clappr';
import LevelSelector from 'level-selector';

class M3u8StreamEmbed extends Component {
    createPlayer() {
        if (this.player) {
            this.destroyPlayer();
        }

        this.player = new clappr.Player({
            parent: this.playerNode,
            plugins: [LevelSelector],
            source: this.props.src,
            width: '100%',
            height: '100%',
            autoPlay: true,
        });
    }

    destroyPlayer() {
        if (this.player) {
            this.player.destroy();
        }

        this.player = null;
    }

    componentDidMount() {
        this.createPlayer();
    }

    componentWillUnmount() {
        this.destroyPlayer();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.src !== this.props.src) {
            this.createPlayer();
        }
        return false;
    }

    render() {
        return <div className="fill-percentage" ref={c => (this.playerNode = c)} />;
    }
}

export default M3u8StreamEmbed;
