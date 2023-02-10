import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

// const SingleBook = ({ immagine, titolo }) => {
//   return (
//     <>
//       <Col className="d-flex justify-content-center" xs={12} md={4}>
//         <Card className="book-cover justify-content-between">
//           <div>
//             <Card.Img className="img" variant="top" src={immagine} />
//           </div>
//           <Card.Body style={{ flex: "none" }}>
//             <Card.Title>{titolo}</Card.Title>
//           </Card.Body>
//         </Card>
//       </Col>
//     </>
//   );
// };

class SingleBook extends Component {
  state = {
    selected: false,
  };

  togglerSelected() {
    this.setState({
      selected: !this.state.selected,
    });
  }

  render() {
    return (
      <>
        <Col className="d-flex justify-content-center" xs={12} md={4}>
          <Card
            className={
              //if in riga= rispetta questa condizione ? se la condizione è vera : se la condizione è falsa
              "book-cover justify-content-between " +
              (this.state.selected ? "border-danger" : "")
            }
          >
            <div>
              <Card.Img
                onClick={() => this.togglerSelected()}
                className="img"
                variant="top"
                src={this.props.immagine}
              />
            </div>
            <Card.Body style={{ flex: "none" }}>
              <Card.Title>{this.props.titolo}</Card.Title>
            </Card.Body>
            {this.state.selected && <CommentArea asin={this.props.asin} />}
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
