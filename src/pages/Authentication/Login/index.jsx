import { useState } from "react";
import { Button, Checkbox, Input, PasswordInput } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { axiosApi } from "@/axiosApi";
import styles from "../Authentication.module.css";
import toast from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();
  const [buttonLoader, setButtonLoader] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    let formErrors = {};
    if (!credentials.email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(credentials.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (!credentials.password) {
      formErrors.password = "Password is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (errors.email || errors.password) return;
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

      const { token, role } = response.data;

      if (token) {
        const tokenName = `${role}Token`;
        document.cookie = `${tokenName}=${token}; path=/`;
        if (rememberMe) {
          document.cookie = `${tokenName}=${token}; path=/; max-age=${
            60 * 60 * 24 * 30
          }`;
        }

        switch (role) {
          case "admin":
            navigate("/admin");
            break;
          case "teacher":
            navigate("/teacher");
            break;
          case "student":
            navigate("/student");
            break;
          default:
            toast.error("Role not recognized.");
        }
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials." + error);
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
              label="Email Address"
              placeholder="Enter Your Email"
              id="loginEmail"
              name="email"
              value={credentials.email}
              handleChange={handleChange}
              status={errors.email && "error"}
              errorMessage={errors.email}
            />
            <PasswordInput
              id="loginPassword"
              name="password"
              label="Password"
              placeholder="Enter Your Password"
              value={credentials.password}
              handleChange={handleChange}
              status={errors.password && "error"}
              errorMessage={errors.password}
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
