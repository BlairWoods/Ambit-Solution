import DataTable from "../components/DataTable";
import type { PersonData } from "../models/personData";
import React from "react";
import type { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";

interface PeopleProps {
    peopleData: PersonData[];
    isEmpty: boolean;
    classes: Record<"appBar" | "appBarShift" | "content" | "drawer" | "drawerClose" | "drawerOpen" | "hide" | "menuButton" | "root" | "toolbar", string>;
}

/**
 * Creates an instance of the People contianer component.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
const People = ({ peopleData, isEmpty, classes }: PeopleProps): ReactElement => {
    return (
        <div>
            <div className={classes.toolbar} />
            {isEmpty ?
                <Typography variant="h3">
                    No data was received!
                </Typography>
                :
                <DataTable peopleData={peopleData} />
            }
        </div >
    );
};

export default People;