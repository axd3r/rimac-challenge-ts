import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useInitStore } from '../store/initStore';

const CheckPrivateRoute: React.FC = () => {
  const { user } = useInitStore(state => state);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default CheckPrivateRoute;
