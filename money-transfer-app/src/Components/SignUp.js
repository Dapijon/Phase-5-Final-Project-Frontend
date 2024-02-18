import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
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
        <div className="form">
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
            <h1>Sign Up </h1>
          )}



          <form className="form-data" onSubmit={handleSubmit(submitForm)}>
            <Form.Group>
              <Form.Label>First Name: <span>  <br></br>  </span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Your first name"
                {...register("first_name", { required: true, maxLength: 30 })}
              />

              {errors.first_name && (
                <p style={{ color: "red" }}>
                  <small className="error">First Name is required</small>
                </p>
              )}

              {errors.first_name?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <span className="error">Max characters should be 30</span>
                </p>
              )}
            </Form.Group>

            <br />
            <Form.Group>
              <Form.Label>Last Name: <span>  <br></br>  </span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Your last name"
                {...register("last_name", { required: true, maxLength: 30 })}
              />

              {errors.last_name && (
                <p style={{ color: "red" }}>
                  <small className="error">Last Name is required</small>
                </p>
              )}

              {errors.last_name?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <span className="error">Max characters should be 30</span>
                </p>
              )}
            </Form.Group>

            <br />
            <Form.Group>
              <Form.Label>Date of Birth: <span>  <br></br>  </span></Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of birth"
                {...register("date_of_birth", {
                  required: true,
                  maxLength: 30,
                })}
              />

              {errors.date_of_birth && (
                <p style={{ color: "red" }}>
                  <small className="error">Date of Birth is required</small>
                </p>
              )}

              {errors.date_of_birth?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <span className="error">Max characters should be 30</span>
                </p>
              )}
            </Form.Group>

            <br />
            <Form.Group>
              <Form.Label>ID Number: <span>  <br></br>  </span></Form.Label>
              <Form.Control className="form-control"
                type="number"
                placeholder="ID Number"
                {...register("id_number", { required: true, maxLength: 8 })}
              />

              {errors.id_number && (
                <p style={{ color: "red" }}>
                  <small className="error">ID Number is Required</small>
                </p>
              )}

              {errors.id_number?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <span className="error">Max characters should be 8</span>
                </p>
              )}
            </Form.Group>

            <br />
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
              <Form.Label>Confirm Password: <span>  <br></br>  </span></Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 8,
                })}
              />

              {errors.confirmPassword && (
                <p style={{ color: "red" }}>
                  <small className="error">Confirm Password is required</small>
                </p>
              )}

              {errors.confirmPassword?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  <small className="error">Min characters should be 8</small>
                </p>
              )}
            </Form.Group>
            <br />

            <Form.Group>
              <Button className="button" type="submit" variant="primary">
                Sign Up
              </Button>
            </Form.Group>
            <br />
            <Form.Group>
              <small>
                Already have an account? <Link className="link" to="/login">Log in</Link>
              </small>
            </Form.Group>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
