import * as Yup from "yup";
import "yup-phone";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

import { authApi } from "@/utils/authApi";

import FormContainer from "./FormContainer";
import LinksText from "./LinksText";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Input from "./Input";
import CTA from "./CTA";
import DialCodeSelector from "./DialCodeSelector";
import Modal from "./Modal";
import VerifyContainer from "./VerifyContainer";
import Loader from "./Loader";
import VerifyInput from "./VerifyInput";

const RegisterForm = () => {
  const router = useRouter();

  const [dialCode, setDialCode] = useState("");
  const [initialValues, setInitialValues] = useState({});
  const [isVerificationModal, setIsVerificationModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const otp = [];

  const register = async (values) => {
    setIsLoading(true);

    try {
      await authApi.sendOTP({
        ...values,
        phone: `+${dialCode}${values.phone}`,
      });
      setInitialValues({
        ...values,
        phone: `+${dialCode}${values.phone}`,
      });
      setIsVerificationModal(true);
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsLoading(false);
    }
  };
  const onChangeHandler = async (e) => {
    const { maxLength, value, name } = e.target;

    const [fieldName, fieldIndex] = name.split("-");
    otp[Number(fieldIndex) - 1] = value;

    let fieldIntIndex = parseInt(fieldIndex, 10);
    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextfield = document.querySelector(
          `input[name=number-${fieldIntIndex + 1}]`
        );

        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
    if (name === "number-6") {
      await verifyAcc(initialValues.phone, otp);
    }
  };
  const verifyAcc = async (phone, code) => {
    setIsLoading(true);

    try {
      const res = await authApi.verifyOTP({
        phone,
        code: code.join(""),
      });
      if (res) {
        await authApi.register(initialValues);
        setIsVerificationModal(false);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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
              const phone = `+${dialCode}${value}`;
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
        onSubmit={register}
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
      {isVerificationModal && (
        <Modal>
          <VerifyContainer>
            <VerifyInput>
              <input
                autoFocus
                type={"number"}
                name={"number-1"}
                maxLength={1}
                onChange={onChangeHandler}
              />
            </VerifyInput>{" "}
            <VerifyInput>
              <input
                type={"number"}
                name={"number-2"}
                maxLength={1}
                onChange={onChangeHandler}
              />
            </VerifyInput>{" "}
            <VerifyInput>
              <input
                type={"number"}
                name={"number-3"}
                maxLength={1}
                onChange={onChangeHandler}
              />
            </VerifyInput>{" "}
            <VerifyInput>
              <input
                type={"number"}
                name={"number-4"}
                maxLength={1}
                onChange={onChangeHandler}
              />
            </VerifyInput>
            <VerifyInput>
              <input
                type={"number"}
                name={"number-5"}
                maxLength={1}
                onChange={onChangeHandler}
              />
            </VerifyInput>{" "}
            <VerifyInput>
              <input
                type={"number"}
                name={"number-6"}
                maxLength={1}
                onChange={onChangeHandler}
              />
            </VerifyInput>
          </VerifyContainer>
        </Modal>
      )}
      <LinksText
        href={"/"}
        title={"Already have an account?"}
        linkText={"Log in"}
      />
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </FormContainer>
  );
};

export default RegisterForm;
