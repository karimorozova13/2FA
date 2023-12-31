import BgSection from "@/components/BgSection";
import LoginForm from "@/components/LoginForm";
import LoginRegisterLayout from "@/components/LoginRegisterLayout";

const Home = () => {
  return (
    <>
      <LoginRegisterLayout>
        <LoginForm />
        <BgSection />
      </LoginRegisterLayout>
    </>
  );
};

export default Home;
