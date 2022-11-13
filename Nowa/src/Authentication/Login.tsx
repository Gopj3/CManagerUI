import React, { FormEvent, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ILoginModel } from "./models";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const initialLoginState: ILoginModel = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/dashboard/dashboard-1/`;
    navigate(path);
  };

  return (
    <React.Fragment>
      <div className="square-box"></div>
      <div className="page bg-primary">
        <div className="page-single">
          <div className="container" style={{ marginTop: "89px" }}>
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className="card-sigin-main mx-auto my-auto py-4 justify-content-center"
              >
                <div className="card-sigin">
                  {/* <!-- Demo content--> */}
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      <div className="d-flex mb-4">
                        <Link to="#">
                          <img
                            src={require("../assets/img/brand/favicon.png")}
                            className="sign-favicon ht-40"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="">
                        <div className="main-signup-header">
                          <h2>Welcome back!</h2>
                          <h6 className="font-weight-semibold mb-4">
                            Please sign in to continue.
                          </h6>
                          <div className="panel panel-primary">
                            <div className=" tab-menu-heading mb-2 border-bottom-0">
                              <div className="tabs-menu1">
                                <Formik
                                  initialValues={initialLoginState}
                                  validationSchema={validationSchema}
                                  onSubmit={(values) => console.log(values)}
                                >
                                  {({
                                    values,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                  }) => (
                                    <Form
                                      onSubmit={(
                                        e: FormEvent<HTMLFormElement>
                                      ) => {
                                        console.log(e);
                                        e.preventDefault();
                                        handleSubmit();
                                      }}
                                    >
                                      <Form.Group className="form-group">
                                        <Form.Label className="">
                                          Email
                                        </Form.Label>{" "}
                                        <Form.Control
                                          className="form-control"
                                          placeholder="Enter your email"
                                          name="email"
                                          type="text"
                                          value={values.email}
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          required
                                        />
                                      </Form.Group>
                                      <Form.Group className="form-group">
                                        <Form.Label>Password</Form.Label>{" "}
                                        <Form.Control
                                          className="form-control"
                                          placeholder="Enter your password"
                                          name="password"
                                          type="password"
                                          value={values.password}
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          required
                                        />
                                      </Form.Group>
                                      <Button
                                        variant=""
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                      >
                                        Sign In
                                      </Button>

                                      <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                        <Link
                                          to="https://www.facebook.com/"
                                          target="_blank"
                                          className="btn btn-icon btn-facebook me-3"
                                          type="button"
                                        >
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                          </span>
                                        </Link>
                                        <Link
                                          to="https://www.twitter.com/"
                                          target="_blank"
                                          className="btn btn-icon me-3"
                                          type="button"
                                        >
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                          </span>
                                        </Link>
                                        <Link
                                          to="https://www.linkedin.com/"
                                          target="_blank"
                                          className="btn btn-icon me-3"
                                          type="button"
                                        >
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                          </span>
                                        </Link>
                                        <Link
                                          to="https://www.instagram.com/"
                                          target="_blank"
                                          className="btn  btn-icon me-3"
                                          type="button"
                                        >
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                          </span>
                                        </Link>
                                      </div>
                                      <div className="main-signin-footer text-center mt-3">
                                        <p>
                                          <Link to="#" className="mb-3">
                                            Forgot password?
                                          </Link>
                                        </p>
                                        <p>
                                          Don't have an account ?{" "}
                                          <Link
                                            to={`${process.env.PUBLIC_URL}/authentication/signup`}
                                            className=""
                                          >
                                            {" "}
                                            Create an Account
                                          </Link>
                                        </p>
                                      </div>
                                    </Form>
                                  )}
                                </Formik>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
