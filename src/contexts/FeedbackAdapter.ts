// import React from 'react';
// import {message as antdMessage, notification as antdNotification, Modal} from "antd";
// import type {ArgsProps as NotificationArgsProps} from "antd/es/notification";
// import type {ArgsProps as MessageArgsProps} from "antd/es/message";
// import type {ModalFuncProps} from "antd";
//
// const message = {
//         success: (content: string | MessageArgsProps) =>
//             antdMessage.success({
//                 content,
//                 icon: <span>✅</span>,
//                 duration: 3,
//             }),
//         error: (content: string | MessageArgsProps) =>
//             antdMessage.error({
//                 content,
//                 icon: <span>❌</span>,
//                 duration: 5,
//             }),
//         info: (content: string | MessageArgsProps) =>
//             antdMessage.info({
//                 content,
//                 icon: <span>ℹ️ < /span>,
//             }),
//     }
// ;
//
// const notification = {
//     open: (args: NotificationArgsProps) =>
//         antdNotification.open({
//             ...args,
//             message: <div className="font-semibold text-blue-600"> {args.message} < /div>,
//             description: <div className="text-gray-600"> {args.description} < /div>,
//         }),
// };
//
// const modal = {
//     confirm: (args: ModalFuncProps) =>
//         Modal.confirm({
//             ...args,
//             okText: "Đồng ý",
//             cancelText: "Huỷ",
//             centered: true,
//         }),
//     info: (args: ModalFuncProps) =>
//         Modal.info({
//             ...args,
//             okText: "Đã hiểu",
//             centered: true,
//         }),
// };
//
// export const uiAdapter = {
//     message,
//     notification,
//     modal,
// };
