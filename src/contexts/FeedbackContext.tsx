import React, {createContext, useContext} from "react";
import type {NotificationInstance} from "antd/es/notification/interface";
import type {MessageInstance} from "antd/es/message/interface";
import type {ModalStaticFunctions} from "antd/es/modal/confirm";
import {message as _message, Modal, notification as _notification} from "antd";

type _T_Value = {
    modal: Omit<ModalStaticFunctions, 'warn'>
    notification: NotificationInstance
    message: MessageInstance
}

type FeedbackContextType = {
    modal: Omit<ModalStaticFunctions, 'warn'>
    notification: NotificationInstance
    message: MessageInstance
}

const FeedbackContext = createContext<FeedbackContextType | null>(null);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [modal, contextModal] = Modal.useModal()
    const [notification, contextNotification] = _notification.useNotification()
    const [message, contextMessage] = _message.useMessage();

    const defaultAntContext: _T_Value = {
        modal: modal,
        notification: notification,
        message: message
    }

    return (
        <FeedbackContext.Provider
            value={defaultAntContext}
        >
            {contextMessage}
            {contextNotification}
            {contextModal}
            {children}
        </FeedbackContext.Provider>
    );
};

export const useFeedback = () => {
    const ctx = useContext(FeedbackContext);
    if (!ctx) throw new Error("useUI must be used within UIProvider");
    return ctx;
};
