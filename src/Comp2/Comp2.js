import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comp2.css';


class Comp2 extends React.Component {
  constructor() {
    super();
    this.state = {
      arr:[{skill:'html' , prof:'75%' } ,{skill:'css' , prof:'50%' } ]
    };
  }
  render() {
    return (
      <div className="skills" className="wh" style={{ backgroundColor:'#555'}}>
        <Container>
          <Row>
            <Col>
              <h2>Skills</h2>
              <p>Here are some of my skills:</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>My Focus</h4>
              <hr />
              <ul>
                <li>Web Design</li>
                <li>Back End</li>
              </ul>
            </Col>
            <Col>
           {this.state.arr.map((item) => (
  <div key={item.id}>
    <h4>{item.skill}</h4>
    <div className="progress">
      <div className="progressBar" style={{ width: item.prof }}></div>
    </div>
  </div>
))}

              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Comp2 ;
