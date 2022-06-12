import { FiShoppingCart } from "react-icons/fi";
import './DentalShop.css';

const DentalShop = () => {
    const productImg = {
        "one": "https://nordis.true-emotions.studio/dental/wp-content/uploads/sites/5/2013/06/51QqrI82JjL-555x555.jpg",
        "two": "https://nordis.true-emotions.studio/dental/wp-content/uploads/sites/5/2013/06/71M4QzSNK-555x555.jpg",
        "three": "https://nordis.true-emotions.studio/dental/wp-content/uploads/sites/5/2018/03/7128kOQP-555x555.jpg",
        "four": "https://nordis.true-emotions.studio/dental/wp-content/uploads/sites/5/2013/06/813SZXGL-555x555.jpg",
    }


    return (
        <div className=" text-white mt-5 p-5 bg-primary">
            <h1 className="mb-5">Dental Shop</h1>
            <div className="row">
                <div className="col">
                    <div className="row g-5 d-flex justify-content-between align-items-center">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card shop-card" >
                                <img src={productImg.one} className="card-img-top" alt="..." />
                                <div className="card-body text-dark">
                                    <h5 className="card-title">Mornwell D50 Electric Flosser</h5>
                                    <p className="card-text fw-bold">$15</p>
                                    <button className="btn btn-secondary"> <FiShoppingCart/> ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card shop-card" >
                                <img src={productImg.two} className="card-img-top" alt="..." />
                                <div className="card-body text-dark">
                                    <h5 className="card-title">CT Dry Fluoride Toothpaste</h5>
                                    <p className="card-text fw-bold">$12</p>
                                    <button className="btn btn-secondary"> <FiShoppingCart/> ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card shop-card" >
                                <img src={productImg.three} className="card-img-top" alt="..." />
                                <div className="card-body text-dark">
                                    <h5 className="card-title">Biotene Oral</h5>
                                    <p className="card-text fw-bold">$12</p>
                                    <button className="btn btn-secondary"> <FiShoppingCart/> ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card shop-card" >
                                <img src={productImg.four} className="card-img-top" alt="..." />
                                <div className="card-body text-dark">
                                    <h5 className="card-title">Oral B-pro 7000</h5>
                                    <p className="card-text fw-bold">$27</p>
                                    <button className="btn btn-secondary"> <FiShoppingCart/> ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalShop;