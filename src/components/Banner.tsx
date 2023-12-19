import { Col, Container, Nav, Row } from "react-bootstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

type BannerType = {};

export const Banner: React.FC<BannerType> = ({}) => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aling-items-center">
          <Col xs={12} md={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded`} <span className="wrap">web developer</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
