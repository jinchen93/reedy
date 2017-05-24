import values from "lodash/values";
import { allCollectionFeedIds } from "./collection_selectors";

export const allFeeds = state => values(state.feeds.all);

export const currentFeed = state => state.feeds.current;

export const currentFeedId = state =>
  state.feeds.current ? state.feeds.current.id : null;

export const feedsBelongingToCollection = (allFeeds, feedIds) => {
  const feeds = [];
  feedIds.forEach(feedId => feeds.push(allFeeds[feedId]));
  return feeds;
};

export const isFeedFollowed = state =>
  allCollectionFeedIds(state).includes(state.feeds.current.id);
