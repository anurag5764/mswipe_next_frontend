// import { cleanImage } from "@/services/imageHandling";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useState } from "react";
import { renderImage } from "../../services/imageHandling";
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
});
// media query render
const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${width}px)`);
        if (media.addEventListener) {
            media.addEventListener("change", updateTarget);
        } else {
            // compatibility for browser that dont have addEventListener
            media.addListener(updateTarget);
        }
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }
        if (media.removeEventListener) {
            return () => media.removeEventListener("change", updateTarget);
        } else {
            // compatibility for browser that dont have removeEventListener
            return () => media.removeListener(updateTarget);
        }
    }, []);

    return targetReached;
};
const homepageData = [
    {
        desktopVideo:
        {
            url: "/video/mswipe.mp4"
        }
        ,
        mobileVideo:
        {
            url: "/video/mswipe.mp4"
        }

    }
]
console.log("1234", homepageData)
const HomeBanner = ({ HomeVideo }) => {

    const isBreakpoint = useMediaQuery(768);
    // const { homepageData } = useSelector((state) => state.homepageData);
    const desktopvideo = renderImage(homepageData[0]?.desktopVideo?.url);

    const mobilevideo = renderImage(homepageData[0]?.mobileVideo?.url);

    console.log(desktopvideo, 'desktopvideo');


    return (
        <>
            <div className="home_banner banner_wrap">
                {/* <Image src="/images/hero-banner.jpg" width={1934} height={1089} alt="hero banner" /> */}

                {isBreakpoint ? (
                    <>
                        <ReactPlayer
                            className="banner_video"
                            loop
                            muted
                            playbackRate={1}
                            playing={true}
                            url={desktopvideo}
                        ></ReactPlayer>
                        <div className="container">
                            <div className="banner-content">
                                <h1 className="title" data-splitting=""><span>Payment Technology</span> <span>Solutions For Your Business.</span></h1>
                                <div className="desc">Sell anywhere, anytime with secure payment solutions for in-store and online commerce: Easy, quick, and seamless transactions.</div>
                                <div className="mt-5 d-flex align-items-center">
                                    <button type="submit" class="btn btn-primary btn-submit">Contact sales <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></button>
                                    <button type="submit" class="btn btn-outline-secondary btn-submit-outline ms-2">Sign up <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <ReactPlayer
                            className="banner_video moja"
                            loop
                            muted
                            playbackRate={1}
                            playing={true}
                            url={mobilevideo ? mobilevideo : desktopvideo}
                        ></ReactPlayer>
                        <div className="container">
                            <div className="banner-content">
                                <h1 className="title" data-splitting=""><span>Payment Technology</span> <span>Solutions For Your Business.</span></h1>
                                <div className="desc">Sell anywhere, anytime with secure payment solutions for in-store and online commerce: Easy, quick, and seamless transactions.</div>
                                <div className="mt-5 d-flex align-items-center">
                                    <button type="submit" class="btn btn-primary btn-submit">Contact sales <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></button>
                                    <button type="submit" class="btn btn-outline-secondary btn-submit-outline ms-2">Sign up <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default HomeBanner
