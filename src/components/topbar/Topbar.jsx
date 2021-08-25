import React from 'react'
import "./topbar.css"
import { NotificationsNone , AppsOutlined, AccountCircle} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Sapien Systems</span>
                </div>
                <div className="topcenter">
                    <span className="Dashboard">Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                    <NotificationsNone />
                    </div>
                    <div className="topbarIcons">
                    <AppsOutlined />
                    </div>
                    <div className="topbarIcons">
                    <AccountCircle/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

