### Faust.js Documentation

# Faust.js Frontend for Rentaly Headless WordPress Demo

This document provides an in-depth overview of the Faust.js frontend setup for the Rentaly Headless WordPress Demo project. Faust.js is a powerful framework built on top of Next.js, designed to create seamless headless WordPress experiences. This documentation covers key concepts and the specific implementation details used in the project.

## Overview of Key Concepts

### Static Site Generation (SSG)
Faust.js leverages Next.js's static site generation capabilities to pre-render pages at build time. This approach enhances performance and SEO by serving static HTML files instead of dynamically generated content. The primary benefit of SSG is faster page load times and improved scalability.

### Page Routing
Faust.js utilizes Next.js's file-based routing system, where each file in the `pages` directory corresponds to a route in the application. For instance:
- `pages/index.js` corresponds to the homepage (`/`).
- `pages/about.js` corresponds to the `/about` route.

### WordPress Template Hierarchy
Faust.js resolves the WordPress template hierarchy using files in the `wp-templates` folder. Each template corresponds to a specific WordPress template, such as `single.js` for single posts or `page.js` for pages.

#### How Page Routing and Template Hierarchy Work Together
When a request comes in, it is first handled by Next.js's page routing mechanism. The routing determines which page component should handle the request. However, Faust.js further processes this request to serve the correct WordPress template based on the content type. Here’s a detailed breakdown of how this works:

1. **Request Handling**: A request is made to the site, and Next.js identifies the corresponding route based on the files in the `pages` directory.
2. **Seed Query**: Faust.js sends a preliminary GraphQL request (called the Seed Query) to WordPress to gather data about the requested URI. The response includes details like the content type, database ID, slug, and template.
3. **Template Resolution**: Using the Seed Query data, Faust.js determines the appropriate template from the `wp-templates` folder. For example, a request for a single post would use the `single.js` template.
4. **GraphQL Query**: The appropriate GraphQL query is constructed using fragments defined in the template. This query fetches the necessary data from the WordPress backend.
5. **Rendering**: The fetched data is passed to the React component for rendering, ensuring that the correct template is used for the specific content type.

### GraphQL Usage
Faust.js uses GraphQL to fetch data from the WordPress backend. GraphQL allows for efficient data fetching by specifying exactly what data is needed. This reduces the amount of data transferred and ensures that the frontend has all the necessary information.

### GraphQL Fragments
GraphQL fragments are reusable pieces of queries that can be shared across multiple queries. This modular approach ensures consistency and reduces redundancy in data fetching.

#### Example Fragment
```graphql
fragment PostFields on Post {
  id
  title
  content
}
```

This fragment can be used in a query within a template to fetch post data. For instance:
```graphql
query Post($id: ID!) {
  post(id: $id) {
    ...PostFields
  }
}
```

### Assigning Fragments to Templates
Each template file can include specific GraphQL fragments to fetch the necessary data. This allows for a clear separation of concerns, where the template defines the structure and the fragments define the data.

## Custom Plugins and Components

### Mapping rentaly-blocks Plugin
The `rentaly-blocks` plugin defines custom blocks for rental-related content. These blocks are mapped to React components inside the `wp-blocks` folder. Each block has a corresponding component that handles its rendering.

#### Example Mapping
For a custom block named `rentaly-header`, the corresponding component would be located in `wp-blocks/rentaly-header.js`:
```javascript
import RentalyHeader from '../components/RentalyHeader';

export default function RentalyHeaderBlock(props) {
  return <RentalyHeader {...props} />;
}
```

### Final View-Only Component
The `components` folder contains reusable UI components used across the application. These components are responsible for rendering the final view of the site.

#### Example Usage
A component in the `components` folder might look like this:
```javascript
import React from 'react';

const RentalyHeader = ({ title, description }) => (
  <header>
    <h1>{title}</h1>
    <p>{description}</p>
  </header>
);

export default RentalyHeader;
```

## WordPressBlockProvider and Rendering Blocks

### WordPressBlockProvider
The `WordPressBlockProvider` component in `pages/_app.js` plays a crucial role in rendering WordPress blocks correctly. It provides context and necessary functions to parse and render blocks fetched from the WordPress backend.

#### Example of `pages/_app.js`
```javascript
import { FaustProvider, WordPressBlockProvider } from '@faustwp/core';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <FaustProvider>
      <WordPressBlockProvider>
        <Component {...pageProps} />
      </WordPressBlockProvider>
    </FaustProvider>
  );
}

export default MyApp;
```

### How WordPressBlockProvider Works
- **Context Provision**: It provides context to the entire application, enabling the parsing and rendering of WordPress blocks.
- **Block Rendering**: When a page is rendered, the blocks are processed by `WordPressBlockProvider` to ensure that the correct components are used for each block type. This ensures that custom blocks like those from `rentaly-blocks` are rendered correctly.

### Example Block Query and Rendering
To query and render blocks, the `WordPressBlocksViewer` component is used. This component takes the blocks data fetched via GraphQL and renders the appropriate React components.

#### Example Query for Blocks
```graphql
query GetPage($id: ID!) {
  page(id: $id) {
    title
    content
    blocks {
      ...BlockFields
    }
  }
}

fragment BlockFields on Block {
  name
  attributes
  innerBlocks {
    ...BlockFields
  }
}
```

