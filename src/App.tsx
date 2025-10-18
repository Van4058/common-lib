import React, {useEffect, useState} from 'react'
import {MasterLayout} from "./layouts/MasterLayout.tsx";
import {useFeedback} from "./contexts/FeedbackContext.tsx";
import {Select} from "antd";
import {Navbar} from "./components/menu/Menu.tsx";

function App() {
    const [count, setCount] = useState(0)
    const {message, notification, modal} = useFeedback();
    const [open, setOpen] = useState(false);


    // Hoặc dùng react-route có 1 hook để detect event này

    // useEffect(() => {
    //     const onBeforeClose = (ev) => {
    //         ev.preventDefault();
    //         ev.returnValue = '';
    //     }
    //
    //     window.addEventListener("beforeunload", onBeforeClose);
    //
    //     return () => {
    //         window.removeEventListener("beforeunload", onBeforeClose)
    //     }
    //
    // }, [])

    // useEffect(() => {
    //     if (vm.isLoading !== E_SendingStatus.loading) {
    //         const data: _T_TableDataType[] = vm.items.slice((page - 1) * limit, page * limit).map((item, index) => ({
    //             key: index,
    //             name: item.name,
    //             describe: item.describe ?? "",
    //             type: item.type ?? "",
    //             state: item.state ?? E_DriveBoxResState.sending,
    //             user: item.user?.name ?? "",
    //             box: item.box?.name ?? "",
    //             createdAt: item.createdAt != null ? item.createdAtFormatted() : '',
    //             server: item._sv,
    //             model: item
    //         }))
    //
    //         setDataSource(data)
    //     }
    //
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [vm.items])

    return (
        <MasterLayout>

            <Navbar />
            {/*<div style={{background: "#000", width: "500px", height: "500px"}} onClick={() => {*/}
            {/*    console.log('parent')}}>*/}
            {/*    <div style={{background: "white", width: "200px", height: "200px"}} onClick={(event) => {*/}
            {/*        event.stopPropagation()*/}
            {/*        console.log('child')}}>*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Button onClick={() => message.success({content: 'heheheheheh'})}>message</Button>*/}
            {/*    <Button>modal</Button>*/}
            {/*    <Button>notification</Button>*/}
            {/*    <a href="https://vite.dev" target="_blank">*/}
            {/*        <img src={viteLogo} className="logo" alt="Vite logo"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://react.dev" target="_blank">*/}
            {/*        <img src={reactLogo} className="logo react" alt="React logo"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<h1>Vite + React</h1>*/}
            {/*<div className="card">*/}
            {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*        count is {count}*/}
            {/*    </button>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.tsx</code> and save to test HMR*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<p className="read-the-docs">*/}
            {/*    Click on the Vite and React logos to learn more*/}
            {/*</p>*/}

            <Select
                options={[
                    {
                        value: 'jack',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'lucy',
                        label: 'Lucy (101)',
                    },
                    {
                        value: 'j1ack',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'lu1cy',
                        label: 'Lucy (101)',
                    },
                    {
                        value: 'ja2ck',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'l2ucy',
                        label: 'Lucy (101)',
                    },
                    {
                        value: 'jack3',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'l3ucy',
                        label: 'Lucy (101)',
                    },
                    {
                        value: 'ja4ck',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'l4ucy',
                        label: 'Lucy (101)',
                    },
                    {
                        value: 'j5ack',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'lu5cy',
                        label: 'Lucy (101)',
                    },
                    {
                        value: 'ja6ck',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'lu6cy',
                        label: 'Lucy (101)',
                    },
                    {
                        value: 'jac7k',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'lu7cy',
                        label: 'Lucy (101)',
                    },
                    {
                        value: 'j8ack',
                        label: 'Jack (100)',
                    },
                    {
                        value: 'lu8cy',
                        label: 'Lucy (101)',
                    },
                ]}
                onPopupScroll={event => {
                    const bottom = event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight

                    if (bottom) {
                        console.log('Bottom roi nha')
                    }
                }}
            />
        </MasterLayout>
    )
}

export default App
