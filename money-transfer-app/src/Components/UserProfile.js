import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    profileImage: 'data:image/png;base64,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',
  });

  const [formValues, setFormValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    profileImage: user.profileImage,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(formValues);
  };

  return (
    <div className="user-profile">
      <h2 className="mb-4">User Profile</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={user.profileImage} alt="Profile" className="img-fluid mb-3" />
        </div>
        <div className="col-md-8">
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>Email: {user.email}</p>

          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="firstName" className="col-sm-2 col-form-label">
                First Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className="form-control"
                  id="firstName"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="lastName" className="col-sm-2 col-form-label">
                Last Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  className="form-control"
                  id="lastName"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .user-profile {
          /* Add any additional styles you need for the component */
        }
      `}</style>
    </div>
  );
};

export default UserProfile;