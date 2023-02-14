import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../../styles/MainStyles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {DisabledAC, setDataAC, UsersDataTC} from "../../state/userLoginReducer";

export const Registration = () => {

    const disabledButton = useSelector<AppRootStateType, boolean>(state => state.userLogin.disabled)
    const disabledListButton = useSelector<AppRootStateType, boolean>(state => state.userLogin.disabledListButton)
    const newName = useSelector<AppRootStateType, string>(state => state.userLogin.name)
    const newEmail = useSelector<AppRootStateType, string>(state => state.userLogin.email)
    const data = useSelector<AppRootStateType, boolean>(state => state.userLogin.getData)

    const key = localStorage.getItem('key')

    const dispatch = useDispatch<any>()
    useEffect(() => {
        if (key) {
            dispatch(DisabledAC({answer: true}))
        }
    }, [])

    const [name, setname] = useState('')
    const [email, setEmail] = useState('')

    const addName = (e: ChangeEvent<HTMLInputElement>) => {
        setname(e.currentTarget.value)
    }

    const addEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const getEarly = () => {
        dispatch(UsersDataTC({name: name, email: email}))
    }

    const sendData = () => {
        if (key) {
            dispatch(setDataAC({name: name, email: email, wallet: key, disabled: true, answer: true}))
        }
    }

    return (
        <div className={s.registration}>
            <div className={s.test}>Beta test registration</div>
            <div className={'text-white font-montserrat pt-4 not-italic font-normal text-base leading-[120%]'}>Lorem
                ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut
                labore et dolore <br/> magna aliqua. Ut enim ad minim veniam, quis nostrud <br/> exercitation
                ullamco
                laboris nisi ut aliquip ex ea <br/> commodo consequat.
            </div>
            <div className={s.name}>
                Name
            </div>
            {data ? <div className={s.name_data}>{newName}</div> :
                <input className={s.input} placeholder={'We will display your name in participation list '}
                       onChange={addName}/>}
            <div className={s.name}>
                Email
            </div>
            {data ? <div className={s.name_data}>{newEmail}</div> : <input className={s.input} type={"email"}
                                                                           placeholder={'We will display your name in participation list '}
                                                                           onChange={addEmail}/>}
            <div className={s.button_div}>
                {data ?
                    <button className={disabledListButton ? s.button_disabled : s.button} disabled={disabledListButton}
                            onClick={sendData}>list me to the table</button> :
                    <button onClick={getEarly} className={disabledButton ? s.button : s.button_disabled}
                            disabled={!disabledButton}>Get early
                        access
                    </button>}
            </div>
        </div>
    );
};
