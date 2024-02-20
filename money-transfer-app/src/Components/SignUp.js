import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUp.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(true);
  const [serverResponse, setServerResponse] = useState("");

  const submitForm = async (data) => {
    if (data.password === data.confirmPassword) {
      const body = {
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        id_number: data.id_number,
        email: data.email,
        password: data.password,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      fetch("/signup", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setServerResponse(data.message);
          console.log(serverResponse);

          setShow(true);
        })
        .catch((err) => console.log(err));

      reset();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="container">
      <div className="form-contents">
        <Card className="card">
          <Card.Body>
            {show ? (
              <>
                <Alert
                  variant="success"
                  onClose={() => setShow(false)}
                  dismissible
                >
                  <p>{serverResponse}</p>
                </Alert>
                <h1 className="heading">Sign Up</h1>
              </>
            ) : (
              <h1>Sign Up</h1>
            )}

            <form className="form-data" onSubmit={handleSubmit(submitForm)}>
              <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your first name"
                  {...register("first_name", { required: true, maxLength: 30 })}
                />
                {errors.first_name && (
                  <p className="error">First Name is required</p>
                )}
                {errors.first_name?.type === "maxLength" && (
                  <p className="error">Max characters should be 30</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your last name"
                  {...register("last_name", { required: true, maxLength: 30 })}
                />
                {errors.last_name && (
                  <p className="error">Last Name is required</p>
                )}
                {errors.last_name?.type === "maxLength" && (
                  <p className="error">Max characters should be 30</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Date of Birth:</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date of birth"
                  {...register("date_of_birth", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                {errors.date_of_birth && (
                  <p className="error">Date of Birth is required</p>
                )}
                {errors.date_of_birth?.type === "maxLength" && (
                  <p className="error">Max characters should be 30</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>ID Number:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="ID Number"
                  {...register("id_number", { required: true, maxLength: 8 })}
                />
                {errors.id_number && (
                  <p className="error">ID Number is Required</p>
                )}
                {errors.id_number?.type === "maxLength" && (
                  <p className="error">Max characters should be 8</p>
                )}
              </Form.Group>

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

              <Form.Group>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 8,
                  })}
                />
                {errors.confirmPassword && (
                  <p className="error">Confirm Password is required</p>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <p className="error">Min characters should be 8</p>
                )}
              </Form.Group>
              
              /*changed the button component here*/
              <button className="custom-button" type="submit">
                Sign Up
              </button>
            </form>

            <Form.Group>
              <small>
                Already have an account?{" "}
                <Link className="link" to="/login">
                  Log in
                </Link>
              </small>
            </Form.Group>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
