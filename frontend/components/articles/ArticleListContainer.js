import { connect } from "react-redux";
import ArticleList from "./ArticleList";
import { fetchArticlesFromFeed } from "../../actions/article_actions";
import { allArticles } from "../../selectors/article_selectors";
import { allFeeds, currentFeed } from "../../selectors/feed_selectors";
import {
  fetchAllFeeds,
  receiveCurrentFeed,
} from "../../actions/feed_actions";

const mapStateToProps = (state, { match }) => ({
  id: parseInt(match.params.id),
  currentFeedId: state.feeds.current,
  feeds: allFeeds(state),
  articles: allArticles(state),
  currentFeed: currentFeed(state),
  loading: state.loading.loadingArticles,
  modalOpen: state.modal.articleModal,
});

const mapDispatchToProps = dispatch => ({
  setCurrentFeed: id => dispatch(receiveCurrentFeed(id)),
  fetchArticles: id => dispatch(fetchArticlesFromFeed(id)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleList
);