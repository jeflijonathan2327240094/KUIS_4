//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../assets/jumbotron.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home Pages</title>
        </Helmet>
        <Navbar active="home" />
        <div className="home-contents">
          <div className="jumbotron-background">
            <div className="container-fluid d-flex flex-column h-100 justify-content-center align-items-center">
              <div className="row col-lg-3 col-7">
                {/* Bagian untuk memasukkan gambar */}
                <div
                  className="profile-img w-100 shadow p-3 mb-3"
                  style={{ backgroundImage: `url('${Jumbotron}')` }}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                ></div>
              </div>
              <div className="row flex-column text-white mt-3">
                {/* Bagian untuk teks */}
                <h1
                  class="text-center text-uppercase col-lg-6 me-auto ms-auto mt-3 mb-3"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  Hi, name is Jefli Jonathan
                </h1>
                <p
                  class="text-justify col-lg-6 m-auto"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
export default Home;
