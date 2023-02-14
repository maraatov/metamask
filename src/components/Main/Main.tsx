import React, {useState} from 'react';
import {Roadmap} from "../../helpers/Roadmap/Roadmap";
import {Planet} from "../../helpers/Planet/Planet";
import {Alert} from "../../helpers/Alert/Alert";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";


export const Main = () => {

    const alertClosed = useSelector<AppRootStateType, boolean>(state => state.userLogin.disabled)

    return (
        <div className={'mt-[202px] flex justify-between'}>
            {!alertClosed && <Alert/>}
            <Planet/>
            <div className={'mr-[9px] mt-[15px]'}>
                <Roadmap/>
            </div>
        </div>
    );
};
