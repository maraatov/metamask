import React from 'react';
import s from "../../styles/MainStyles.module.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {DisabledAC} from "../../state/userLoginReducer";
declare global {
    interface Window {
        ethereum?: any
    }
}

export const Header = () => {

    const key = localStorage.getItem('key')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onConnect = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
                .then((account: any) => {
                    localStorage.setItem('key', account[0])
                    navigate('/user')
                    dispatch(DisabledAC({answer: true}))
                })
        } else {
            dispatch(DisabledAC({answer: false}))
        }
    }

    return (
        <div className={'flex items-center justify-between'}>
            <div
                className={'text-white w-[199px] h-11 bg-amber-500 flex text-lg justify-center items-center mt-3.5 bg-[#5A5A5A] font-normal border font-bebas border-dashed border-[#C7C7C7] hover:cursor-pointer'}>LOGO
            </div>
            { key ? <h1 className={s.data_user}>{key}</h1> : <div
                className={'text-white uppercase text-lg w-[161px] h-[39px]  bg-[#E75626] rounded-[30px] flex pt-1 items-center justify-center mt-[17px] font-bebas hover:cursor-pointer'} onClick={onConnect}>Connect
                metamask
            </div>}
        </div>
    );
};

