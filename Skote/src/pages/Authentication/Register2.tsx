import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Alert,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import CarouselPage from "./CarouselPage";
import { registerUser } from "../../store/auth/register/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoading,
  registrationError,
} from "../../store/auth/register/registerSelector";
import { RegisterModel } from "./models";

const initialValues: RegisterModel = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Register2 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const apiError = useSelector(registrationError);
  const registerLoading = useSelector(isLoading);
  document.title = "Register";

  const validation = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email should be valid")
        .required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
      confirmPassword: Yup.string()
        .required("Please Enter Your Confirm Password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values: RegisterModel) => {
      dispatch(registerUser(values, history));
    },
  });
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0">
            <CarouselPage />

            <Col xl={3}>
              <div className="auth-full-page-content p-md-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5">
                      <Link to="dashboard" className="d-block auth-logo">
                        <img
                          src={logodark}
                          alt=""
                          height="18"
                          className="auth-logo-dark"
                        />
                        <img
                          src={logolight}
                          alt=""
                          height="18"
                          className="auth-logo-light"
                        />
                      </Link>
                    </div>
                    <div className="my-auto">
                      <div>
                        <h5 className="text-primary">Register account</h5>
                        <p className="text-muted">
                          Get your free Skote account now.
                        </p>
                      </div>

                      <div className="mt-4">
                        <Form
                          className="form-horizontal"
                          onSubmit={(e: SubmitEvent) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                        >
                          {apiError ? (
                            <Alert color="danger">{apiError}</Alert>
                          ) : null}
                          <div className="mb-3">
                            <Label className="form-label">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={
                                !!(
                                  validation.touched.email &&
                                  validation.errors.email
                                )
                              }
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">Password</Label>
                            <Input
                              name="password"
                              type="password"
                              placeholder="Enter Password"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.password || ""}
                              invalid={
                                !!(
                                  validation.touched.password &&
                                  validation.errors.password
                                )
                              }
                            />
                            {validation.touched.password &&
                            validation.errors.password ? (
                              <FormFeedback type="invalid">
                                {validation.errors.password}
                              </FormFeedback>
                            ) : null}
                          </div>
                          <div className="mb-3">
                            <Label className="form-label">
                              Confirm Password
                            </Label>
                            <Input
                              name="confirmPassword"
                              type="password"
                              placeholder="Enter Confirmation of the Password"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.confirmPassword || ""}
                              invalid={
                                !!(
                                  validation.touched.confirmPassword &&
                                  validation.errors.confirmPassword
                                )
                              }
                            />
                            {validation.touched.confirmPassword &&
                            validation.errors.confirmPassword ? (
                              <FormFeedback type="invalid">
                                {validation.errors.confirmPassword}
                              </FormFeedback>
                            ) : null}
                          </div>
                          <div>
                            <p className="mb-0">
                              By registering you agree to the Skote{" "}
                              <a href="#" className="text-primary">
                                Terms of Use
                              </a>
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              className="btn btn-primary btn-block "
                              type="submit"
                              disabled={registerLoading}
                            >
                              Register
                            </button>
                          </div>
                        </Form>

                        <Form action="dashboard">
                          <div className="mt-4 text-center">
                            <h5 className="font-size-14 mb-3">Sign up using</h5>

                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  className="social-list-item bg-primary text-white border-primary"
                                >
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  className="social-list-item bg-info text-white border-info"
                                >
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  className="social-list-item bg-danger text-white border-danger"
                                >
                                  <i className="mdi mdi-google"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </Form>

                        <div className="mt-5 text-center">
                          <p>
                            Already have an account ?{" "}
                            <Link
                              to="login"
                              className="font-weight-medium text-primary"
                            >
                              {" "}
                              Login
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()}
                        Skote. Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i> by
                        Themesbrand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register2;
