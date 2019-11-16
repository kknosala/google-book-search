import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  //create a state object with books, q, and message('Search for a book to begin!') properties
  state = {
    books: [],
    q: "",
    message: "Search for a book to begin!"
  }

  //create handleInputChange method, grab name and value from event object, call setState method to update 
  handleInputChange = event => {
    const{name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  //create getBooks method that calls API.getBooks passing in q, then with the response update states value for the book property, always a good idea to catch an error and update state if no book was found
  getBooks() {
    API.getBooks(this.state.q).then((result) => {
      const bookArry = [];
      result.data.forEach(book => {
        bookArry.push(book);
      });
      this.setState({ books: bookArry })
      console.log(bookArry);
    })
  }

  //create handleFormSubmit method and call getBooks
 handleFormSubmit = event => {
   event.preventDefault();
   this.getBooks();
 }

  //create handleBookSave method, pass in id, create variable for book whose value will be from searching in state with the id passed in, next call API.saveBook with properties for googleId, title, subtitle, link, authors, description, image, and then call getBooks method
 handleBookSave = id => {
   API.saveBook()
 }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.map(book => (
                <Book 
                key={book.id}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                authors={book.volumeInfo.authors}
                link={book.selfLink}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                Button={book.Button}
                />
              ))}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
