import Header from '../Shared/Header/Header';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { Box } from '@mui/system';
import { Paper, Table, TableBody, TableContainer, TableHead } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

<Box
    sx={{
        mx: 5
    }}
>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>POST NAME</StyledTableCell>
                    <StyledTableCell >TOTAL APPLICANT</StyledTableCell>
                    <StyledTableCell >VACANCIES</StyledTableCell>
                    <StyledTableCell >SHIFT</StyledTableCell>
                    <StyledTableCell >TYPE</StyledTableCell>
                    <StyledTableCell >POST DATE</StyledTableCell>
                    <StyledTableCell >SALARY</StyledTableCell>
                    <StyledTableCell >STATUS</StyledTableCell>
                    <StyledTableCell align="right">ACTION</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell >{row.calories}</StyledTableCell>
                        <StyledTableCell >{row.fat}</StyledTableCell>
                        <StyledTableCell >{row.carbs}</StyledTableCell>
                        <StyledTableCell >{row.protein}</StyledTableCell>
                        <StyledTableCell >{row.protein}</StyledTableCell>
                        <StyledTableCell >{row.protein}</StyledTableCell>
                        <StyledTableCell >{row.protein}</StyledTableCell>
                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
</Box>