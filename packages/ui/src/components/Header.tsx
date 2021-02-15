import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import type { ReactElement } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

interface PageHeaderProps {
    onHandleDrawerOpen: () => void;
    classes: Record<"appBar" | "appBarShift" | "content" | "drawer" | "drawerClose" | "drawerOpen" | "hide" | "menuButton" | "root" | "toolbar", string>;
    open: boolean;
}

/**
 * Page header component.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
const PageHeader = ({ onHandleDrawerOpen, classes, open }: PageHeaderProps): ReactElement => {
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open
            })}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onHandleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open
                    })}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Person Selector
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default PageHeader;