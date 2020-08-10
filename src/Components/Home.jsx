import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Home useEffect");
    loadAllUsers();
  }, []);

  const loadAllUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data.reverse());
    // console.log(result.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadAllUsers();
  };
  return (
    <Container id="home_container">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <h1>Home Page</h1>
          <table className="table table-striped table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                {/* <th scope="col">id</th> */}
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    {/* <td>{user.id}</td> */}
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>
                      <Link
                        className="btn btn-outline-primary btn-sm mr-2"
                        to={`/user/${user.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-success btn-sm mr-2"
                        to={`/user/edit/${user.id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                        to=""
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
