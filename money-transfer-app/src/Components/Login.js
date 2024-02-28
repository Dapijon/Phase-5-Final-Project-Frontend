import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signInReducer } from "../app/authSlice";
import { UseDispatch} from "react-redux";
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
    console.log(data);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch('http://127.0.0.1:5000/auth/login', requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log(data.access_token);
        navigate('/analytics');
        reset();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  // handle sign in using redux

  const handleLogin = () => {
    dispatchEvent(signInReducer())
  }

  return (
    <div className="container">
      <div className="form">
        <h1 className="heading">Login </h1>
        <form>
          <Form.Group>
            <Form.Label>Email Address: <span>  <br></br>  </span></Form.Label>
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
          <br />
          <Form.Group>
            <Form.Label>Password: <span>  <br></br>  </span></Form.Label>
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
          <br />
          <Form.Group>
            <Button
              className="lg-btn"
              type="button"
              variant="primary"
              size='lg'
              onClick={handleSubmit(loginUser)}
            >
              Login
            </Button>
          </Form.Group>
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
