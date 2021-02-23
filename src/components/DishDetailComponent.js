import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, 
    Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

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

        handleLogin(values,dish) {
            this.toggleModal();
            this.props.postComment(dish.id, values.rating, values.firstname, values.message);
        }

        RenderDish(dish, comments, postComment) {
            if (this.props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (this.props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{this.props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if (this.props.dish != null) 
                return(
                    <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card key={dish.id}>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>
                        </FadeTransform>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <Stagger in>
                    <Card><h4>Comments</h4>{comments.map((komen)=>{
                        return(
                            <div className="m-1">
                                <Fade in>
                                <Card key={komen.id} width="100%">
                                <CardText>Rating :{komen.rating}</CardText>
                                <CardText>{komen.comment}</CardText>
                                <CardText>{komen.author}</CardText>
                                <CardText>{new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(komen.date)))}</CardText>
                                </Card>
                                </Fade>
                            </div>
                        );
                    })}</Card>
                    </Stagger>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-spinner fa-spin fa-lg"></span> Submit Comment</Button>
                    </div>
                    </div>
                );
            else
                return(
                    <div>Null</div>
                )
        
        }
        
        CommentForm (dish){
            return(
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleLogin(values,dish)}>
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
                    {this.RenderDish(this.props.dish,this.props.comments,this.props.postComment)}
                    {this.CommentForm(this.props.dish)}
                    
                </div>
         );
        }
    }

 
export default DishDetail;