import React, {useState, useRef, useEffect, type RefObject, type ReactNode} from "react";
import ReactDOM from "react-dom";
import {useOutsideClick} from "../../hooks/useOutsideClick.ts";

export type SubMenuProps = {
    anchorRef: RefObject<HTMLAnchorElement | null>,
    navbarRef: RefObject<HTMLAnchorElement | null>,
    open: boolean,
    onClose: () => void,
    children: ReactNode
}

export const SubMenu = ({anchorRef, navbarRef, open, onClose, children}: SubMenuProps) => {
    const menuRef = useRef(null);
    const [pos, setPos] = useState({top: 0, left: 0, width: 0});

    useEffect(() => {
        if (open && anchorRef.current && navbarRef.current) {
            const itemRect = anchorRef.current.getBoundingClientRect();
            const navRect = navbarRef.current.getBoundingClientRect();
            setPos({
                top: navRect.bottom + window.scrollY, // 👈 Căn ngay dưới navbar
                left: itemRect.left + window.scrollX,
                width: itemRect.width,
            });
        }
    }, [open, anchorRef, navbarRef]);

    useOutsideClick([menuRef, anchorRef], onClose);

    if (!open || pos.top === 0) return null;

    return ReactDOM.createPortal(
        <div
            ref={menuRef}
            style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                minWidth: pos.width,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: 6,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                zIndex: 999,
            }}
        >
            {children}
        </div>,
        document.body
    );
}

export type MenuItemProps = {
    label?: React.ReactNode,
    submenu?: React.ReactNode,
    navbarRef: RefObject<HTMLAnchorElement | null>,
}

export const MenuItem = ({label, submenu, navbarRef}: MenuItemProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                padding: "8px 16px",
                cursor: "pointer",
                userSelect: "none",
            }}
            onClick={() => setOpen((o) => !o)}
        >
            {label}
            {submenu && (
                <SubMenu
                    navbarRef={navbarRef}
                    anchorRef={ref}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    {submenu}
                </SubMenu>
            )}
        </div>
    );
}

export const Navbar = () => {
    const ref = useRef(null);

    return (
        <nav
            ref={ref}
            style={{
                display: "flex",
                gap: 16,
                padding: "12px 24px",
                background: "#f6f6f6",
                borderBottom: "1px solid #ddd",
                overflow: "hidden", // 👈 Cái này không còn cắt submenu nữa nhờ Portal
            }}
        >
            <MenuItem
                navbarRef={ref}
                label="Trang chủ"
            />
            <MenuItem
                navbarRef={ref}
                label="Sản phẩm"
                submenu={
                    <>
                        <div style={{padding: 8}}>Điện thoại</div>
                        <div style={{padding: 8}}>Laptop</div>
                        <div style={{padding: 8}}>Phụ kiện</div>
                    </>
                }
            />
            <MenuItem
                navbarRef={ref}
                label="Dịch vụ"
                submenu={
                    <>
                        <div style={{padding: 8}}>Bảo hành</div>
                        <div style={{padding: 8}}>Giao hàng</div>
                    </>
                }
            />
            <MenuItem
                navbarRef={ref}
                label="Liên hệ"
            />
        </nav>
    );
}
