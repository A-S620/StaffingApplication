import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    {id: 'ShiftId', label: 'Shift ID', minWidth: 170},
    {id: 'PersonId', label: 'PersonId', minWidth: 100},
    {id: 'ShiftStartDate', label: 'Start Date', minWidth: 170, align: 'right',},
    {id: 'ShiftEndDate', label: 'End Date', minWidth: 170, align: 'right',},
    {id: 'ShiftType', label: 'Shift Type', minWidth: 170, align: 'right',},
    {id: 'Location', label: 'Location', minWidth: 100},
];
function createData(ShiftId, PersonId, ShiftStartDate, ShiftEndDate, ShiftType, Location) {
    //const density = population / size;
    return {ShiftId, PersonId, ShiftStartDate, ShiftEndDate, ShiftType, Location};
}
function getData(){
    var request = new XMLHttpRequest();
    request.open('GET', '/shifts', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        return JSON.parse(request.responseText);
    }
}
// var rows = generateData();
function generateData(){
    const data = getData();
    const rows = [];
    for(const row in data){
        const currentRow = data[row];
        rows.push(createData( currentRow.ShiftId,  currentRow.PersonId,  currentRow.ShiftStartDate,  currentRow.ShiftEndDate,  currentRow.ShiftType,  currentRow.Location))
    }
    return rows
}


const rows = generateData();


// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 240,
    },
});

export default function ShiftsTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [Rows, setRows] = useState(rows);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.RequestID}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
