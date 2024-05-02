import { WordPressBlocksViewer } from '@faustwp/blocks';
import blocks from '../wp-blocks';
import { gql } from '@apollo/client';
import { Layout } from '../components/Layout';
import { Navigation } from '../components/Navigation';

export default function Component(props) {
  const { editorBlocks } = props.data.pages.nodes[0];
  const { navigationMenu } = props.data;
  const { footer } = props.data;

  return (
      <Layout>
        <Navigation {...navigationMenu} />
        <WordPressBlocksViewer blocks={editorBlocks}/>
      </Layout>

  )
}

Component.query = gql`
  ${blocks.AcfHomepageHero.fragments.entry}
  ${blocks.AcfStatsSection.fragments.entry}
  ${blocks.AcfHighlightedFeatures.fragments.entry}
  ${blocks.AcfTestimonials.fragments.entry}
  ${blocks.AcfLatestNews.fragments.entry}

  query HomepageQuery {
    pages(where: {name: "home"}) {
      nodes {
        editorBlocks {
          ...${blocks.AcfHomepageHero.fragments.key}
          ...${blocks.AcfStatsSection.fragments.key}
          ...${blocks.AcfHighlightedFeatures.fragments.key}
          ...${blocks.AcfTestimonials.fragments.key}
          ...${blocks.AcfLatestNews.fragments.key}
        }
      }
    }
    navigationMenu: menu(id: "Navigation", idType: NAME) {
      count
      id
      databaseId
      name
      slug
      menuItems (first: 100) {
        nodes {
          id
          url
          label
          linkRelationship
          parentId
        }
      }
    }
    footerMenu: menu(id: "Footer", idType: NAME) {
      count
      id
      databaseId
      name
      slug
      menuItems (first: 100) {
        nodes {
          id
          url
          label
          linkRelationship
          parentId
        }
      }
    }
  }`
