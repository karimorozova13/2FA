import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { styled } from "styled-components";

import { colors } from "@/config/colors";

import Input from "./Input";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Checkbox from "./Checkbox";
import CTA from "./CTA";
import LinksText from "./LinksText";
import FormContainer from "./FormContainer";

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
    <FormContainer>
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
