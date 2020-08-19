import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import bulba from './images/bulbasaur.jpeg';
import './stylesheet.css';

const CardView = () => {
    let hoverView = () => {
        console.log('Hover');
        return (<div style={{backgroundColor: 'blue'}}>
             <Button variant="primary">Primary</Button>
        </div>)
    }
    return (
        <div>
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                <Card style={{ flex: 1 }}>
                    <Card.Img className="card-img" variant="top" src={bulba} onMouseEnter={hoverView}/>
                    <Card.Body>
                        <Card.Title>Bulbasaur</Card.Title>
                        <Card.Text>Water</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ flex: 1 }}>
                    <Card.Img className="card-img" variant="top" src={bulba} />
                    <Card.Footer>
                        <p>bulbasaur</p>
                        <br />
                        <small>water</small>
                    </Card.Footer>
                </Card>
                <Card style={{ flex: 1 }}>
                    <Card.Img className="card-img" variant="top" src={bulba} />
                    <Card.Body>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default CardView;