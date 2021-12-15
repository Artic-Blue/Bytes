import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext();
const UserContextUpdate = React.createContext();

export const useUser = () => (
  useContext(UserContext)
);

export const useUserUpdate = () => (
  useContext(UserContextUpdate)
);

export const UserProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  const updateUser = (id) => (
    setUser(id)
  );

  return (
    <UserContext.Provider value={User}>
      <UserContextUpdate.Provider value={updateUser}>
        { children }
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};
