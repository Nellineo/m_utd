import React, { Component } from 'react';
import HomeBg from '../../../Resources/images/meet1.jpg'
import { Tag } from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import Cards from './Cards';

class MeetPlayers extends Component {

    state = {
        show:false
    }

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={() => {
                    this.setState({
                        show:true
                    })                 
                }}
            >
                <div className="home_meetplayers"
                    style={{background: `url(${HomeBg})`}}
                >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <Cards 
                                    show={this.state.show}
                                />
                            </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <Tag
                                        bck="#1a1a1a"
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        Meet
                                    </Tag>
                                    <Tag
                                        bck="#1a1a1a"
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        The
                                    </Tag>
                                    <Tag
                                        bck="#1a1a1a"
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display:'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        Squad
                                    </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="#ffffff" 
                                        size="27px" 
                                        color="#1a1a1a"
                                        link={true}
                                        linkto="/the_team"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '27px',
                                            border: '2px solid #1a1a1a'
                                        }}
                                    >
                                        Team Central  
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        );
    }
}

export default MeetPlayers;