import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShowDetailProduct from "../components/ShowDetailProduct";
import PPT from "../components/PPT";
import { Helmet, HelmetProvider } from "react-helmet-async";
const DetailProduct = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Detail Product</title>
        </Helmet>
        <Navbar active="product" />
        <div className="container">
          <div className="row">
            <h2
              className="mt-5 mb-5 text-white"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Detail Product
            </h2>
          </div>
          <div className="row">
            <ShowDetailProduct />
          </div>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
export default DetailProduct;
