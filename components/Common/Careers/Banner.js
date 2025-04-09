// import { cleanImage } from "@/services/imageHandling";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
});
const InnerBanner = ({ bannerData }) => {
    console.log("BannerData", bannerData)
    return (
        <>
            <div className="home_banner inner_banner_wrap">
                {/* <div className="name-icon d-block d-lg-none">
                    <Image width={200} height={108} src={bannerData?.nameIcon} />
                </div> */}
                <div className="inner_banner">
                    <Image className="d-none d-lg-block" src={bannerData?.desktopImage} width={1440} height={664} alt="hero banner" />
                    <Image className="d-none d-md-block d-lg-none" src={bannerData?.tabImage} width={744} height={508} alt="hero banner" />
                    <Image className="d-block d-md-none" src={bannerData?.mobileImage} width={375} height={701} alt="hero banner" />
                </div>
                <div className="container-fluid">
                    <div className="banner-content">
                        {/* <div className="name-icon d-none d-lg-block">
                            <Image width={255} height={190} src={bannerData?.nameIcon} />
                        </div> */}
                        <h1 className="title" data-splitting="">
                            {bannerData?.title?.highlight && (
                                <span dangerouslySetInnerHTML={{ __html: bannerData.title.highlight }} />
                            )}
                            {bannerData?.title?.text && (
                                <span dangerouslySetInnerHTML={{ __html: bannerData.title.text }} />
                            )}
                        </h1>
                        <p>{bannerData.description}</p>
                        <div className="mt-3 mt-lg-5 d-flex align-items-center">
                            <Link href={bannerData?.orderbtn?.url } type="submit" class="btn btn-primary btn-submit">{bannerData?.orderbtn?.text }<img src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InnerBanner
