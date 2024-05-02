import { gql } from '@apollo/client';
import { MarqueeList } from '../../components/MarqueeList';

// create FeaturedRentals component
export default function AcfMarqueeList(props) {
    return <MarqueeList {...props.marqueeList} />;
}

AcfMarqueeList.displayName = 'AcfMarqueeList';

AcfMarqueeList.fragments = {
    key: `AcfMarqueeListFragment`,
    entry: gql`
    fragment AcfMarqueeListFragment on AcfMarqueeList {
        marqueeList {
            terms {
                keyWord
            }
        }
    }
    `
}