#### Example Usage of `WordPressBlocksViewer`
```javascript
import { WordPressBlocksViewer } from '@faustwp/core';

const PageComponent = ({ blocks }) => {
  return <WordPressBlocksViewer blocks={blocks} />;
};

export default PageComponent;
```

## Leveraging WPGraphQL and WPGraphQL ACF
- **WPGraphQL**: Exposes a GraphQL API for querying WordPress content.
- **WPGraphQL ACF**: Integrates Advanced Custom Fields with WPGraphQL, making ACF fields available in GraphQL queries.

## Integrating Content Blocks
Faust.js supports Gutenberg blocks and ACF blocks, which can be queried and rendered in the frontend:
- **WPGraphQL Content Blocks**: Extends WPGraphQL to include support for Gutenberg blocks.
- **ACF Blocks**: Custom blocks created with ACF can be queried and rendered using WPGraphQL ACF.

## Rendering Dynamic Content
Faust.js provides mechanisms to render dynamic content fetched from WordPress, ensuring a seamless and responsive user experience. By combining static site generation with dynamic content fetching, Faust.js offers the best of both worlds: fast initial loads and rich interactivity.

## Detailed Explanation of the Template System

### Template System Overview
Templates in Faust bring the power of the WordPress Template Hierarchy to your JavaScript frontend application. Templates are resolved by sending a preliminary GraphQL request (called the Seed Query) for the given URI in WordPress. The response includes data such as the databaseId, slug, and content type, which is then used to determine the appropriate template.

### Setting Up the Template System
To set up your Faust template system, start by creating a directory in your project (commonly named `wp-templates`). Inside this directory, create an `index.js` file with an empty object as the default export:

```javascript
// wp-templates/index.js
export default {
  // Templates go here
};
```

Templates are placed in this object with the key being the template name, and the value being the default export of the template. For example:

```javascript
// wp-templates/index.js
import page from './page';
import single from './single';

export default {
  page: page,
  single: single,
};
```

Finally, include the templates in `faust.config.js` at your project root:

```javascript
// faust.config.js
import { setConfig } from '@faustwp/core';
import templates from './wp-templates/index.js';

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates: templates,
});
```

### Template Structure
A Faust template has three parts: the component, the query, and the variables.

#### Example Template
```javascript
// wp-templates/single.js
import { gql } from '@apollo/client';

// The Component is required
export default function Component(props) {
  const { title, content } = props?.data?.post;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

// Query is optional
Component.query = gql`
  query GetPost($databaseId: ID!) {
    post(id: $databaseId, idType: DATABASE_ID) {
      title
      content
    }
  }
`;

// Variables is optional
Component.variables = (seedQuery, ctx) => {
  return {
    databaseId: seedQuery?.databaseId,
  };
};
```

#### Component
The `Component` portion of the template serves as the rendering layer, similar to a traditional Next.js page. Props are exposed to the `Component` as usual in React, with two specific to a template:
- `props.data`: The response to the template’s query.
- `props.loading`: A boolean flag to determine if the template’s query is still being fetched.

#### Component Variables
The `Component.variables` portion is a callback function that returns an object of GraphQL variables for the template’s GraphQL query. The callback has two parameters: `seedQuery` and `context`.

#### Component Query
The `Component.query` portion is a GraphQL query string used to fetch the template’s data.

### Example of Custom ACF Page Type Implementation
To implement a custom ACF page type and resolve it via `index.js`, follow these steps:

1. **Create the Template Component**: Define the template component in `wp-templates/custom-acf-page.js`.

```javascript
// wp-templates/custom-acf-page.js
import { gql } from '@apollo/client';

// The Component is required
export default function CustomAcfPageComponent(props) {
  const { title, customField } = props?.data?.page;

  return (
    <>
      <h1>{title}</h1>
      <div>{customField}</div>
    </>
  );
}

// Query is optional
CustomAcfPageComponent.query = gql`
  query GetCustomAcfPage($databaseId: ID!) {
    page(id: $databaseId, idType: DATABASE_ID) {
      title
      customField
    }
  }
`;

// Variables is optional
CustomAcfPageComponent.variables = (seedQuery, ctx) => {
  return {
    databaseId: seedQuery?.databaseId,
  };
};
```

2. **Update `index.js`**: Include the custom template in the `wp-templates/index.js` file.

```javascript
// wp-templates/index.js
import page from './page';
import single from './single';
import customAcfPage from './custom-acf-page';

export default {
  page: page,
  single: single,
  customAcfPage: customAcfPage,
};
```

3. **Configure `faust.config.js`**: Ensure the templates are included in the configuration.

```javascript
// faust.config.js
import { setConfig } from '@faustwp/core';
import templates from './wp-templates/index.js';

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates: templates,
});
```

With these steps, the custom ACF page type is set up to resolve correctly via the `index.js` file, and the template system in Faust.js will handle the routing and data fetching accordingly.

---

This documentation provides a detailed overview of the Faust.js frontend setup for the Rentaly Headless WordPress Demo project. By understanding the key concepts and implementation details, developers can effectively manage and extend the functionality of the headless WordPress application. For further information, refer to the official Faust.js documentation and guides.