import { gql } from '@apollo/client';
import { InlinePromo } from "../../components/InlinePromo";

// create FeaturedRentals component
export default function AcfInlinePromo(props) {
    return <InlinePromo {...props.inlinePromo} />;
}

AcfInlinePromo.displayName = 'AcfInlinePromo';

AcfInlinePromo.fragments = {
    key: `AcfInlinePromoFragment`,
    entry: gql`
    fragment AcfInlinePromoFragment on AcfInlinePromo {
        inlinePromo {
            heading
            promoItems {
                heading
                subheading
                icon
            }
        }
    }
    `
}