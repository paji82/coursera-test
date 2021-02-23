import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderDish({dish, comments}) {
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
                <Card><h4>Comments</h4>{comments.map((komen)=>{
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

    const  DishDetail = (props) =>  { 
        return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                    </div>
                        <RenderDish dish={props.dish} comments={props.comments}/>
                </div>
         );
    }

 
export default DishDetail;