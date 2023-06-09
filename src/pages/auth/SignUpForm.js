import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row, Container, Alert, } from "react-bootstrap";

import axios from "axios";
import styles from '../../style/SignInUp.module.css';

function SignUpForm(){
    const [signUpData, setSignUpData ] = useState ({
        username: "",
        password: "",
        password2: "",
    });
    const  { username, password, password2 } = signUpData;
    
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData, 
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            await axios.post("/dj-rest-auth-registration/", signUpData);
            history.push("/signin"); 
        } catch (err){
            setErrors(err.response?.data);
        }
    };

    return (
        <Container className={styles.Form}>
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={9}>
                <Container className={styles.Content}>
                    <h1 className={styles.Header}>Sign Up</h1>
                    <Form onSubmit={handleSubmit} >
                    <Form.Group controlId="username">
                        <Form.Label className="d-none">Username:</Form.Label>
                        <Form.Control 
                            className={styles.Input}
                            type="text" 
                            placeholder="Username" 
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label className="d-none">Password</Form.Label>
                        <Form.Control 
                            className={styles.Input}
                            type="password" 
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    {errors.password?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                    <Form.Group controlId="password2">
                        <Form.Label className="d-none"> Confrim Password</Form.Label>
                        <Form.Control 
                            className={styles.Input}
                            type="password" 
                            placeholder="Confrim Password"
                            name="password2"
                            value={password2}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                    <Button className={styles.Button} variant="primary" type="submit">
                        Sign Up
                    </Button>
                    {errors.non_field_errors?.map((message, idx) =>( 
                    <Alert key={idx} variant="warning" className="mt-3">
                        {message}
                    </Alert>
                    ))}
                    </Form>
                </Container>
                <br/>
                <Container >
                        <p> Already have an account</p>
                        <Link className={styles.Link} to="/signin">
                           <span>Sign In</span>  
                        </Link>
                </Container>
            </Col>
        </Row>
        </Container>
    );
};

export default SignUpForm;