// import React, { Component } from "react";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productpage = () => {
  const [prodactData, setProduct] = useState([]);
  // const [productID] = useParams({pid});
  const { pid } = useParams();

  console.log(pid);

  useEffect(() => {
    fetch("http://localhost:1122/iphone")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct = data.filter((x) => x.id == pid);
        setProduct(singleProduct);
      });
  }, []);

  return (
    <div>
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {prodactData.map((product) => {
              let id = product.id;
              let title = product.title;
              let img = product.img;
              let Brief = product.brief;
              let StartPrice = product.startingPrice;
              let PriceRange = product.priceRange;
              let details = product.description;

              let productDiv = (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={"col-sm-12 col-md-6"}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productpage;
