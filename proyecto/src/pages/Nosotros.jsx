import { Col, Container, Row } from "react-bootstrap";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/nosotros.css";
import avatar from "../image/avatar.png";
import claudiotoledo from "../image/claudiotoledo.jpeg";
const Nosotros = () => {
  return (
    <>
      <Container className="d-flex justify-content-center flex-column  align-content-center align-items-center  pt-5 mt-5 ">
        <h1 className="title text-center">NUESTRO EQUIPO - DESARROLLO</h1>

        <Row className="d-flex justify-content-center w-100 pt-5">
          <Col
            className="d-flex justify-content-center flex-md-row flex-column  pt-2 gap-4"
            xs={12}
            md={12}
          >
            <div className="card carta">
              <img
                className="card-image"
                src={avatar}
                alt="profile picture"
              ></img>
              <h2 className="card-title">Hernan Diaz</h2>
              <p className="card-text">DESARROLLADOR FRONTEND - UX UI</p>
              <p>Siempre busco aportar al equipo.</p>
              <div className="social-icons d-flex flex-row w-100">
                <Link target="_blank" to={"/error404"} className="w-100  ">
                  <BsInstagram className="w-100 icon" />
                </Link>
                <Link target="_blank" to={"/error404"} className="w-100">
                  {" "}
                  <BsLinkedin className="w-100 icon" />{" "}
                </Link>
                <Link target="_blank" to={"/error404"} className="w-100">
                  <BsGithub className="w-100 icon " />
                </Link>
              </div>
            </div>
            <div className="card carta">
              <img
                className="card-image"
                src={avatar}
                alt="profile picture"
              ></img>
              <h2 className="card-title">Nicolas Peñaloza</h2>
              <p className="card-text">DESARROLLADOR FRONTEND - BACKEND</p>

              <p>Con este proyecto aprendi muchisimo </p>
              <div className="social-icons d-flex flex-row w-100">
                <Link target="_blank" to={"/error404"} className="w-100  ">
                  <BsInstagram className="w-100 icon" />
                </Link>
                <Link target="_blank" to={"/error404"} className="w-100">
                  {" "}
                  <BsLinkedin className="w-100 icon" />{" "}
                </Link>
                <Link target="_blank" to={"/error404"} className="w-100">
                  <BsGithub className="w-100 icon " />
                </Link>
              </div>
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center flex-md-row flex-column  pt-5 gap-4"
            xs={12}
            md={12}
          >
            <div className="card carta">
              <img
                className="card-image"
                src={avatar}
                alt="profile picture"
              ></img>
              <h2 className="card-title">Matias Diaz Linares</h2>
              <p className="card-text"> DESARROLLADOR BACKEND</p>
              <p>Gracias a todo el equipo</p>
              <div className="social-icons d-flex flex-row w-100">
                <Link target="_blank" to={"/error404"} className="w-100  ">
                  <BsInstagram className="w-100 icon" />
                </Link>
                <Link target="_blank" to={"/error404"} className="w-100">
                  {" "}
                  <BsLinkedin className="w-100 icon" />{" "}
                </Link>
                <Link target="_blank" to={"/error404"} className="w-100">
                  <BsGithub className="w-100 icon " />
                </Link>
              </div>
            </div>
            <div className="card carta">
              <img
                className="card-image"
                src={claudiotoledo}
                alt="profile picture"
              ></img>
              <h2 className="card-title">Claudio Toledo</h2>
              <p className="card-text"> MASTER SCRUM</p>
              <p>
                Con este proyecto aprendi muchisimo, Gracias a todo el equipo
              </p>
              <div className="social-icons d-flex flex-row w-100">
                <Link target="_blank" to={"/error404"} className="w-100  ">
                  <BsInstagram className="w-100 icon" />
                </Link>
                <Link
                  target="_blank"
                  to={"http://www.linkedin.com/in/claudio-adrian-toledo"}
                  className="w-100"
                >
                  {" "}
                  <BsLinkedin className="w-100 icon" />{" "}
                </Link>
                <Link
                  target="_blank"
                  to={"https://github.com/CLAUDIOTOLEDO252208?tab=repositories"}
                  className="w-100"
                >
                  <BsGithub className="w-100 icon " />
                </Link>
              </div>
            </div>
            <div className="card carta">
              <img
                className="card-image"
                src={avatar}
                alt="profile picture"
              ></img>
              <h2 className="card-title">Gustavo Rodriguez</h2>
              <p className="card-text">DESARROLLADOR BACKEND</p>
              <p>siempre busco aportar al equipo.</p>
              <div className="social-icons d-flex flex-row w-100">
                <Link target="_blank" to={"/error404"} className="w-100  ">
                  <BsInstagram className="w-100 icon" />
                </Link>
                <Link target="_blank" to={"/error404"} className="w-100">
                  {" "}
                  <BsLinkedin className="w-100 icon" />{" "}
                </Link>
                <Link target="_blank" to={"/error404"} className="w-100">
                  <BsGithub className="w-100 icon " />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Nosotros;
