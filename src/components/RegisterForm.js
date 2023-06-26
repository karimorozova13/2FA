import * as Yup from "yup";
import "yup-phone";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

import { authApi } from "@/utils/authApi";

import FormContainer from "./FormContainer";
import LinksText from "./LinksText";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Input from "./Input";
import CTA from "./CTA";
import { useState } from "react";
import DialCodeSelector from "./DialCodeSelector";

const RegisterForm = () => {
  const [dialCode, setDialCode] = useState("");
  const router = useRouter();
  return (
    <FormContainer>
      <Title title={"Welcome to the Adventure"} />
      <SubTitle mb={40} title={"Please enter your details"} />
      <Formik
        initialValues={{
          password: "",
          email: "",
          confirmPassword: "",
          phone: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required().label("Email"),
          phone: Yup.string()
            .required()
            .test("phone", "Phone number is not valid", (value) => {
              const phone = `+${dialCode} ${value}`;
              return Yup.string().phone().isValidSync(phone);
            })
            .label("Phone number"),
          password: Yup.string()
            .required()
            .label("Password")
            .matches(
              /^(?=.*[a-z])/,
              "Password must contain at least one lowercase letter"
            )
            .matches(
              /^(?=.*[0-9])/,
              "Password must contain at least one number"
            ),
          confirmPassword: Yup.string()
            .required()
            .label("Confirm password")
            .oneOf([Yup.ref("password"), null], "Passwords should match"),
        })}
        onSubmit={async (values) => {
          try {
            console.log({
              ...values,
              phone: `+${dialCode} ${values.phone}`,
              savePassword: false,
            });
            await authApi.register({
              ...values,
              phone: `+${dialCode} ${values.phone}`,
              savePassword: false,
            });

            router.push("/");
          } catch (error) {
            console.log(error);
          }
        }}
        validateOnChange={true}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors }) => {
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
                <div style={{ display: "flex", gap: "5px" }}>
                  <DialCodeSelector
                    initialCode={"CY"}
                    onChange={(countryObj) => {
                      setDialCode(countryObj.dialCode);
                    }}
                  />
                  <Field
                    type="tel"
                    name="phone"
                    autoComplete="phoneNumber"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Enter your phone"}
                  />
                </div>
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
              <Input>
                <label htmlFor="confirmPassword">{"Confirm password"}</label>

                <Field
                  type={"password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder={"Confirm your password"}
                  autoComplete="password"
                />
              </Input>

              <CTA mb={40} text={"Complete"} />
            </Form>
          );
        }}
      </Formik>
      <LinksText
        href={"/"}
        title={"Already have an account?"}
        linkText={"Log in"}
      />
    </FormContainer>
  );
};

export default RegisterForm;
