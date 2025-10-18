import {useEffect} from "react";

export const useOutsideClick = (refs, onOutside) => {
    useEffect(() => {
        const handleClick = (e) => {
            // Nếu click không nằm trong bất kỳ ref nào
            if (!refs.some((r) => r.current && r.current.contains(e.target))) {
                onOutside();
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [refs, onOutside]);
}
