import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="description-box">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their product, interact with customers, and construct the transaction without the need for a physical presence. E-commerce website have gained immense popularity due to their convenience, accessibility and the global reach they offer</p>

                <p>E-commerce websites typically display products or services along with detailed description, images, prices, and any available variations (eg. sizes, colors). Each products usually has its own dedicated page with relevant information.</p>
            </div>
        </div>
    )
} 

export default DescriptionBox;