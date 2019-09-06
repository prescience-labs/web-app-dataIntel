import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import Nfc from '@material-ui/icons/Nfc';

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    margin: theme.spacing(5),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  smallColumn: {
    width: 140,
  },
  largeColum: {
    maxWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

function createData(productID, productName, rating, review, date) {
  return { productID, productName, rating, review, date };
}

const rows = [
  createData(
    'ID 356',
    'Shoes',
    5,
    'For responsive layouts; use the max-width CSS property to specify the effective minimum width of the column, or just use max-width: 0; for unlimited flexibility. Also, the containing table will need a specific width, typically width: 100%;, and the columns will typically have their width set as percentage of the total width',
    '05/08/2019',
  ),
  createData('ID 758', 'Dress', 4, 'Good kiri', '03/08/2019'),
  createData('ID 965', 'T-shirt', 3, 'Good', '01/08/2019'),
  createData('ID 202', 'Blouse', 2, 'Good', '02/08/2019'),
];

function OverviewTable({ dialogProps }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.smallColumn}>Product ID</TableCell>
            <TableCell className={classes.smallColumn}>Product Name</TableCell>
            <TableCell className={classes.smallColumn}>Rating</TableCell>
            <TableCell className={classes.largeColum}>Review</TableCell>
            <TableCell align="center" className={classes.smallColumn}>
              Date
            </TableCell>
            <TableCell align="center" className={classes.smallColumn}>
              Analysis
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.productID}>
              <TableCell className={classes.smallColumn}>
                {row.productID}
              </TableCell>
              <TableCell className={classes.smallColumn}>
                {row.productName}
              </TableCell>
              <TableCell className={classes.smallColumn}>
                <Rating value={row.rating} readOnly />
              </TableCell>
              <TableCell className={classes.largeColum}>{row.review}</TableCell>
              <TableCell align="center" className={classes.smallColumn}>
                {row.date}
              </TableCell>
              <TableCell align="center" className={classes.smallColumn}>
                <IconButton
                  color="primary"
                  aria-label="analysis"
                  onClick={() => dialogProps.handleOpen(row.review)}
                >
                  <Nfc />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default OverviewTable;
