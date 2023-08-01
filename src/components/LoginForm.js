import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

import { authApi } from "@/utils/authApi";

import Input from "./Input";
import SubTitle from "./SubTitle";
import Title from "./Title";
import CTA from "./CTA";
import LinksText from "./LinksText";
import FormContainer from "./FormContainer";
import { useState } from "react";
import Modal from "./Modal";
import VerifyContainer from "./VerifyContainer";
import VerifyInput from "./VerifyInput";
import Loader from "./Loader";

const LoginForm = () => {
  const router = useRouter();

  const [isVerificationModal, setIsVerificationModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [phone, setPhone] = useState("");
  const [initValues, setInitValues] = useState({});
  const otp = [];

  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };
  const login = async (values) => {
    setIsLoading(true);
    try {
      const res = await authApi.loginSendOTP(values);

      setInitValues(values);
      setPhone(res.phone);
      setIsVerificationModal(true);
    } catch (error) {
      console.log(error);
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
      await verifyAcc(phone, otp);
    }
  };
  const verifyAcc = async (phone, code) => {
    setIsLoading(true);

    try {
      const res = await authApi.loginVerifyOTP({
        phone,
        code: code.join(""),
      });
      if (res) {
        const res = await authApi.login(initValues);
        setCookie("token", res.token, 30);
        setIsVerificationModal(false);
        router.push("/welcome");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Title title={"Welcome back"} />
      <SubTitle mb={40} title={"Please enter your details"} />
      <Formik
        enableReinitialize
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required().label("Email"),
          password: Yup.string().required().label("Password"),
        })}
        onSubmit={login}
        validateOnChange={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
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
              <CTA mb={40} text={"Sign in"} />
              {isVerificationModal && (
                <Modal>
                  <VerifyContainer>
                    <VerifyInput>
                      <input
                        autoFocus
                        type={"number"}
                        name={"number-1"}
                        maxLength={"1"}
                        onChange={onChangeHandler}
                      />
                    </VerifyInput>{" "}
                    <VerifyInput>
                      <input
                        type={"number"}
                        name={"number-2"}
                        maxLength={"1"}
                        onChange={onChangeHandler}
                      />
                    </VerifyInput>{" "}
                    <VerifyInput>
                      <input
                        type={"number"}
                        name={"number-3"}
                        maxLength={"1"}
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
                        maxLength={"1"}
                        onChange={onChangeHandler}
                      />
                    </VerifyInput>{" "}
                    <VerifyInput>
                      <input
                        type={"number"}
                        name={"number-6"}
                        maxLength={"1"}
                        onChange={onChangeHandler}
                      />
                    </VerifyInput>
                  </VerifyContainer>
                </Modal>
              )}
            </Form>
          );
        }}
      </Formik>

      <LinksText
        href={"/register"}
        title={"Don't have an account?"}
        linkText={"Sign up"}
      />
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </FormContainer>
  );
};

export default LoginForm;
