import React from "react";
import Navbars from "./Navbars";
import "../Css/login.css";
import logo from "../assets/images/login.png";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <Navbars />
      <div className="Main-login">
        <div className="col">
          <h4>Đăng nhập Ymember</h4>
          <img className="login" src={logo} alt="" />

          <Form
            className="form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Nhập SDT hoặc Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    <i class="fa-solid fa-user"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="SDT/Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Không bỏ trống trường này{" "}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Nhập mật khẩu </Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    <i class="fa-solid fa-lock"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Không bỏ trống trường này
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <p>Quên mật khẩu ?</p>
            <Button className="btn-login" type="submit">
              Đăng Nhập
            </Button>
          </Form>
          <p>
            Bạn chưa có tài khoản ? <span className="color">Đăng ký ngay</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
