import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createCollectionFeed } from "../../actions/collection_actions";
import { allCollections } from "../../utils/collections_util";
import FollowFeedDropdown from "./FollowFeedDropdown";

const mapStateToProps = (state, { match }) => ({
  collections: allCollections(state),
  feedId: match.params.id,
  active: state.dropdown.followFeedDropdown,
});

const mapDispatchToProps = dispatch => ({
  createCollectionFeed: collectionFeed =>
    dispatch(createCollectionFeed(collectionFeed)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FollowFeedDropdown)
);