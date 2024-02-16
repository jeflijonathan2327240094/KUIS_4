import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const PPT = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [imagesProduct, setImages] = useState([]);
  const [showActive, setShow] = useState("");
  const [indexActive, setActive] = useState(0);
  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products/");
    const data = res.data.products.find((products) => products.id == id);
    setProduct(data);
    setImages(data.images);
    setShow(data.images[0]);
  };
  const handleClick = (index) => {
    setShow(imagesProduct[index]);
    setActive(index);
  };
  const constActive = useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="row mt-3 mb-3">
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
                handleClick(index);
              }}
            >
              <img className="w-100" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default PPT;
