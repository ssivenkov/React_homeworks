import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.externalContainer}>
            <div className={s.messageContainer}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={s.messageWrapper}>
                    <div className={s.message}>
                        <div className={s.name}>
                            <p>{props.name}</p>
                        </div>
                        <div className={s.messageTextAndTimeContainer}>
                            <div className={s.messageText}>
                                <p>{props.message}</p>
                            </div>
                            <div className={s.time}>
                                <p>{props.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
