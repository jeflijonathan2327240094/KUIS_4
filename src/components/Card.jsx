import { useEffect, useState } from "react";
import axios from "axios";
import { Rate } from "antd";
const CardProduct = () => {
  const [Products, setProduct] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    const data = res.data.products;
    setProduct(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const detailProduct = (id) => {
    window.location.href = `/products/${id}`;
  };
  return (
    <>
      <div className="row justify-content-center h-100 gap-4 mt-5 mb-5">
        {Products.map((product, index) => (
          <div
            className="card bg-card-color col-lg-3 col-5 shadow-lg p-3 text-white"
            data-aos="fade-up"
            data-aos-delay={50 * index}
            key={product?.id}
            onClick={() => {
              detailProduct(product?.id);
            }}
          >
            <div className="card-body d-flex align-items-start flex-column bd-highlight">
              <div className="bd-highlight row w-100 ms-auto me-auto">
                <div
                  className="thumbnail w-100"
                  style={{
                    backgroundImage: `url('${product?.thumbnail}')`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    height: "100px",
                  }}
                ></div>
              </div>
              <div className="row bd-highlight mt-auto mb-auto">
                <h4 className="title-product text-start mt-3">
                  {product?.title}
                </h4>
                <p className="text-success price">$ {product?.price}</p>
                <div className="d-flex text-warning align-items-center">
                  <div className="row me-lg-auto">
                    <Rate
                      value={product?.rating}
                      allowHalf
                      disabled
                      style={{ fontSize: "65%" }}
                    />
                  </div>
                  <div className="row ms-1 ms-lg-auto">
                    <p
                      class="rating mt-auto mb-auto"
                      style={{ fontSize: "12px" }}
                    >
                      {product?.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CardProduct;
