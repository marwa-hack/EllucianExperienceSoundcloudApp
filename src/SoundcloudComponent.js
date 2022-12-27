import Player from 'react-soundcloud-widget-player';
import React from 'react';
import { withStyles } from '../node_modules/@ellucian/react-design-system/core/styles';
const styles = () => ({
    actions: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between'
    },
    card: {
        width: '18rem',
    },
    centerContent: {
        textAlign: 'center',
        justifyContent: 'center',
    },
});

class SoundcloudComponent extends React.Component {
  render() {
    return (
      <div>
        <Player
          title='Cariokee'
          audioUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/23051681&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          
        />
      </div>
    )
  }
}
export default withStyles(styles)(SoundcloudComponent);
//ReactDOM.render(<SoundcloudCard />, document.getElementById('root'))
