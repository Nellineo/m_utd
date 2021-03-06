import React from 'react';

import { UtdLogo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck_black">
            <div className="footer_logo">
                <UtdLogo 
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Manchester United 2019. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;