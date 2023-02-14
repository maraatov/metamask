import React from 'react';
import s from '../../styles/MainStyles.module.css'


export const Roadmap = () => {

    type DataType = {
        id: number,
        number: string,
        text: string
    }

    const data: DataType[] = [
        {
            id: 1,
            number: '12, 345',
            text: 'lorem ipsum dolor'
        },
        {
            id: 2,
            number: '12, 345',
            text: 'lorem ipsum dolor'
        },
        {
            id: 3,
            number: '12, 345',
            text: 'lorem ipsum dolor'
        }
    ]

    return (
        <>
            <div
                className={'text-white font-bebas uppercase text-[32px] leading-[120%] tracking-[1px] justify-center text-center'}>
                roadmap stats
            </div>
            <div className={'mt-[42px]'}>
                {data.map(t => {
                    return (
                        <div key={t.id} className={s.id}>
                            <div className={s.number}>{t.number}</div>
                            <div className={s.text}>{t.text}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

