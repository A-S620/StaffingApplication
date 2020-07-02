import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {AppBar, Typography, IconButton, Tabs, Toolbar, Drawer, Tab} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from "react-router-dom";

import HomePage from "../HomePage";
import DaysOff from "../DaysOff";
import TabPanel from "./TabPanel";
import SwapShifts from "../SwapShifts";
import AmendData from "../AmendData";
import Notifications from "../Notifications";
import Calendar from "../Calendar";
import HelpCentre from "../HelpCentre";
import Settings from "../Settings";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Navigation() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState(0);
    const handleTabChange=(e, newValue) => {
        setTab(newValue);
        setOpen(false)
    };
    console.log(tab);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (

        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Staffly
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Tabs value={tab} onChange={handleTabChange} orientation={'vertical'}>
                    <Tab label={"Home"} {...a11yProps(0)}  />
                    <Tab label={"Days Off"} {...a11yProps(1)} />
                    <Tab label={"Swap Shifts"} {...a11yProps(2)} />
                    <Tab label={"Amend Data"} {...a11yProps(3)} />
                    <Tab label={"Notifications"} {...a11yProps(4)} />
                    <Tab label={"Calendar"} {...a11yProps(5)} />
                    <Tab label={"Help Centre"} {...a11yProps(6)} />
                    <Tab label={"Settings"} {...a11yProps(7)} />
                </Tabs>

            </Drawer>
            <TabPanel value={tab} index={0}>
                <HomePage/>
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <DaysOff/>
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <SwapShifts/>
            </TabPanel>
            <TabPanel value={tab} index={3}>
                <AmendData/>
            </TabPanel>
            <TabPanel value={tab} index={4}>
                <Notifications/>
            </TabPanel>
            <TabPanel value={tab} index={5}>
                <Calendar/>
            </TabPanel>
            <TabPanel value={tab} index={6}>
                <HelpCentre/>
            </TabPanel>
            <TabPanel value={tab} index={7}>
                <Settings/>
            </TabPanel>
        </div>
    );
}
