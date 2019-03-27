import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, Collapse, CardBody } from 'reactstrap';

class WordCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  renderCard() {
    let cardsData = [];
    this.props.data.forEach(val => {
      cardsData.push(
        <Col sm="2">
          <Card body>
            <CardTitle>{val.word}</CardTitle>
          </Card>
        </Col>
      )
    })
    return cardsData;
  }

  render() {

    return (
      <Row>
        {this.renderCard()}
      </Row>
    );
  }

}


export default WordCard;