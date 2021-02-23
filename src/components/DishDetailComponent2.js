import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail2 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            selectedDetail: null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDetail : dish});
    }

    renderDish(dish) {
        if (dish!=null)
            return(
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <Card><h4>Comments</h4>{dish.comments.map((komen)=>{
                    return(
                        <div className="m-1">
                            <Card key={komen.id} width="100%">
                            <CardTitle>{komen.id}</CardTitle>
                            <CardText>{komen.rating}</CardText>
                            <CardText>{komen.comment}</CardText>
                            <CardText>{komen.author}</CardText>
                            <CardText>{new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(komen.date)))}</CardText>
                            </Card>
                        </div>
                    );
                })}</Card>
                </div>
                </div>
            );
        else
            return(
                <div></div>
            )
    
    }

    render() { 
        return (
                <div className="container">
                        {this.renderDish(this.props.dish)}
                </div>
         );
    }
}
 
export default DishDetail2;