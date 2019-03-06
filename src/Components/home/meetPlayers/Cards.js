import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Shaw from '../../../Resources/images/players/shaw.jpg';
import Pogba from '../../../Resources/images/players/pogba.jpg';
import Rashford from '../../../Resources/images/players/rashford.jpg';
import Smalling from '../../../Resources/images/players/smalling.jpg';
import PlayerCard from '../../ui/playerCard';


class Cards extends Component {

    state = {
        cards: [
            {
                bottom:150,
                left:250,
                name:'Chris',
                lastname:'Smalling',
                bck:{Smalling},
                number: 14 
            },
            {
                bottom:100,
                left:150,
                name:'Paul',
                lastname:'Pogba',
                bck:{Pogba},
                number: 17 
            },
            {
                bottom:50,
                left:50,
                name:'Marcus',
                lastname:'Rashford',
                bck:{Rashford},
                number: 19 
            },
            {
                bottom:0,
                left:-50,
                name:'Luke',
                lastname:'Shaw',
                bck:{Shaw},
                number: 23
            }
        ]
    }

    showAnimateCards = () => (
        this.state.cards.map((card,i) => (
            <Animate
                key={i}
                show={this.props.show}

                start={{
                    left:0,
                    bottom:0,
                    number: 14,
                    name: 'Chris',
                    lastname: 'Smalling'
                }}

                enter={{
                    left:[card.left],
                    bottom:[card.bottom],
                    number: [card.number],
                    timing: {duration: 500, ease: easePolyOut}
                }}
            >
                {({left, bottom, number})=>{
                    return(
                        <div
                            style={{
                                position: 'absolute',
                                left,
                                bottom
                            }}
                        >
                            <PlayerCard 
                                number= {number}
                                name= {[card.name]}
                                lastname={[card.lastname]}
                                bck={Shaw}
                            />
                            
                        </div>
                    )
                }}
            </Animate>
        ))
    )

    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default Cards;