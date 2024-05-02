import { gql } from '@apollo/client';
import React from 'react';
import { StatsSection } from '../../components/StatsSection';
//import { HomepageHero } from '../../components/HomepageHero'

export default function AcfStatsSection(props) {
    return <StatsSection {...props.statsSection}/>
}

AcfStatsSection.fragments = {
    entry: gql`
        fragment AcfStatsSectionFragment on AcfStatsSection {
            statsSection {
            headline
            description
            backgroundImage {
                node {
                  sourceUrl
                }
            }
            statistics {
              stat
              description
            }
          }
        }
    `,
    key: `AcfStatsSectionFragment`,
};

AcfStatsSection.displayName = 'AcfStatsSection';
