import { Component } from "react";
import Button from "react-bootstrap/Button";

class ButtonCompito extends Component {
  render() {
    return (
      <>
        <Button>{this.props.content}</Button>
      </>
    );
  }
}

export default ButtonCompito;
