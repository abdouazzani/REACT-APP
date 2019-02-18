import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish) {
    return(
      <Card dish={dish}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      comments.map((comment) => {
        console.log(`${comment.comment} ${comment.author} ${comment.date}`);

        return(
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>—{comment.author} {comment.date}</p>
        </li>
        );
      });
    } else {
      return(
        <div></div>
      );
    }
  }

  render() {
    const { dish } = this.props;
    console.log(`dish: ${dish.name}`);
    const comments = dish.comments;
    console.log(`typeof comments: ${typeof comments}`);
    console.log(`comments: ${comments}`);

    if (dish != null) {
      return(
        <div className="row">
          <div className="dishDetail col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>
          <div className="comments col-12 col-md-5 m-1">
            {/* comments go here */}
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {this.renderComments(comments)}
            </ul>
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default DishDetail;
