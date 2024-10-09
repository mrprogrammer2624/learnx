import { useState } from "react";
import { Button, Checkbox, Input, PasswordInput } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { axiosApi } from "@/axiosApi";
import { message } from "antd";
import styles from "../Authentication.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const [buttonLoader, setButtonLoader] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      const response = await axiosApi.post("/admin/login", credentials, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      const { token } = response.data;
      if (token) {
        document.cookie = `adminToken=${token}; path=/`;
        if (rememberMe) {
          document.cookie = `adminToken=${token}; path=/; max-age=${
            60 * 60 * 24 * 30
          }`;
        }
        navigate("/admin");
      }
    } catch (error) {
      message.error("Login failed. Please check your credentials." + error);
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <>
      <div className="w-100"></div>
      <div className="w-100">
        <div className={styles.AuthContentWrapper}>
          <h1 className="fw-semibold">Welcome</h1>
          <p>Please login here</p>
        </div>
        <form
          name="AuthLogin"
          className={styles.FromWrapper}
          onSubmit={handleSubmit}
        >
          <div className={styles.FormInputWrapper}>
            <Input
              required
              label="Email Address"
              placeholder="Enter Your Email"
              id="loginEmail"
              name="email"
              value={credentials.email}
              handleChange={handleChange}
            />
            <PasswordInput
              required
              id="loginPassword"
              name="password"
              label="Password"
              placeholder="Enter Your Password"
              value={credentials.password}
              handleChange={handleChange}
            />
            <div className="d-flex align-items-center justify-content-between">
              <Checkbox checked={rememberMe} onChange={handleCheckboxChange}>
                Remember Me
              </Checkbox>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <Button
            variant="primary"
            htmlType="submit"
            loading={buttonLoader}
            block
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};
