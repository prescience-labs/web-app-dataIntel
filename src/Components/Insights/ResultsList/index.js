import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.primary,
    margin: theme.spacing(2, 20),
  },
}));

function ResultsList({ title, results }) {
  const { root, nested } = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {title}
        </ListSubheader>
      }
      className={root}
    >
      {results.map((result, index) => (
        <ListItem key={index} className={nested}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary={result} />
        </ListItem>
      ))}
    </List>
  );
}

export default ResultsList;
