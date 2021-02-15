import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import type { ReactElement } from "react";
import type { Theme } from "@material-ui/core";
import clsx from "clsx";

interface MenuDrawerProps {
    onHandleDrawerClose: () => void;
    classes: Record<"appBar" | "appBarShift" | "content" | "drawer" | "drawerClose" | "drawerOpen" | "hide" | "menuButton" | "root" | "toolbar", string>;
    open: boolean;
    theme: Theme;
}

/**
 * Creates an instance of the menu drawer for the People app.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
const MenuDrawer = ({ onHandleDrawerClose, classes, open, theme }: MenuDrawerProps): ReactElement => {
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={onHandleDrawerClose}>
                    {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {["Info"].map((text, index) => 
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )}
            </List>
            <Divider />
            <List>
                {["Contact"].map((text, index) => 
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )}
            </List>
        </Drawer>
    );
};

export default MenuDrawer;