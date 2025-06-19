import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
      <div className="descriptionbox">
          <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box">Description</div>
              <div className="descriptionbox-nav-box fade">Reviews (122)</div>
          </div>
          <div className="descriptionbox-description">
              <p>An elegant and modern design that seamlessly blends functionality with aesthetics. This product is crafted with high-quality materials, ensuring durability and longevity. Its sleek lines and minimalist approach make it a perfect addition to any contemporary space.</p>
              <p>Whether you're looking to enhance your home or office, this product offers a versatile solution that meets your needs. The attention to detail in its construction reflects a commitment to excellence, making it not just a purchase, but an investment in style and quality.</p>
        </div>
	</div>
  );
};

export default DescriptionBox;