import React from "react";
import s from './Alert.module.css'
import {useDispatch} from "react-redux";
import {DisabledAC} from "../../state/userLoginReducer";

export const Alert = () => {

    const dispatch = useDispatch()

    return (
        <div className={s.alert}>
            <div className={s.alert__box}>
                <div className={s.title_wrap}>
                    <h1>metamask extention</h1>
                </div>
                <div className={s.body}>
                    <p>
                        To work with our application, you have to install the
                        <a
                            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related"
                            target={"_blank"}
                            referrerPolicy="no-referrer"
                        > Metamask browser extension
                        </a>
                    </p>
                    <button onClick={() => dispatch(DisabledAC({answer: true}))}>Skip this step</button>
                </div>
            </div>
            <div className={s.alert__backdrop} />
        </div>
    );
};

