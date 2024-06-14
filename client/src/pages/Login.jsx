import "../components/Login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Container, Col, Button, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

function Login() {
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3500/auth/login",
        data
      );
      if (response.status === 201) {
        setResponseMessage("Account created sucessfully!");
        navigate("/dashboard");
      } else if (response.status === 400) {
        setResponseMessage("Invalid Credentials. Please try again.");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Issue with the operation:", error);
    }
  };

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
      >
        <Row className="w-100 justify-content-center">
          <Col className="register-form form-container" md="7" lg="4">
            <h1 className="label-color">Log In</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="label-color">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                  })}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label className="label-color">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <p className="error-message">{errors.username.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="label-color">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter a password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: "10",
                      message: "At least 10 characters.",
                    },
                  })}
                />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </Form.Group>
              <div className="d-flex justify-content-center pt-1">
                <Button type="submit" className="log-in">
                  Log In
                </Button>
              </div>
              <div className="line">
                <span className="line-l"></span>
                <span className="option">OR</span>
                <span className="line-r"></span>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/register">
                  <Button type="button" className="create-acct">
                    Create Account
                  </Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
