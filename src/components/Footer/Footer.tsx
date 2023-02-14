import React from 'react';
import {Registration} from "../../helpers/Registration/Registration";
import {Listing} from "../../helpers/Listing/Listing";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";


export const Footer = () => {

    const data = useSelector<AppRootStateType, boolean>(state => state.userLogin.getData)

    return (
        <div className={'mt-[208px] flex'}>
            <Registration/>
            {data && <Listing/>}
        </div>
    );
};
