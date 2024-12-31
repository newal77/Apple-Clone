import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1122/iphone")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);
  let order = 1;
  return (
    <>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product) => {
            let id = product.id;
            let title = product.title;
            let img = product.img;
            let Brief = product.brief;
            let StartPrice = product.startingPrice;
            let PriceRange = product.priceRange;
            let productPage = "/iphone/" + id;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  {/* <div className="prodict-image"> */}
                  <img
                    src={img}
                    alt=""
                    // style={{ width: "100px", height: "80px" }}
                  />
                </div>
              </div>
              // </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Iphone;
