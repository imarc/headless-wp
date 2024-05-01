import { WordPressBlocksViewer } from '@faustwp/blocks';
import blocks from '../wp-blocks';
import { gql } from '@apollo/client';

export default function Component(props) {
  console.log(props);
  const { editorBlocks } = props.data.pages.nodes[0];
  return (
    <div>
      INSIDE FRONT PAGE
      <WordPressBlocksViewer blocks={editorBlocks}/>
    </div>

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
