import React from "react";

export const NotificationModal = (props) => {
    return(
        <div className="menu__first-block__notification__modal-mini">
            <p>Количество новых подписчиков: {props.subscribers ?? 0}</p>
            <p>Количество новых оценок: {props.marks ?? 0}</p>
            <p>Количество новых комментариев:{props.comments ?? 0}</p>
            <p>Новых сообщений нет: {props.messages ?? 0}</p>
        </div>
    );
};
