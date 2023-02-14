import React from 'react';
import {Main} from "../../components/Main/Main";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";


export const ClientPage = () => {
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
