import React from "react";
import {Select as AntSelect, type SelectProps as AntSelectProps} from "antd";

export type SelectProps = AntSelectProps & {
    onScrollToEnd?: () => void;
}

export const Select: React.FC<SelectProps> = ({onScrollToEnd, className, ...props}) => {

    const onPopupScroll: AntSelectProps['onPopupScroll'] = (event) => {
        const bottom = event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight

        if (bottom) {
            if (onScrollToEnd) {
                onScrollToEnd();
            }
        }
    }

    return (
        <AntSelect
            className={className}
            onPopupScroll={onPopupScroll}
            {...props}
        />
    )
}


