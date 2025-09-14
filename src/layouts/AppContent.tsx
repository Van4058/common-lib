import {Layout} from "antd";

type Props = {
    children: React.ReactNode;
}

export const AppContent = (props: Props) => {

    return (
        <Layout.Content>
            {props.children}
        </Layout.Content>
    )
}