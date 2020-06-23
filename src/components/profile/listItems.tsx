import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Notifications from '@material-ui/icons/Notifications';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Account" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Notifications />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved Ganttlets</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
    </div>
);
