import BgSection from "@/components/BgSection";
import Container from "@/components/Container";
import LogOut from "@/components/LogOut";
import Title from "@/components/Title";

const welcome = () => {
  return (
    <>
      <LogOut />

      <BgSection fb={"100%"} h={"100vh"}>
        <Container>
          <Title title={"I did it)))"} />
        </Container>
      </BgSection>
    </>
  );
};

export default welcome;
