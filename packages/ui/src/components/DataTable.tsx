import type { ColDef } from "@material-ui/data-grid";
import { DataGrid } from "@material-ui/data-grid";
import type { PersonData } from "../models/personData";
import React from "react";
import type { ReactElement } from "react";

interface DataTableProps {
    peopleData: PersonData[];
}

const columns: ColDef[] = [
    { field: "id", headerName: "Id", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "age", headerName: "Age", width: 200, align: "left", headerAlign: "left", type: "number" },
    { field: "gender", headerName: "Gender", width: 200 }
];

/**
 * Standard Data Table to display people data and allow sorting, filtering etc.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
const DataTable = ({ peopleData }: DataTableProps): ReactElement => {
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={peopleData} columns={columns} pageSize={5} showToolbar={true} />
        </div>
    );
};

export default DataTable;
