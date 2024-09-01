import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';

function SideBar() {
  return (
    <div className="sidebar">
        {/* {twitterアイコン} */}
        <TwitterIcon className="sidebar--twitterIcon" />
        <XIcon />

        {/* {SidebarOption} */}

        {/* {ツイートボタン} */}
    </div>
  )
}

export default SideBar;