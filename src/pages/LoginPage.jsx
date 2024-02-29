import { Container, Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () =>{
    return (
        <div className="login-page min-vh-100 d-flex justify-content-center">
            <div className="d-flex align-items-center">
                <Container>
                    <div className="card">
                        <h4 className="text-center mb-4">NontonYuk!</h4>
                        <p className="text-center">Login</p>

                        <div className="mt-4 form-login">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email address" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                
                                <div className="mt-5 d-flex justify-content-center">
                                    <Button type="submit">
                                        Login
                                    </Button>
                                </div>
                                <p className="mt-4 text-center">Not have a account? <Link to="/register" className="text-decoration-none">Register</Link> </p>
                                
                            </Form>
                        </div>

                        
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default LoginPage;