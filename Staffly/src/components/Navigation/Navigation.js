import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {useHistory} from "react-router-dom";
import {Tabs, Toolbar, Drawer, Grid} from "@material-ui/core"
import HomePage from "../HomePage";
import DaysOff from "../DaysOff";
import TabPanel from "./TabPanel";
import Tab from "@material-ui/core/Tab/Tab";

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
    const history = useHistory();
    const toDaysOff = () => history.push('/DaysOff');
    const toHome = () => history.push('/');


    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState(0);
    const handleTabChange=(e, newValue) => {
        setTab(newValue);
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
                    <Typography variant="h4" noWrap>
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
                <Tabs value={tab} onChange={handleTabChange}>
                    <Grid container direction={"column"} alignItems={"center"}>
                        <Grid item>
                            <Tab label={"Home"} {...a11yProps(0)}  />
                        </Grid>
                        <Grid item>
                            <Tab label={"Days Off"} {...a11yProps(1)} />
                        </Grid>
                    </Grid>
                </Tabs>

                {/*<div className={classes.drawerHeader}>*/}
                {/*    <IconButton onClick={handleDrawerClose}>*/}
                {/*        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}*/}
                {/*    </IconButton>*/}
                {/*</div>*/}
                {/*<Divider />*/}
                {/*/!*<List>*!/*/}
                {/*/!*    <ListItem button onClick={toHome}>*!/*/}
                {/*/!*        <ListItemText primary="Home" />*!/*/}
                {/*/!*    </ListItem>*!/*/}
                {/*/!*    <ListItem button>*!/*/}
                {/*/!*        <ListItemText primary="Swap Shifts" />*!/*/}
                {/*/!*    </ListItem>*!/*/}
                {/*/!*    <ListItem button onClick={toDaysOff}>*!/*/}
                {/*/!*        <ListItemText primary="Days Off" />*!/*/}
                {/*/!*    </ListItem>*!/*/}
                {/*/!*    <ListItem button>*!/*/}
                {/*/!*        <ListItemText primary="Ammend Data" />*!/*/}
                {/*/!*    </ListItem>*!/*/}

                {/*/!*</List>*!/*/}
                {/*<Divider />*/}
                {/*<List>*/}
                {/*    <ListItem button>*/}
                {/*        <ListItemText primary="Notifications" />*/}
                {/*    </ListItem>*/}
                {/*    <ListItem button>*/}
                {/*        <ListItemText primary="Calendar" />*/}
                {/*    </ListItem>*/}
                {/*    <ListItem button>*/}
                {/*        <ListItemText primary="Help Centre" />*/}
                {/*    </ListItem>*/}
                {/*    <ListItem button>*/}
                {/*        <ListItemText primary="Settings" />*/}
                {/*    </ListItem>*/}
                {/*</List>*/}

            </Drawer>
            <TabPanel value={tab} index={0}>
                <div style={{marginTop:"200px"}}>
                    test 1
                </div>
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <div style={{marginTop:"200px"}}>
                    test 2
                </div>
            </TabPanel>
        </div>
    );
}
