import CardProduct from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Product = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Products Pages</title>
        </Helmet>
        <Navbar active="product" />
        <div className="container mt-5">
          <div className="row mt-5 mb-4">
            <h1 className="title-pages text-white" data-aos="zoom-in">
              My Product
            </h1>
          </div>
          <div className="row">
            <CardProduct />
          </div>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
export default Product;
