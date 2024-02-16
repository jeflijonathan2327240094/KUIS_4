import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rate } from "antd";
const ShowDetailProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [imagesProduct, setImages] = useState([]);
  const [showActive, setShow] = useState("");
  const [indexActive, setActive] = useState(0);
  const [rating, setRating] = useState(0);
  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products/");
    const data = res.data.products.find((products) => products.id == id);
    setProduct(data);
    setImages(data.images);
    setShow(data.images[0]);
    setRating(product.rating);
  };
  const Click = (index) => {
    setShow(imagesProduct[index]);
    setActive(index);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="row mt-3 mb-3" data-aos="zoom-in" data-aos-delay="200">
        <div className="col-8">
          <img src={showActive} alt="" className="w-100 h-100" />
        </div>
        <div className="d-block col-2">
          {imagesProduct.map((image, index) => (
            <div
              className={`w-100 mt-3 mb-3 border border-4 rounded-3  ${
                index == indexActive ? "border-primary" : ""
              }`}
              key={index}
              onClick={() => {
                Click(index);
              }}
            >
              <img className="w-100" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex">
        <div className="rating">
          <Rate
            value={product.rating}
            count={5}
            allowHalf
            allowClear={false}
            disabled
          />
        </div>
        <div className="text-rating text-warning">{product?.rating}</div>
      </div>
      <div className="row mt-3 mb-3" data-aos="zoom-in" data-aos-delay="400">
        <ul className="deatil-of-text text-white">
          <li>Title Product : {product?.title}</li>
          <li>Price Product : ${product?.price}</li>
          <li>Discount Percentage Product : {product?.discountPercentage} %</li>
          <li>Rating Product : {product?.rating}</li>
          <li>Stock Product : {product?.stock}</li>
          <li>Category Product : {product?.category}</li>
          <li>Description Product : {product?.description}</li>
        </ul>
      </div>
    </div>
  );
};
export default ShowDetailProduct;
