import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleArticle extends Schema.Component {
  collectionName: 'components_article_articles';
  info: {
    displayName: 'article';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    html: Attribute.RichText;
    label_button: Attribute.String;
    video: Attribute.String;
    link_button: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.article': ArticleArticle;
    }
  }
}
