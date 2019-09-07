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
    'The staff is always happy and helpful',
    '03/08/2019',
  ),
  createData(
    'ID 758',
    'Dress',
    4,
    'I bought these boots as a combination motorcycle boot/something I can wear in the office without looking like a bum.',
    '03/08/2019',
  ),
  createData(
    'ID 965',
    'T-shirt',
    3,
    'I like the style of the boots, and the fit and all that, but after around a month of light wear and use, the material on the toe has started to noticeably rip.',
    '01/08/2019',
  ),
  createData(
    'ID 202',
    'Blouse',
    2,
    "I didn't expect much when ordering this boot. I needed something that looked a little better then a ratty beat up pair of work boots when visiting a job site with homeowners. I don't think you can you can tell by looking at them that they aren't real leather. The workmanship put into the shoe seems to be decent. I think they Ron about a half size big but read other reviews before taking that into account. I'm not sure what size I ordered and don't feel like checking. I'm happy with the boot and can be worn Al casually or worn to work in a light construction field environment. Overall a good looking boot for the price.",
    '02/08/2019',
  ),
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
                  onClick={() =>
                    dialogProps.handleOpen(
                      row.review,
                      row.productName,
                      row.date,
                    )
                  }
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
