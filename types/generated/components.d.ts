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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'attribute.attribute': AttributeAttribute;
    }
  }
}
