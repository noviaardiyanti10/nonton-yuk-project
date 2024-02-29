import { Container, Form, Button, Row, Col, Image} from "react-bootstrap";
import Banner from '../assets/img/banner.png';

const RegisterPage = () => {
   return(
        <div className="register-page min-vh-100 d-flex justify-content-center">
            <div className="d-flex align-items-center">
                <Container>
                    <Row>
                        <Col md="5">
                            <Image src={Banner} alt="image-1" rounded/>
                        </Col>
                        <Col md="7" sm="12">
                            <div className="card">
                                <h4 className="text-center mb-3">Hi, Welcome to NontonYuk!</h4>
                                <p className="text-center">Please enter your details</p>

                                <div className="mt-3 form-register">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label htmlFor="inputText">Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="John Doe" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicBirtDate">
                                        <Form.Label htmlFor="inputDate">Birth Date</Form.Label>
                                            <Form.Control type="date" placeholder="Birth Date" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasiPhoneNumber">
                                        <Form.Label htmlFor="inputText">Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Phone number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label htmlFor="inputEmail">Email</Form.Label>
                                            <Form.Control type="email" placeholder="Email address" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        
                                        <div className="py-2 d-flex justify-content-center">
                                            <Button variant="dark" type="submit">
                                                Register
                                            </Button>
                                        </div>
                                        
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
        
               
            </div>
        </div>
   )


}

export default RegisterPage;