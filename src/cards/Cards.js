import React from 'react';
import Card from 'react-bootstrap/Card';
import './cards.css';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [
        { skill: 'html', col: 'secondary' },
        { skill: 'mobile app', col: 'dark' },
        { skill: 'Front-end Developer', col: 'primary' },
        { skill: 'Back-end Developer', col: 'info' },
        { skill: 'Data Scientist', col: 'warning' },
        { skill: 'DevOps Engineer', col: 'success' },
        { skill: 'UI/UX Designer', col: 'danger' },
      ],
    };
  }

  render() {
    return (
      <div className="card-container">
        {this.state.arr.map((item, index) => (
          <div key={item.skill} className="a">
            <Card bg={index % 2 === 0 ? 'dark' : 'secondary'} text="white">
              <Card.Body>{item.skill}</Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
