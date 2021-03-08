import React, { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar1";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col, Table, Button } from "reactstrap";
import Sidebar from "../../components/Sidebar";
import { deleteContent, getContent } from "../../redux/Action/contentAction";

const AdminContent = () => {
  useEffect(() => {
    document.title = "Add Content";
  }, []);

  const history = useHistory();
  const contents = useSelector((state) => state.content.content);
  const message = useSelector((state) => state.content.message);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContent(token));
  }, [dispatch, token]);
  console.log("message =>", message);

  const handleDelete = (id) => {
    // history.push(`admin-content/${id}`);
    dispatch(deleteContent(token, id));
  };

  useEffect(() => {
    if (message.status === 200) {
      window.location.reload();
    }
  }, [message]);

  return (
    <>
      <Row>
        <Col md="3">
          <Sidebar />
        </Col>
        <div className="add-content-page">
          <Col md="9">
            <div class="admin-content-jumbotron-l"></div>
            <Button
              onClick={() => history.push(`add-content`)}
              outline
              color="primary"
              className="mr-1 mb-3"
            >
              Add New Workout
            </Button>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Workout Name</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contents.length === 0 || undefined ? (
                  <h4>Loading...</h4>
                ) : (
                  <>
                    {contents.map((content, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{content.title}</td>
                        <td>{content.gender}</td>
                        <td>
                          <Button
                            onClick={() =>
                              history.push(`update-content/${content._id}`)
                            }
                            outline
                            color="warning"
                            className="mr-1"
                          >
                            <i
                              className="fas fa-edit"
                              style={{ fontSize: "20px" }}
                            ></i>
                          </Button>
                          <Button
                            onClick={() => handleDelete(content._id)}
                            outline
                            color="danger"
                            className="mr-1"
                          >
                            <i
                              className="fas fa-trash-alt"
                              style={{ fontSize: "20px" }}
                            ></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </Col>
        </div>
      </Row>
    </>
  );
};
export default AdminContent;
