import { gql } from '@apollo/client';
import blocks from '../wp-blocks';
import { Layout } from '../components/Layout';
import { WelcomeOverlay } from '../components/WelcomeOverlay';
import { Navigation } from '../components/Navigation'; 
import { Footer } from '../components/Footer';

export default function Component(props) {
    console.log(props);
    const { navigationMenu } = props.data;
    const { footer } = props.data.footerOptionPage;
    const slug = props.__SEED_NODE__.slug;

    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 100px)', // Assuming the footer height is 100px
        margin: '0 auto',
        backgroundColor: 'black'
    };

    return ( 
        <Layout>
          <WelcomeOverlay />
          <Navigation {...navigationMenu} />
          <>
            <div style={divStyle}>
              <p>This is a page.js template</p><br />
              <p>slug : {slug}</p>
            </div>
          </>
          <Footer {...footer} />
        </Layout>
    )
  }

Component.query = gql`
  query NavQuery {
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