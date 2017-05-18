import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import MainNavDropdown from "./main_nav_dropdown";

const mapStateToProps = ({ dropdown }) => ({
  userDropdown: dropdown.userDropdown,
});

const mapDispatchToProps = dispatch => ({
  toggleUserDropdown: status => dispatch(toggleUserDropdown(status)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  MainNavDropdown
);
