🔹 Nhóm state & lifecycle

useBoolean: Quản lý state true/false (toggle modal, dropdown, loading state).

useToggle: Giống useBoolean nhưng linh hoạt hơn (toggle giữa nhiều giá trị).

useDebounce: Trì hoãn update value khi người dùng nhập (search input).

useThrottle: Kiểm soát tần suất gọi hàm (scroll, resize).

usePrevious: Lưu giá trị trước đó của state/prop.

🔹 Nhóm UI

useClickOutside: Đóng modal/dropdown khi click ra ngoài.

useHover: Xác định khi nào chuột hover vào element.

useLongPress: Bắt sự kiện nhấn giữ chuột hoặc màn hình cảm ứng.

useResponsive hoặc useBreakpoint: Theo dõi viewport để xử lý responsive (mobile, tablet, desktop).

useDarkMode: Quản lý theme light/dark.

🔹 Nhóm form & validation

useForm (nếu không dùng form lib ngoài): Quản lý state form, validate, reset.

useInput: Quản lý state và sự kiện của input đơn lẻ.

🔹 Nhóm data fetching

useFetch: Hook generic để call API (loading, error, retry).

useInfiniteScroll: Load thêm data khi scroll đến cuối list.

usePolling: Call API theo interval (realtime update).

useWebSocket: Quản lý kết nối websocket.

🔹 Nhóm tiện ích hệ thống

useLocalStorage, useSessionStorage: Quản lý state lưu trong storage.

useCopyToClipboard: Copy text vào clipboard.

useOnlineStatus: Check người dùng đang online/offline.

usePageVisibility: Detect khi tab trình duyệt bị ẩn/hiện.

useEventListener: Thêm/xóa event listener dễ dàng.

useKeyPress: Bắt phím nhấn (ESC để đóng modal, Enter để submit).

🔹 Nhóm nâng cao (nếu cần)

useIntersectionObserver: Trigger khi element xuất hiện trong viewport (lazy load image, infinite scroll).

useMeasure: Đo kích thước element.

usePortal: Render component ra ngoài DOM tree hiện tại (modal, tooltip).

useQueue: Quản lý hàng đợi (ví dụ notification queue).





export function useBoolean(initialValue = false) {
const [value, setValue] = useState(initialValue);

const setTrue = useCallback(() => setValue(true), []);
const setFalse = useCallback(() => setValue(false), []);
const toggle = useCallback(() => setValue((v) => !v), []);

return { value, setTrue, setFalse, toggle };
}


export function useClickOutside(
ref: RefObject<HTMLElement>,
handler: (event: MouseEvent | TouchEvent) => void
) {
useEffect(() => {
const listener = (event: MouseEvent | TouchEvent) => {
if (!ref.current || ref.current.contains(event.target as Node)) {
return;
}
handler(event);
};

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
}, [ref, handler]);
}


export function useDebounce<T>(value: T, delay = 300): T {
const [debouncedValue, setDebouncedValue] = useState(value);

useEffect(() => {
const timer = setTimeout(() => setDebouncedValue(value), delay);
return () => clearTimeout(timer);
}, [value, delay]);

return debouncedValue;
}

export function useFetch<T = unknown>(url: string, options?: RequestInit) {
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<Error | null>(null);

const fetchData = useCallback(async () => {
try {
setLoading(true);
setError(null);
const res = await fetch(url, options);
if (!res.ok) throw new Error(res.statusText);
const json = (await res.json()) as T;
setData(json);
} catch (err) {
setError(err as Error);
} finally {
setLoading(false);
}
}, [url, options]);

useEffect(() => {
fetchData();
}, [fetchData]);

return { data, loading, error, refetch: fetchData };
}

export function useLocalStorage<T>(key: string, initialValue: T) {
const [storedValue, setStoredValue] = useState<T>(() => {
try {
const item = window.localStorage.getItem(key);
return item ? (JSON.parse(item) as T) : initialValue;
} catch {
return initialValue;
}
});

useEffect(() => {
try {
window.localStorage.setItem(key, JSON.stringify(storedValue));
} catch {
// ignore
}
}, [key, storedValue]);

return [storedValue, setStoredValue] as const;
}


export function useEventListener<K extends keyof WindowEventMap>(
event: K,
handler: (event: WindowEventMap[K]) => void,
element: Window | Document | HTMLElement = window
) {
const savedHandler = useRef(handler);

useEffect(() => {
savedHandler.current = handler;
}, [handler]);

useEffect(() => {
const listener = (event: WindowEventMap[K]) => savedHandler.current(event);
element.addEventListener(event, listener as EventListener);
return () => element.removeEventListener(event, listener as EventListener);
}, [event, element]);
}
