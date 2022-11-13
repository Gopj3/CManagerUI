import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../../store/actions";

//redux
import { useDispatch } from "react-redux";

const Logout = (props: LogoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser(props.history));
  }, [dispatch]);

  return <></>;
};

type LogoutProps = {
  history: object;
};

export default withRouter(Logout);
