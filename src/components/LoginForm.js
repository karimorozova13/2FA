import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import styled from "styled-components";

import { colors } from "@/config/colors";
import { authApi } from "@/utils/authApi";

import Input from "./Input";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Checkbox from "./Checkbox";
import CTA from "./CTA";
import LinksText from "./LinksText";
import FormContainer from "./FormContainer";
import { useEffect, useState } from "react";

const PasswordActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  p {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.text};
    transition: color 250ms cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    &:hover {
      color: ${colors.cta};
    }
  }
`;

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getCookie = (val) => {
    const name = val + "=";
    const decodedCookie = decodeURIComponent(document.cookie);

    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i += 1) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }

      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  };
  const [initialState, setInitialState] = useState({
    password,
    email,
    savePassword: true,
  });

  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };
  const login = async (values) => {
    try {
      const res = await authApi.login(values);
      localStorage.setItem("token", res.token);
      if (values.savePassword) {
        setCookie("email", values.email, 30);
        setCookie("password", values.password, 30);
      }
      router.push("/welcome");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setEmail(getCookie("email"));
    setPassword(getCookie("password"));
    setInitialState((prevState) => ({
      ...prevState,
      password: getCookie("password"),
      email: getCookie("email"),
    }));
  }, [email, password]);

  return (
    <FormContainer>
      <Title title={"Welcome back"} />
      <SubTitle mb={40} title={"Please enter your details"} />
      <Formik
        initialValues={initialState}
        validationSchema={Yup.object().shape({
          email: Yup.string().required().label("Email"),
          password: Yup.string().required().label("Password"),
          savePassword: Yup.boolean().required(),
        })}
        onSubmit={login}
        validateOnChange={true}
      >
        {({ handleChange, handleSubmit, handleBlur, values }) => {
          console.log(initialState, "initialState");
          console.log(values, "values");

          return (
            <Form>
              <Input>
                <label htmlFor="email">{"Email"}</label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={"Enter your email"}
                  autoComplete="email"
                />
              </Input>

              <Input>
                <label htmlFor="password">{"Password"}</label>

                <Field
                  type={"password"}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={"Enter your password"}
                  autoComplete="current-password"
                />
              </Input>
              <PasswordActions>
                <Checkbox isChecked={values.savePassword}>
                  <Field
                    type="checkbox"
                    name="savePassword"
                    id="savePassword"
                  />
                  <label htmlFor="savePassword">{"Remember for 30 days"}</label>
                </Checkbox>
                <p>{"Forgot password"}</p>
              </PasswordActions>
              <CTA mb={40} text={"Sign in"} />
            </Form>
          );
        }}
      </Formik>
      <LinksText
        href={"/register"}
        title={"Don't have an account?"}
        linkText={"Sign up"}
      />
    </FormContainer>
  );
};

export default LoginForm;
