import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag 
                    bck="#1A1A1A"
                    size="50px"
                    color="#ffffff"
                >
                    Matches
                </Tag>
                
                <Blocks />

                <Tag
                    bck="#1a1a1a"
                    size="22px"
                    color="#ffffff"
                    link={true}
                    linkto="/the_team"
                >
                    See more matches
                </Tag>
            </div>
        </div>
    );
};

export default MatchesHome;