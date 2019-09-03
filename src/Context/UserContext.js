import React, { createContext, useState } from 'react';

const UserContext = createContext(null);

function UserContextProvider(props) {
  const [activeUser, setActivePatient] = useState(null);

  const handleSetActiveUser = user => {
    setActivePatient(user);
  };

  return (
    <UserContext.Provider
      value={{
        activeUser: activeUser,
        handleSetActiveUser: handleSetActiveUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
