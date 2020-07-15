import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import SidebarList from "./SidebarList";
import React from "react";

const Sidebar = (props) => {
    const classes = props.classes;
    const container = props.container;
    const theme = props.theme;
    const mobileOpen = props.mobileOpen;
    const handleDrawerToggle = props.handleDrawerToggle;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <SidebarList classes={classes}/>
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <SidebarList classes={classes}/>
                </Drawer>
            </Hidden>
        </nav>

    )
};

export default Sidebar;
