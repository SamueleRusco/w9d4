import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.commenti.map((commento, index) => (
          <SingleComment key={index} comment={commento} />
        ))}
      </div>
    );
  }
}
export default CommentList;
