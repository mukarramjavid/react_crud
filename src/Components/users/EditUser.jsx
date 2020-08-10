import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  // accessing the values of text fields
  const inputChange = (event) => {
    const { name, value } = event.target;
    setUser((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // submit form
  const handleChange = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/");
  };
  useEffect(() => {
    console.log("Edit useEffect");
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
    console.log(result.data);
  };
  return (
    <>
      <Container id="home_container">
        <Row>
          <Col md={2}></Col>
          <Col md={8} sm={6} xs={12}>
            <div className="add_user_form">
              <h1 className="text-capitalize text-center">
                edit user ({user.id})
              </h1>
              <form onSubmit={(event) => handleChange(event)}>
                <div className="form-group">
                  <label className="control-label">Name:</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    value={user.name}
                    onChange={(event) => inputChange(event)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">UserName:</label>
                  <input
                    type="text"
                    placeholder="username"
                    className="form-control"
                    name="username"
                    value={user.username}
                    onChange={(event) => inputChange(event)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Email:</label>
                  <input
                    type="Email"
                    placeholder="xyz@example.com"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={(event) => inputChange(event)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Phone:</label>
                  <input
                    type="text"
                    placeholder="phone"
                    className="form-control"
                    name="phone"
                    value={user.phone}
                    onChange={(event) => inputChange(event)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Website:</label>
                  <input
                    type="text"
                    placeholder="website"
                    className="form-control"
                    name="website"
                    value={user.website}
                    onChange={(event) => inputChange(event)}
                    required
                  />
                </div>
                <button className="btn btn-outline-dark btn-block">
                  Update User
                </button>
              </form>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
}
