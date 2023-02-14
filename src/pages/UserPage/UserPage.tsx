import React from 'react';
import {Header} from "../../components/Header/Header";
import {Main} from "../../components/Main/Main";
import {Footer} from "../../components/Footer/Footer";

export const UserPage = () => {
    return (
        <div className={'bg-[#171719] pl-16 pr-16 pb-[10px]'}>

            <header>
                <Header/>
            </header>

            <main>
                <Main/>
            </main>

            <footer>
                <Footer/>
            </footer>

        </div>
    );
};