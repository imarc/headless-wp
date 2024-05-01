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

  query HomepageQuery {
    pages(where: {name: "home"}) {
      nodes {
        editorBlocks {
          ...${blocks.AcfHomepageHero.fragments.key}
        }
      }
    }
  }`
