import React, { useContext, useEffect } from 'react';
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
      console.error(error);
    }
  }

  return <OverviewDisplay verifyToken={verifyToken} />;
}

export default OverviewContainer;
