import type { GetPeopleData, PersonData } from "../models/personData";
import { gql, useQuery } from "@apollo/client";

import CssBaseline from "@material-ui/core/CssBaseline";
import Loading from "../components/Loading";
import MenuDrawer from "../components/MenuDrawer";
import PageHeader from "../components/Header";
import People from "../components/People";
import React from "react";
import type { ReactElement } from "react";
import { getStyles } from "../styles/styles";
import { useTheme } from "@material-ui/core/styles";
import { withApolloClient } from "../lib/apolloClient";

/**
 * Creates the main index page container.
 */
const indexPage = (): ReactElement => {
    const classes = getStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = (): void => {
        setOpen(true);
    };

    const handleDrawerClose = (): void => {
        setOpen(false);
    };

    const peopleData = gql`
        query {
            getPeopleData {
                name,
                age,
                gender,
                id
            }
        }
    `;

    const { loading, error, data } = useQuery<GetPeopleData>(peopleData);
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <p>Something went wrong. Please, try again later.</p>
        );
    }

    let people: PersonData[] = [];
    if (data !== undefined) {
        people = data.getPeopleData;
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <PageHeader onHandleDrawerOpen={handleDrawerOpen} classes={classes} open={open} />
            <MenuDrawer onHandleDrawerClose={handleDrawerClose} classes={classes} open={open} theme={theme} />
            <main className={classes.content}>
                <People classes={classes} peopleData={people} isEmpty={data === undefined} />
            </main>
        </div>
    );
};

export default withApolloClient(indexPage);
