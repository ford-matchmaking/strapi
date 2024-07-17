import type { Schema, Attribute } from '@strapi/strapi';

export interface AttributeAttribute extends Schema.Component {
  collectionName: 'components_attribute_attributes';
  info: {
    displayName: 'Attribute';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    categoriesCategorizer: Attribute.JSON &
      Attribute.CustomField<
        'plugin::categorizer.categorizer',
        {
          target: 'attributes';
          targetAttribute: 'name';
          maxDepth: 2;
        }
      >;
  };
}

export interface ContectLocation extends Schema.Component {
  collectionName: 'components_contect_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    Latitude: Attribute.String & Attribute.Required;
    Longitude: Attribute.String & Attribute.Required;
  };
}

export interface ContectTitleDesc extends Schema.Component {
  collectionName: 'components_contect_title_descs';
  info: {
    displayName: 'Title+Desc';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface ContectTitleImage extends Schema.Component {
  collectionName: 'components_contect_title_images';
  info: {
    displayName: 'Title+Image';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface ContectTitleVideo extends Schema.Component {
  collectionName: 'components_contect_title_videos';
  info: {
    displayName: 'Title+Video';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    video: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'attribute.attribute': AttributeAttribute;
      'contect.location': ContectLocation;
      'contect.title-desc': ContectTitleDesc;
      'contect.title-image': ContectTitleImage;
      'contect.title-video': ContectTitleVideo;
    }
  }
}
