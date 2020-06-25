import React, { memo, Fragment } from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import { mainListItems, secondaryListItems } from './listItems';

const drawerWidth = 240; // if change this value, change in NavBar.tsx too

const styles = (theme: Theme) =>
    createStyles({
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
    });

interface Props extends WithStyles<typeof styles> {
    // non style props
    handleSideDrawerClose: { (): void };
    sideDrawerOpen: boolean;
    // injected style props
}
function SideDrawer(props: Props) {
    const { classes, handleSideDrawerClose, sideDrawerOpen } = props;
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !sideDrawerOpen && classes.drawerPaperClose),
            }}
            open={sideDrawerOpen}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleSideDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
        </Drawer>
    );
}

export default withStyles(styles, { withTheme: true })(memo(SideDrawer));
