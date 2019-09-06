import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useReactRouter from 'use-react-router';

import { UserContext } from '../../Context/UserContext';

import OverviewDisplay from './OverviewDisplay';

function OverviewContainer() {
  const { match } = useReactRouter();
  const { token } = match.params;

  const { handleSetActiveUser } = useContext(UserContext);

  async function verifyToken() {
    try {
      const verifyTokenResponse = await axios.post(
        process.env.REACT_APP_AUTH_TOKEN,
        { token },
      );

      const activeUserResponse = await axios.get(
        `${process.env.REACT_APP_AUTH_USER}${verifyTokenResponse.data.user_id}`,
      );

      handleSetActiveUser(activeUserResponse.data);
    } catch (error) {
      throw new Error();
    }
  }

  useEffect(() => {
    verifyToken();
    //eslint-disable-next-line
  }, []);

  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [reviewText, setReviewText] = useState(false);

  const handleDialogClose = () => {
    setShouldOpenDialog(false);
  };

  const handleDialogOpen = text => {
    handleSetReviewText(text);
    setShouldOpenDialog(true);
  };

  const handleSetReviewText = text => {
    setReviewText(text);
  };

  const dialogProps = {
    open: shouldOpenDialog,
    handleClose: handleDialogClose,
    handleOpen: handleDialogOpen,
    reviewText,
  };

  return <OverviewDisplay dialogProps={dialogProps} />;
}

export default OverviewContainer;
