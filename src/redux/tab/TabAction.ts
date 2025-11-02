import {useSelector} from "react-redux";
import {type RootState, store} from "../store.ts";
import {StorageKey, Storages} from "../../utils/Storages.ts";
import {setActive, setItems, type TabSlice} from "./TabSlice.ts";
import {useEffect} from "react";

export const TabAction = () => {
    const reduxState = useSelector((state: RootState) => state.tab);

    useEffect(() => {
        const data = Storages.getItem(StorageKey.TABS) as TabSlice;

        if (data) {
            store.dispatch(setItems(data.items));
            store.dispatch(setActive(data.active));
        } else {
            const initData: TabSlice = {
                active: 'queue-1',
                items: [
                    {
                        key: 'queue-1',
                        name: 'queue',
                        value: '1'
                    }
                ]
            }

            Storages.saveItem(StorageKey.TABS, initData);

            store.dispatch(setItems(initData.items));
            store.dispatch(setActive(initData.active));
        }

    }, [])

    const dispatchAddTab = (name: string, value: string) => {
        let merge = {...Storages.getItem(StorageKey.TABS) as TabSlice};

        const key = `${name}-${value}`;

        if (!merge.items.some((item) => item.key === key)) {
            merge.items = [
                ...merge.items,
                {
                    key: key,
                    name: name,
                    value: value,
                }
            ]
        }

        merge.active = key;

        store.dispatch(setItems(merge.items));
        store.dispatch(setActive(merge.active));

        Storages.saveItem(StorageKey.TABS, merge);
    }

    const dispatchDeleteTab = (name: string, value: string) => {
        let merge = {...Storages.getItem(StorageKey.TABS) as TabSlice};

        const key = `${name}-${value}`;
        const index = merge.items.findIndex((item) => item.key === key);

        // Xóa
        merge.items = merge.items.filter((item) => item.key !== key)
        console.log(merge.items);

        if (merge.items.length > 0 && merge.active === key) {
            // Cuối dãy
            if (index >= merge.items.length - 1) {
                merge.active = merge.items.at(merge.items.length - 1)?.key;
            } else {
                merge.active = merge.items.at(index)?.key;
            }
        }

        store.dispatch(setItems(merge.items));
        store.dispatch(setActive(merge.active));

        Storages.saveItem(StorageKey.TABS, merge);
    }

    return {
        vm: reduxState,
        dispatchAddTab,
        dispatchDeleteTab,
    }
}