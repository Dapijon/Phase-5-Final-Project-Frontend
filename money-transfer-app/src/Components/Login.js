import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signIn } from "../app/authSlice";
import "./Login.css";

function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const loginUser = async (data) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      const response = await fetch('http://127.0.0.1:5000/auth/login', requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log(responseData.access_token);
      dispatch(signIn({ accessToken: responseData.access_token, user: responseData.user }));
      navigate('/analytics');
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1 className="heading-login">Login</h1>
        <form onSubmit={handleSubmit(loginUser)}>
          <Form.Group>
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              {...register("email", { required: true, maxLength: 80 })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>
                <small className="error">Email is required</small>
              </p>
            )}
            {errors.email?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small className="error">Max characters should be 80</small>
              </p>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>
                <small className="error">Password is required</small>
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p style={{ color: "red" }}>
                <small className="error">Min characters should be 8</small>
              </p>
            )}
          </Form.Group>
          <Button type="submit" variant="primary" size="lg">
            Login
          </Button>
          <br />
          <Form.Group>
            <small>
              Do not have an account? <Link className="link" to="/signup">Create One</Link>
            </small>
          </Form.Group>
        </form>
      </div>
    </div>
  );
}

export default Login;
