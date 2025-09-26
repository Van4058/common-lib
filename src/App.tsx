import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from "./components/button/Button.tsx";
import {MasterLayout} from "./layouts/MasterLayout.tsx";
import {useFeedback} from "./contexts/FeedbackContext.tsx";
import {Select} from "antd";

function App() {
    const [count, setCount] = useState(0)
    const {message, notification, modal} = useFeedback();

    return (
        <MasterLayout>
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
