import React from 'react';
import clsx from 'clsx';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  error: ErrorIcon,
};

const useSnackBarStyle = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  messageStyle: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function SnackbarContentWrapper(props) {
  const classes = useSnackBarStyle();
  const { icon, messageStyle, iconVariant } = classes;
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar-error"
      message={
        <span id="client-snackbar-error" className={messageStyle}>
          <Icon className={clsx(icon, iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export default function ErrorSnackBar({ open, setOpen, message }) {
  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackbarContentWrapper
        onClose={handleClose}
        variant="error"
        message={message}
      />
    </Snackbar>
  );
}
