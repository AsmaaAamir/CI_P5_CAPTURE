import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Image, Col, Row, Container, Alert, } from "react-bootstrap";

/* import { useSetCurrentUser } from "../../contexts/CurrentUserContext"; 
import { useRedirect } from "../../hooks/useRedirect";*/
import styles from '../../style/SignInUp.module.css';
import axios from "axios";


function SignInForm(){
    return (
        <Container className={styles.Form}>
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={'${appStyles.Content} p-4'}>
                    <h1 className={styles.Header}>Sign In</h1>
                    <Form onSubmit={handleSubmit}>
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
                    <Button className={styles.Button}  variant="primary" type="submit">
                        Sign In
                    </Button>
                    {errors.non_field_errors?.map((message, idx) =>( 
                    <Alert key={idx} variant="warning" className="mt-3">
                        {message}
                    </Alert>
                    ))}
                    </Form>
                </Container>
                <Container className={'mt-3 ${appStyles.Content}'}>
                        <Link clasName={styles.Link} to="/signup">
                            <p>Don't have an account <span>Sign In</span></p>
                      </Link>
                </Container>
            </Col>
        </Row>
        </Container>

    );
}

export default SignInForm;