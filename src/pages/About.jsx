import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img from "../assets/jumbotron.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
const About = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>About Pages</title>
        </Helmet>
        <Navbar active="about" />
        <div className="about-content">
          <div className="container text-white">
            <div className="row mt-4  mb-4">
              <h2
                className="title-pages "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                About Me
              </h2>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="row col-3">
                <div
                  className="profile-image bg-dark "
                  data-aos="fade-right"
                  data-aos-delay="200"
                  style={{
                    height: "30rem",
                    width: "30rem",
                    backgroundImage: `url(${Img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>

              <div
                className="row col-7 p-5 indentitas"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <p>Nama Lengkap : Jefli Jonathan</p>
                <p>Status : Mahasiswa</p>
                <p>Program Studi : Sistem Informasi</p>
                <p>Gender : Laki-Laki</p>
                <p>Hobi : main game</p>
                <p class="text-justify">
                  Hi, my name is Jefli Jonathan, I live in Palembang City. Now I
                  am a 2nd semester student at the University Multi Data
                  Palembang.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
export default About;
