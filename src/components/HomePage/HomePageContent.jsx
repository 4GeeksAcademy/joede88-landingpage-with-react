
import Container from "react-bootstrap/Container";
import CardGenerica from "./CardGenerica";
import AlertBox from "./AlertBox";
import Footer from "./Footer";
import NavBar from "./Navbar";

const HomePageContent = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container fluid>
        <AlertBox></AlertBox>
        <CardGenerica></CardGenerica>
      </Container>
      <div className=" mb-5 text-center">
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePageContent;
