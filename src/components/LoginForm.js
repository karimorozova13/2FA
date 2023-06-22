import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { colors } from "@/config/colors";
import { snakeBg } from "@/config/images";
import React from "react";
import { styled } from "styled-components";
import Container from "./Container";
import Input from "./Input";
import Section from "./Section";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Checkbox from "./Checkbox";
import CTA from "./CTA";
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    border-radius: 0;
  }
`;
const RightSide = styled.div`
  background-image: url(${snakeBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: calc(100% / 2);
  min-height: 500px;
  @media only screen and (max-width: 767px) {
    flex-basis: 0;
  }
`;
const LeftSide = styled.div`
  background-color: ${colors.loginBg};
  flex-basis: calc(100% / 2);
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;

  form {
    width: 100%;
    max-width: 450px;
  }
  @media only screen and (max-width: 991px) {
    padding: 0 15px;
  }
  @media only screen and (max-width: 767px) {
    flex-basis: 100%;
    border-radius: 4px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
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
  return (
    <Section h={"100vh"} bg={`${colors.sectionbg}`}>
      <Container>
        <Wrap>
          <LeftSide>
            <Title title={"Welcome back"} />
            <SubTitle mb={40} title={"Please enter your details"} />
            <Formik
              initialValues={{
                password: "",
                email: "",
                savePassword: false,
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().required().label("Email"),
                password: Yup.string().required().label("Password"),
                savePassword: Yup.boolean().required(),
              })}
              onSubmit={(values) => console.log(values)}
              validateOnChange={true}
            >
              {({ handleChange, handleSubmit, handleBlur, values }) => {
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
                        autoComplete="password"
                      />
                    </Input>
                    <PasswordActions>
                      <Checkbox isChecked={values.savePassword}>
                        <Field
                          type="checkbox"
                          name="savePassword"
                          id="savePassword"
                        />
                        <label htmlFor="savePassword">
                          {"Remember for 30 days"}
                        </label>
                      </Checkbox>
                      <p>{"Forgot password"}</p>
                    </PasswordActions>
                    <CTA text={"Sign in"} />
                  </Form>
                );
              }}
            </Formik>
          </LeftSide>
          <RightSide></RightSide>
        </Wrap>
      </Container>
    </Section>
  );
};

export default LoginForm;
