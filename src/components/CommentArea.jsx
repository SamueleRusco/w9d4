import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1ODUzY2EyNDc4ZDAwMTNhMDVmOWUiLCJpYXQiOjE2NzU5ODYyMzYsImV4cCI6MTY3NzE5NTgzNn0.H8bhCGp2wF671QGH78KPiC5RIwQ4ET-nzgJz-ZCpb3Y",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        let commentArray = [];
        data.forEach((obj) => {
          commentArray.push(obj.comment);
        });

        this.setState({ comments: commentArray });
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <>
        <CommentList commenti={this.state.comments} />
        <InputGroup>
          <Button variant="outline-secondary" id="button-addon1">
            share
          </Button>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </>
    );
  }
}

export default CommentArea;
