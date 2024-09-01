import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import SideBarOption from './SideBarOption';
import HomeIcon from '@mui/icons-material/Home';


;

function SideBar() {
  return (
    <div className="sidebar">
        {/* {twitterアイコン} */}
        <TwitterIcon className="sidebar--twitterIcon" />
        <XIcon />

        {/* {SidebarOption} */}
        <SideBarOption text="ホーム" Icon={HomeIcon}/>
        <SideBarOption text="話題を検索" Icon={HomeIcon}/>
        <SideBarOption text="通知" Icon={HomeIcon}/>
        <SideBarOption text="メッセージ" Icon={HomeIcon}/>
        <SideBarOption text="ブックマーク" Icon={HomeIcon}/>
        <SideBarOption text="リスト" Icon={HomeIcon}/>
        <SideBarOption text="プロフィール" Icon={HomeIcon}/>
        <SideBarOption text="もっと見る" Icon={HomeIcon}/>

        {/* {ツイートボタン} */}
    </div>
  )
}

export default SideBar;