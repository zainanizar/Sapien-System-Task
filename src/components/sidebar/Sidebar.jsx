import "./sidebar.css"
import {AccountCircle, HomeOutlined, ChatBubbleOutlineOutlined, CalendarTodayOutlined, PersonOutlineOutlined, LibraryBooksOutlined,ListAltOutlined,CheckBox,Apartment, AccountBalanceWallet,Settings} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <div className="sidebarIcons">
             <AccountCircle/>
            </div>
            <h3 className="sidebarTitle">Zaina Nizar</h3>
            <h5 className="sidebarSubTitle">Fitness & Nutrition Coach</h5>
           <div className="sideline" /> 
            <ul className="sidebarList">
            <li className="sidebarlistItem">
            <HomeOutlined className="sidebarIcon" />
            Home
            </li>
            <li className="sidebarlistItem">
            <ChatBubbleOutlineOutlined className="sidebarIcon" />
            Chats
            </li>
            <li className="sidebarlistItem">
            <CalendarTodayOutlined className="sidebarIcon"/>
            Schedule
            </li>
            <li className="sidebarlistItem">
            < PersonOutlineOutlined className="sidebarIcon"/>
            Clients
            </li>
            <li className="sidebarlistItem">
            < LibraryBooksOutlined className="sidebarIcon"/>
            Bookings
            </li>
            <li className="sidebarlistItem">
            < ListAltOutlined className="sidebarIcon"/>
            Programs
            </li>
            <li className="sidebarlistItem">
            < CheckBox className="sidebarIcon"/>
            Packages
            </li>
            <li className="sidebarlistItem">
            <Apartment className="sidebarIcon"/>
            Resources
            </li>
            <li className="sidebarlistItem">
            < AccountBalanceWallet className="sidebarIcon"/>
            Finance
            </li>
            <li className="sidebarlistItem">
            < Settings className="sidebarIcon"/>
            Settings
            </li>
            </ul>
            </div>
        </div>
        </div>
    )
}
