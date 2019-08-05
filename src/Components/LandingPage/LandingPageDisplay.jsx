import React, { forwardRef } from 'react';
import { landingPageStyle } from './LandingPageStyle';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/icons/Link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

const listOfPlans = [
  {
    name: 'Basic',
    cost: 'Free',
    perksList: [
      '25 reviews/month',
      'Email requests only',
      'Default NLP aspects',
    ],
  },
  {
    name: 'Plus',
    cost: '$ 79.95/mo',
    perksList: [
      '100 reviews/month',
      'Email/SMS requests',
      '5 custom NLP aspects',
    ],
  },
  {
    name: 'Basic',
    cost: '$ 149.95/mo',
    perksList: [
      'Unlimited reviews',
      'Email/SMS requests',
      'Unlimited NLP aspects',
    ],
  },
];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Plan({ name, cost, perksList }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle2" color="textPrimary">
          {cost}
        </Typography>
        <List>
          {perksList.map((perk, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <Link />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={perk} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Purchase</Button>
      </CardActions>
    </Card>
  );
}

function LandingPageDisplay({
  openDialog,
  handleClickOpen,
  handleClose,
  handleSingIng,
}) {
  const { dialogStyle, hederStyle, dialogContentStyle } = landingPageStyle();

  return (
    <div>
      <div className={hederStyle}>
        <Button onClick={handleClickOpen}>Sing In</Button>
      </div>
      <Grid container spacing={6} justify="center">
        {listOfPlans.map((plan, index) => (
          <Grid item key={index}>
            <Plan {...plan} />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        className={dialogStyle}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className={dialogContentStyle}>
          <Button onClick={handleSingIng}>Sing In With Gmail</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LandingPageDisplay;
