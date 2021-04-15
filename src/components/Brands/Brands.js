import React from 'react';
import Suzuki from '../../assets/images/suzuki-logo.png'
import Nissan from '../../assets/images/Nissan_logo.png'
import Mercedes from '../../assets/images/mercedes.jpg'
import Hyundai from '../../assets/images/Hyundai.png'

import Audi from '../../assets/images/Audi.png'



const Brands = () => {
    const carBrand = [
        {
            title: "suzuki",
            img: Suzuki
        },
        {
            title: "nissan",
            img: Nissan
        },
        {
            title: "audi",
            img: Audi
        },
        {
            title: "hyundai",
            img: Hyundai
        },
        {
            title: "mercedes",
            img: Mercedes
        }
    ]
    return (
        <div>
            <div className="row text-center">
                <div className="col-md-12 p-3 ms-5 ps-5">

                    {carBrand.map(brand => <li className="d-inline-block ml-5 "><img style={{ height: "50px", textAlign: "center!important" }} src={brand.img} alt="" /></li>)}
                    <hr />
                </div>

            </div>
        </div>
    );
};

export default Brands;