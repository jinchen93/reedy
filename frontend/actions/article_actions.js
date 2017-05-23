import * as ArticleAPIUtil from "../utils/articles_api_util";

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_CURRENT_ARTICLE = "RECEIVE_CURRENT_ARTICLE";
export const FETCHING_ARTICLES = "FETCHING_ARTICLES";
export const FETCHING_CURRENT_ARTICLE = "FETCHING_CURRENT_ARTICLE";

export const receiveAllArticles = articles => ({
  type: RECEIVE_ALL_ARTICLES,
  articles,
});

export const receiveCurrentArticle = article => ({
  type: RECEIVE_CURRENT_ARTICLE,
  article,
});

const fetchingArticles = () => ({
  type: FETCHING_ARTICLES,
});

const fetchingCurrentArticle = () => ({
  type: FETCHING_CURRENT_ARTICLE,
});

export const fetchFollowedArticles = () => dispatch => {
  ArticleAPIUtil.fetchFollowedArticles().then(articles =>
    dispatch(receiveAllArticles(articles))
  );
};

export const fetchArticlesFromFeed = feedId => dispatch => {
  dispatch(fetchingArticles());
  return ArticleAPIUtil.fetchArticlesFromFeed(feedId).then(articles =>
    dispatch(receiveAllArticles(articles))
  );
};

export const fetchArticle = id => dispatch => {
  dispatch(fetchingCurrentArticle());
  return ArticleAPIUtil.fetchArticle(id).then(article =>
    dispatch(receiveCurrentArticle(article))
  );
};
