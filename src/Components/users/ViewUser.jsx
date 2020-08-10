import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUserById();
  }, []);

  const loadUserById = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
    console.log(result.data);
  };
  return (
    <>
      <Container id="home_container">
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <h1 className="text-center">{user.id}</h1>
            <div className="text-center">
              Name: {user.name}
              <br />
              UserName:{user.username}
              <br />
              Email:{user.email}
              <br />
              Phone:{user.phone}
              <br />
              Webiste:{user.website}
              <br />
              <Link className="btn btn-outline-danger" to="/">
                Back to Home
              </Link>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};
export default ViewUser;
