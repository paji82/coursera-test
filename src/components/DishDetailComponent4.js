import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, 
    Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class  DishDetail extends Component { 
        constructor(props) {
            super(props);
            
            this.state = {
                isModalOpen: false
            };

            this.toggleModal = this.toggleModal.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
        }

        toggleModal() {
            this.setState({
            isModalOpen: !this.state.isModalOpen
            });
        }

        handleLogin(values) {
            this.toggleModal();
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
        }

        RenderDish(dish, comments) {
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
                    <Button outline onClick={this.toggleModal}><span className="fa fa-spinner fa-spin fa-lg"></span> Submit Comment</Button>
                    </div>
                    </div>
                );
            else
                return(
                    <div>Null</div>
                )
        
        }
        
        CommentForm (){
            return(
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleLogin(values)}>
                            <Row className="form-group">
                                <Col xs="2">
                                <Label htmlFor="rating">Rating</Label>
                                </Col>
                                <Col xs="auto" md={9}>
                                <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs="2">
                                <Label htmlFor="firstname">Your Name</Label>
                                </Col>
                            <Col xs="auto" md={9}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="Name"
                                        className="form-control" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Comments</Label>
                                <Col md={10}>
                                <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                        </ModalBody>
                    </Modal>
            )
        }

        render(){
        return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                    </div>
                    {this.RenderDish(this.props.dish,this.props.comments)}
                    {this.CommentForm()}
                    
                </div>
         );
        }
    }

 
export default DishDetail;