import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(productID, productName, review, date) {
  return { productID, productName, review, date };
}

const rows = [
  createData('ID 356', 'Shoes', 'Good', '05/08/2019'),
  createData('ID 758', 'Dress', 'Good', '03/08/2019'),
  createData('ID 965', 'T-shirt', 'Good', '01/08/2019'),
  createData('ID 202', 'Blouse', 'Good', '02/08/2019'),
];

function OverviewTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Review</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.productID}>
              <TableCell>{row.productID}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell component="th" scope="row" align="right">
                {row.review}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default OverviewTable;
