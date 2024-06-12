import "../components/Register.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Container, Col, Button, Form } from "react-bootstrap";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3500/auth/register",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Issue with the operation:", error);
    }
  };

  return (
    <>
      <Container className="py-5">
        <Col className="register-form form-container">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="label-color">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                {...register("email", { required: "Email is required" })}
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
                {...register("username", { required: "Username is required" })}
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
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </Form.Group>
            <Button type="submit">Create Account</Button>
          </Form>
        </Col>
      </Container>
    </>
  );
}

export default Register;
