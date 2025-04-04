import React from "react";

// interface SwiperButtonProps {
//     next: string;
//     prev: string;
// }

const SwiperButton1 = (props) => {
    return (
        <div className="swiper-nav text-center">
            <button className={`${props?.prev}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.57031 18.0703L3.50031 12.0003L9.57031 5.93031" stroke="#02B1E4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.5 12L3.67 12" stroke="#02B1E4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <button className={`${props?.next}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.4297 18.0703L20.4997 12.0003L14.4297 5.93031" stroke="#02B1E4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.5 12L20.33 12" stroke="#02B1E4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default SwiperButton1;
