import { WordPressBlocksViewer } from '@faustwp/blocks';
import blocks from '../wp-blocks';
import { gql } from '@apollo/client';
import { Layout } from '../components/Layout';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Component(props) {
  console.log(props);
  const { editorBlocks } = props.data.pages.nodes[0];
  const { navigationMenu } = props.data;
  const { footer } = props.data.footerOptionPage;
  return (
      <Layout>
        <Navigation {...navigationMenu} />
        <WordPressBlocksViewer blocks={editorBlocks}/>
        <Footer {...footer} />
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
    footerOptionPage {
      footer {
        textSection {
          headline
          paragraph
        }
        quickLinksSection {
          headline
          quickLinks {
            label
            url
          }
        }
        contactUsSection {
          headline
          contactLinks {
            iconClass
            label
            url
          }
        }
        socialNetworksSection{
          headline
          socialLinks{
            icon
            url
          }
        }
        bottomLinks {
          label
          url
        }
      }
    }
  }`
