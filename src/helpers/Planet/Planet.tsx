import React from 'react';
import s from "../../styles/MainStyles.module.css";

export const Planet = () => {
    return (
        <div className={'w-[1130px]'}>
            <div className={'relative'}>
                <div className={s.content}>
                    <h1>
                        Explore Your own planet <br/> In{" "}
                        <span>our New </span>
                        metaverse
                    </h1>
                </div>
                <div className={s.planet}><img src={'https://planet-metaverse.netlify.app/assets/planet-1fef4106.webp'}/></div>
            </div>
            <div className={'text-white font-montserrat pt-4 not-italic font-normal text-base leading-[120%]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut
                labore et dolore <br/> magna aliqua. Ut enim ad minim veniam, quis nostrud <br/> exercitation ullamco
                laboris nisi ut aliquip ex ea <br/> commodo consequat.
            </div>
        </div>
    );
};
