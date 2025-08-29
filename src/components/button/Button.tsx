import {Button as AntButton, type ButtonProps as AntButtonProps} from "antd";
import type {FC} from "react";

export type ButtonProp = AntButtonProps & {}

export const Button: FC<ButtonProp> = (props) => {

    return (
        <AntButton {...props}>
            {props.children}
        </AntButton>
    )
}