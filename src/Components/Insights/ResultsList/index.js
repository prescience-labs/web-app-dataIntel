import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Paper from '@material-ui/core/Paper';

import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '2rem',
    padding: '2rem',
  },
}));

function ResultsList({ title, results }) {
  const { root } = useStyles();

  return (
    <Paper className={root}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {title}
          </ListSubheader>
        }
      >
        {results.map((result, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={result} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default ResultsList;
