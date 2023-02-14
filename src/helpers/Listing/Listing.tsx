import React from 'react';
import s from "../../styles/MainStyles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {FilterUserList, UserType} from "../../state/userLoginReducer";

export const Listing = () => {

    const userList = useSelector<AppRootStateType, UserType[]>(state => state.userLogin.usersList)

    const dispatch = useDispatch<any>()

    const deleteUser = (id: string) => {
        dispatch(FilterUserList({id: id, disabled: false}))
    }

    return (
        <div className={s.listing}>
            <div className={s.partList}>Participation listing</div>
            <div className={s.table_th}>
                <table className={s.tableHead}>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>wallet</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div className={s.headContainer}>
                <table>
                    <tbody>
                    {userList.map((t: any) => {
                        return (
                            <tr key={t.id} className={t.me ? s.me : ''}>
                                <td>{t.username}</td>
                                <td>{t.email}</td>
                                <td>{t.address} {t.me ?
                                    <span className={s.span_button} onClick={() => deleteUser(t.id)}>x</span> : ''}</td>
                            </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

