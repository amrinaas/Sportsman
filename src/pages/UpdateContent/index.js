import React, { useState, useEffect } from "react";
import {
  Container,
  FormGroup,
  Input,
  Label,
  Form,
  Button,
  Row,
  Col,
  Alert,
} from "reactstrap";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getContentById, putContent } from "../../redux/Action/contentAction";
import { useParams } from "react-router-dom";

const UpdateContent = () => {
  useEffect(() => {
    document.title = "Update Content";
  }, []);

  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const content = useSelector((state) => state.content.video);
  const message = useSelector((state) => state.content.message);

  const [input, setInput] = useState(content);
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putContent(token, input, id));
  };

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getContentById(token, id));
  }, [dispatch, token, id]);

  console.log("get one input =>", input.video);
  console.log("get one message =>", message);

  return (
    <>
      <Row>
        {/* <Navbar /> */}
        <Col md="3">
          <Sidebar />
        </Col>
        <Col md="9">
          <Container className="mt-4 mb-2 video-content-add-container">
            {message.status === 201 ? (
              <Alert color="info" isOpen={visible} toggle={onDismiss}>
                {message.data.message}
              </Alert>
            ) : (
              ""
            )}
            <Form onSubmit={handleSubmit}>
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Title</Label>
                  <Input
                    name="title"
                    // name={`title`}
                    // value={inp.title}
                    placeholder="Title"
                    type="text"
                    value={input.title}
                    onChange={(e) => handleChangeInput(e)}
                  />
                </FormGroup>
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Image</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    name="image"
                    placeholder="Image"
                    type="text"
                    value={input.image}
                  />
                </FormGroup>
              </Row>
              <FormGroup className="col-md-4">
                <Label for="exampleText">Description</Label>
                <Input
                  onChange={(e) => handleChangeInput(e)}
                  type="textarea"
                  name="description"
                  id="exampleText"
                  value={input.description}
                />
              </FormGroup>
              <Row>
                {/* <FormGroup>
                  <Label for="exampleEmail">Time</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    // name="title"
                    name="time"
                    // value={inp.image}
                    placeholder="Time"
                    type="text"
                    value={input.time}
                  />
                </FormGroup> */}
                <FormGroup className="ml-4">
                  <Label for="exampleEmail">Equipment</Label>
                  <Input
                    onChange={(e) => handleChangeInput(e)}
                    // name="title"
                    name="equipment"
                    // value={inp.image}
                    placeholder="Time"
                    type="text"
                    value={input.equipment}
                  />
                </FormGroup>
              </Row>

              <Row>
                <FormGroup tag="fieldset" row>
                  <legend className="col-form-label col-sm-2">Gender</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="gender"
                        id="radio2-option1"
                        value="male"
                        onChange={(e) => handleChangeInput(e)}
                        checked={input.gender === "male"}
                      />
                      <Label check for="radio2-option1">
                        Male
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="gender"
                        id="radio2-option2"
                        value="female"
                        checked={input.gender === "female"}
                        onChange={(e) => handleChangeInput(e)}
                      />
                      <Label check for="radio2-option2">
                        Female
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup tag="fieldset" row className="ml-4">
                  <legend className="col-form-label col-sm-2">Intensity</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="intensity"
                        id="radio2-option1"
                        value="low"
                        onChange={(e) => handleChangeInput(e)}
                        checked={input.gender === "low"}
                      />
                      <Label check for="radio2-option1">
                        Low
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="intensity"
                        id="radio2-option2"
                        value="medium"
                        onChange={(e) => handleChangeInput(e)}
                        checked={input.gender === "medium"}
                      />
                      <Label check for="radio2-option2">
                        Medium
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="intensity"
                        id="radio2-option2"
                        value="high"
                        onChange={(e) => handleChangeInput(e)}
                        checked={input.gender === "high"}
                      />
                      <Label check for="radio2-option2">
                        High
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Row>

              {/* {input.video.length === 0 ? (
                <h3>Loading...</h3>
              ) : (
                <>
                  {input.video.map((video, i) => (
                    <Row key={i}>
                      <FormGroup>
                        <Label for="exampleEmail">Url </Label>
                        <Input
                          onChange={(e) => handleChangeInput(e)}
                          // name="title"
                          name="url1"
                          // value={inp.image}
                          placeholder="Url 1"
                          type="text"
                          value={input.video[i].videoUrl}
                        />
                      </FormGroup>
                      <FormGroup className="ml-4">
                        <Label for="exampleEmail">Time </Label>
                        <Input
                          onChange={(e) => handleChangeInput(e)}
                          // name="title"
                          name="time1"
                          // value={inp.image}
                          placeholder="Time"
                          type="text"
                          value={input.video[i].time}
                        />
                      </FormGroup>
                    </Row>
                  ))}
                </>
              )} */}

              {/* {inputList.map((inp, i) => {
                return (
                  <>
                    <Row>
                      <FormGroup>
                        <Label for="examplePassword">URL</Label>
                        <Input
                          onChange={(e) => handleChangeUrl(e, i)}
                          // value={inp.url}
                          name={`url${number}`}
                          type="text"
                          placeholder="URL"
                        />
                      </FormGroup>
                      <FormGroup className="ml-4">
                        <Label for="examplePassword">Timer</Label>
                        <Input
                          onChange={(e) => handleChangeUrl(e, i)}
                          // value={inp.timer}
                          name={`timer${number}`}
                          type="text"
                          placeholder="Timer"
                        />
                      </FormGroup>
                    </Row>
                    {inputList.length !== 1 && (
                      <Button
                        outline
                        color="danger"
                        className="mr-2 ml-1  "
                        onClick={() => handleRemoveInput(i)}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>
                    )}
                    {inputList.length - 1 === i && (
                      <Button
                        outline
                        color="primary"
                        onClick={() => handleAddInput(i)}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    )}
                  </>
                );
              })} */}
              <br />
              <Button outline color="primary" className="col-md-4 mt-2 mb-2">
                Update
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default UpdateContent;
