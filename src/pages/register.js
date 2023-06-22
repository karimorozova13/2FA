import BgSection from "@/components/BgSection";
import LoginRegisterLayout from "@/components/LoginRegisterLayout";
import RegisterForm from "@/components/RegisterForm";

const register = () => {
  return (
    <>
      <LoginRegisterLayout>
        <BgSection />
        <RegisterForm />
      </LoginRegisterLayout>
    </>
  );
};

export default register;
