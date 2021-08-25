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
            <ul className="sidebarList">
            <li className="sidebarlistItem">
            <HomeOutlined />
            Home
            </li>
            <li className="sidebarlistItem">
            <ChatBubbleOutlineOutlined />
            Chats
            </li>
            <li className="sidebarlistItem">
            <CalendarTodayOutlined />
            Schedule
            </li>
            <li className="sidebarlistItem">
            < PersonOutlineOutlined/>
            Clients
            </li>
            <li className="sidebarlistItem">
            < LibraryBooksOutlined/>
            Bookings
            </li>
            <li className="sidebarlistItem">
            < ListAltOutlined/>
            Programs
            </li>
            <li className="sidebarlistItem">
            < CheckBox/>
            Packages
            </li>
            <li className="sidebarlistItem">
            <Apartment/>
            Resources
            </li>
            <li className="sidebarlistItem">
            < AccountBalanceWallet/>
            Finance
            </li>
            <li className="sidebarlistItem">
            < Settings/>
            Settings
            </li>
            </ul>
            </div>
        </div>
        </div>
    )
}
