import React from "react";
import { Link } from "react-router-dom";
import {
  StyledArticleItemWrapper,
  ArticleSmallImg,
  ImgWrapper,
  StyledArticleSnippetWrapper,
  ArticleMiniTitle,
  ArticleSnippet,
} from "../../styles/article";

const ArticleItem = ({ article, feedId, hasImage }) => (
  <Link
    className="no-decoration"
    to={`/feeds/${feedId}/articles/${article.id}`}
  >
    <StyledArticleItemWrapper hasImage={hasImage}>
      <ImgWrapper hasImage={hasImage}>
        {hasImage && <ArticleSmallImg src={article.image} />}
      </ImgWrapper>
      <StyledArticleSnippetWrapper hasImage={hasImage}>
        <ArticleMiniTitle
          dangerouslySetInnerHTML={{ __html: article.title }}
        />
        <ArticleSnippet
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
      </StyledArticleSnippetWrapper>
    </StyledArticleItemWrapper>
  </Link>
);

export default ArticleItem;