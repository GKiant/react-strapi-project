import React, { useEffect } from 'react';

import { LoadingIndicatorPage, RBACProviderContext } from '@strapi/helper-plugin';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { resetStore, setPermissions } from './actions';

const RBACProvider = ({ children, permissions, refetchPermissions }) => {
  const { allPermissions } = useSelector((state) => state.rbacProvider);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPermissions(permissions));

    return () => {
      dispatch(resetStore());
    };
  }, [permissions, dispatch]);

  if (!allPermissions) {
    return <LoadingIndicatorPage />;
  }

  return (
    <RBACProviderContext.Provider value={{ allPermissions, refetchPermissions }}>
      {children}
    </RBACProviderContext.Provider>
  );
};

RBACProvider.propTypes = {
  children: PropTypes.node.isRequired,
  permissions: PropTypes.array.isRequired,
  refetchPermissions: PropTypes.func.isRequired,
};

export default RBACProvider;
