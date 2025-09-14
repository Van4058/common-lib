import {AppHeader} from "./AppHeader.tsx";
import {AppFooter} from "./AppFooter.tsx";
import type {FC} from "react";
import {AppContent} from "./AppContent.tsx";
import styles from "./Master.module.scss";
import AppSidebar from "./AppSidebar.tsx";

type Props = {
    children: React.ReactNode;
}

export const MasterLayout: FC<Props> = ({children}) => {

    return (
        <div className={styles.master}>
            <AppHeader/>
            <AppSidebar/>
            {/*<AppContent>*/}
            {/*    {children}*/}
            {/*</AppContent>*/}
            {/*<AppFooter/>*/}
        </div>
    )
}