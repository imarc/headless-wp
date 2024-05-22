### WordPress Documentation

# WordPress Setup for Rentaly Headless WordPress Demo

This document provides an overview of the WordPress backend setup for the Rentaly Headless WordPress Demo project. The backend is a standard WordPress site with a few essential plugins, including a custom plugin called "rentaly-blocks". This documentation will guide you through the necessary steps and provide details about the plugins used.

## Plugins

The WordPress site uses the following plugins:

1. **Rentaly Blocks**: A custom plugin designed for managing rental-related content blocks.
2. **FaustWP**: Provides integration between WordPress and Faust.js, enabling headless CMS capabilities.
3. **Advanced Custom Fields Pro (ACF Pro)**: Allows for the creation of custom fields, enhancing the flexibility of content management in WordPress.
4. **WPGraphQL**: Exposes a GraphQL API for WordPress, enabling efficient data querying.
5. **WPGraphQL Content Blocks**: Extends WPGraphQL to include support for Gutenberg blocks.
6. **WPGraphQL ACF**: Integrates Advanced Custom Fields with WPGraphQL, allowing ACF fields to be queried via GraphQL.

### Custom Plugin: Rentaly Blocks

The `rentaly-blocks` plugin is a custom plugin developed specifically for this project. It provides various blocks that are used to display rental-related content on the website. These blocks are mapped to corresponding components in the Faust.js frontend.

#### Purpose of the Plugins

1. **FaustWP**
   - **Purpose**: The FaustWP plugin bridges the gap between WordPress and Faust.js. It allows WordPress to serve as a headless CMS, providing content via APIs to the Faust.js front end.
   - **Functionality**: Facilitates content fetching and routing, ensuring smooth integration and data flow between WordPress and the Faust.js application.

2. **Advanced Custom Fields Pro (ACF Pro)**
   - **Purpose**: ACF Pro allows for the creation and management of custom fields within WordPress. It enhances the flexibility of content types and structures, making it easier to handle complex data requirements.
   - **Functionality**: Provides a user-friendly interface for adding custom fields to posts, pages, and custom post types, enabling more detailed and specific content management.

3. **WPGraphQL**
   - **Purpose**: WPGraphQL exposes a GraphQL API for WordPress, allowing developers to query WordPress content more efficiently compared to traditional REST APIs.
   - **Functionality**: Enables querying of posts, pages, and other WordPress content types using GraphQL, providing a flexible and powerful way to fetch data for the front end.

4. **WPGraphQL Content Blocks**
   - **Purpose**: This plugin extends WPGraphQL to support Gutenberg blocks, allowing block-based content to be queried via GraphQL.
   - **Functionality**: Integrates Gutenberg blocks with WPGraphQL, enabling the retrieval of block content and structure through GraphQL queries.

5. **WPGraphQL ACF**
   - **Purpose**: WPGraphQL ACF integrates Advanced Custom Fields with WPGraphQL, making ACF fields available in GraphQL queries.
   - **Functionality**: Allows developers to query custom fields created with ACF using GraphQL, providing a seamless way to access custom field data in the front end.

### WordPress Configuration

The WordPress installation for this project follows a typical setup. Here are some key configuration files and their roles:

- `wp-config.php`: The main configuration file for WordPress.
- `.env.local`: Environment variables specific to the local development environment.

### Key Configuration Files

- **`wp-config.php`**: This file contains the core configuration settings for the WordPress installation, such as database connection details and security keys.
- **`.env.local`**: This file is used to define environment-specific variables. For example, database credentials and site URLs for the local development environment.

## Conclusion

This document provides a basic overview of the WordPress backend setup for the Rentaly Headless WordPress Demo project. Ensure all plugins are installed and activated correctly to utilize the full functionality of the site. For further customization and development, refer to the respective plugin documentation and the WordPress Codex.

---
