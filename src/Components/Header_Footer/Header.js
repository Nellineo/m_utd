import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { UtdLogo } from '../ui/icons.js';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#CC1717',
                    padding: '10px 0',
                    borderBottom: '2px solid #1A1A1A'
                }}
            >
                <Toolbar style={{display:'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <UtdLogo 
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>
                    </div>

                    <Link to="/the_team">
                        <Button color="inherit" size="large">The Team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color="inherit" size="large">Matches</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;