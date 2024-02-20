import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginUser = (data) => {
    console.log(data)

    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch('/login', requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data.access_token);
        navigate('/');
      });
    reset();
  };

  return (
    <div className="container">
      <div className="form-contents">
        <Card className="card">
          <Card.Body>
            <h1 className="heading">Login</h1>
            <form onSubmit={handleSubmit(loginUser)}>
              <Form.Group>
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  {...register("email", { required: true, maxLength: 80 })}
                />
                {errors.email && (
                  <p className="error">Email is required</p>
                )}
                {errors.email?.type === "maxLength" && (
                  <p className="error">Max characters should be 80</p>
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
                  <p className="error">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="error">Min characters should be 8</p>
                )}
              </Form.Group>

              <button className="custom-button" type="submit">
                Login
              </button>

              <Form.Group>
                <small>
                  Do not have an account? <Link className="link" to="/signup">Create One</Link>
                </small>
              </Form.Group>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
