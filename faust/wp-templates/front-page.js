import { WordPressBlocksViewer } from '@faustwp/blocks';
import blocks from '../wp-blocks';
import { gql } from '@apollo/client';
import { Layout } from '../components/Layout';

export default function Component(props) {
  console.log(props);
  const { editorBlocks } = props.data.pages.nodes[0];
  return (
      <Layout>
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
  ${blocks.AcfFeaturedRentals.fragments.entry}
  ${blocks.AcfInlinePromo.fragments.entry}
  ${blocks.AcfFrequentlyAsked.fragments.entry}
  ${blocks.AcfMarqueeList.fragments.entry}

  query HomepageQuery {
    pages(where: {name: "home"}) {
      nodes {
        editorBlocks {
          ...${blocks.AcfHomepageHero.fragments.key}
          ...${blocks.AcfStatsSection.fragments.key}
          ...${blocks.AcfHighlightedFeatures.fragments.key}
          ...${blocks.AcfTestimonials.fragments.key}
          ...${blocks.AcfLatestNews.fragments.key}
          ...${blocks.AcfFeaturedRentals.fragments.key}
          ...${blocks.AcfInlinePromo.fragments.key}
          ...${blocks.AcfFrequentlyAsked.fragments.key}
          ...${blocks.AcfMarqueeList.fragments.key}
        }
      }
    }
  }`
