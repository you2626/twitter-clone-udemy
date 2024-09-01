import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import SideBarOption from './SideBarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./SideBar.css";


function SideBar() {
  return (
    <div className="sidebar">
        {/* {twitterアイコン} */}
        <TwitterIcon className="sidebar--twitterIcon" />
        <XIcon />

        {/* {SidebarOption} */}
        <SideBarOption text="ホーム" Icon={HomeIcon}/>
        <SideBarOption text="話題を検索" Icon={SearchIcon}/>
        <SideBarOption text="通知" Icon={NotificationsNoneIcon}/>
        <SideBarOption text="メッセージ" Icon={MailOutlineIcon }/>
        <SideBarOption text="ブックマーク" Icon={BookmarkBorderIcon}/>
        <SideBarOption text="リスト" Icon={ListAltIcon}/>
        <SideBarOption text="プロフィール" Icon={PermIdentityIcon}/>
        <SideBarOption text="もっと見る" Icon={MoreHorizIcon}/>

        {/* {ツイートボタン} */}
        <Button variant="outlined" className="sidebar--tweet" fullwidth>
          ツイートする
          </Button>
    </div>
  )
}

export default SideBar;