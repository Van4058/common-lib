import { Modal, Spin } from "antd"
import {useState} from "react";

export const CustomModal = () => {
    const [loading, setLoading] = useState(false);

    return (
        <Modal
            open={true}
            title="Thông tin người dùng"
            // onOk={}
            // onCancel={() => setOpen(false)}
            okText="Lưu"
            modalRender={(dom) => (
                <Spin spinning={loading}>
                    {dom}
                </Spin>
            )}
        >
            <p>Họ tên: Nguyễn Văn A</p>
            <p>Email: example@gmail.com</p>
        </Modal>
    )
}