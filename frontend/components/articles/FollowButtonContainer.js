import { connect } from "react-redux";
import {
  toggleFollowFeedDropdown,
} from "../../actions/dropdown_actions";
import FollowButton from "./FollowButton";

const mapDispatchToProps = dispatch => ({
  handleClick: e => {
    e.stopPropagation();
    return dispatch(toggleFollowFeedDropdown());
  },
});

export default connect(null, mapDispatchToProps)(FollowButton);