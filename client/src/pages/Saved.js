import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  // create a state object with a books array

  //create componentDidMount method which calls a getSavedBooks method

  //create a getSavedBooks method which gets saved books, and set state with response to books array

  //create a method to handle book deletion, pass in id

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">
                Search for and Save Books of Interest.
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              //if a books array exists with items, create a List component for
              each item and map over the books array creating a Book component
              with properties key, title, subtitle, link, authors, description,
              image, and Button with a value of a callback function that creates
              a button element with onClick property of calling handleBookDelete
              passing the argument of book id
              {}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
