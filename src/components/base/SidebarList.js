import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AssignmentReturnedRoundedIcon from '@material-ui/icons/AssignmentReturnedRounded';
import LiveHelpRoundedIcon from '@material-ui/icons/LiveHelpRounded';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/auth";


const SidebarList = (props) => {
    const classes = props.classes;

    const {isLoggedIn} = useAuth()

    let pages = [
        {
            title: "Home",
            icon: <HomeRoundedIcon />,
            link: "/"
        },
        {
            title: "Sets",
            icon: <AssignmentReturnedRoundedIcon/>,
            link: "/sets"
        },
        {
            title: "Help",
            icon: <LiveHelpRoundedIcon/>,
            link: "/help"
        },
        {
            title: "Terms",
            icon: <GavelRoundedIcon/>,
            link: "/terms"
        },
        {
            title: "Contact us",
            icon: <AccountCircleRoundedIcon/>,
            link: "/contacts"
        },

    ];

    if(isLoggedIn !== true){
        pages.push (
            {
                title: "login",
                icon: <HomeRoundedIcon />,
                link: "/auth/login"
            },
            {
                title: "register",
                icon: <HomeRoundedIcon />,
                link: "/auth/register"
            },

        )
    }
    else {
        pages.push(
            {
                title: "Dashboard",
                icon: <HomeRoundedIcon />,
                link: "/dashboard"
            },
            {
                title: "Create Set",
                icon: <HomeRoundedIcon />,
                link: "/sets/create'"
            },
        )

    }

    return (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {pages.map((item, index) => (
                    <Link to={item.link}>
                        <ListItem button key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider/>
        </div>
    );

};

export default SidebarList;
