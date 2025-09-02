👉 Theo mình, bộ tối thiểu nên có:

Text: capitalize, truncate, slugify, removeAccents, isEmail

Number: formatNumber, clamp, roundTo




🔹 Utils cho Text / String

capitalize → Viết hoa chữ cái đầu.

export const capitalize = (str: string) =>
str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


truncate → Cắt chuỗi kèm dấu ....

export const truncate = (str: string, length: number) =>
str.length > length ? str.slice(0, length) + "..." : str;


slugify → Chuyển text thành slug (dùng cho URL).

export const slugify = (str: string) =>
str
.normalize("NFD") // loại bỏ dấu tiếng Việt
.replace(/[\u0300-\u036f]/g, "")
.toLowerCase()
.replace(/[^a-z0-9]+/g, "-")
.replace(/(^-|-$)+/g, "");


removeAccents → Bỏ dấu tiếng Việt.

export const removeAccents = (str: string) =>
str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");


isEmail → Validate email.

export const isEmail = (str: string) =>
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);


randomString → Tạo chuỗi random (ví dụ OTP, ID).

export const randomString = (length = 8) =>
Math.random().toString(36).slice(2, 2 + length);

🔹 Utils cho Number

formatNumber → Format số có dấu phân cách.

export const formatNumber = (num: number) =>
num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


clamp → Giới hạn số trong khoảng min/max.

export const clamp = (num: number, min: number, max: number) =>
Math.min(Math.max(num, min), max);


randomNumber → Sinh số ngẫu nhiên trong khoảng.

export const randomNumber = (min: number, max: number) =>
Math.floor(Math.random() * (max - min + 1)) + min;


isNumeric → Kiểm tra có phải số hợp lệ không.

export const isNumeric = (value: any) =>
!isNaN(parseFloat(value)) && isFinite(value);


roundTo → Làm tròn số theo decimal.

export const roundTo = (num: number, decimals = 2) =>
Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);


percent → Tính % (thường dùng trong UI).

export const percent = (value: number, total: number) =>
total === 0 ? 0 : (value / total) * 100;


utils/
├── text.ts
├── number.ts
├── date.ts
├── array.ts
├── object.ts
├── validation.ts
├── browser.ts
├── storage.ts
├── async.ts
└── index.ts


| Nhóm              | Ví dụ hàm                                                                             | Mục đích                          |
| ----------------- | ------------------------------------------------------------------------------------- | --------------------------------- |
| **Text/String**   | `capitalize`, `slugify`, `truncate`, `removeAccents`, `camelToSnake`, `highlightText` | Xử lý chuỗi, format tên, slug URL |
| **Number/Math**   | `clamp`, `roundTo`, `randomInt`, `percentage`, `formatNumber`, `isEven`               | Xử lý số, toán học cơ bản         |
| **Date/Time**     | `formatDate`, `isToday`, `addDays`, `diffDays`, `toISO`, `startOfWeek`                | Format & so sánh ngày giờ         |
| **Array/List**    | `unique`, `flatten`, `chunk`, `shuffle`, `groupBy`, `removeDuplicates`                | Xử lý danh sách                   |
| **Object**        | `deepClone`, `isEmpty`, `merge`, `pick`, `omit`, `deepGet`                            | Làm việc với object phức tạp      |
| **Validation**    | `isEmail`, `isPhone`, `isUrl`, `isUUID`, `isNumeric`                                  | Validate input                    |
| **Browser/DOM**   | `copyToClipboard`, `scrollToTop`, `downloadFile`, `getQueryParam`                     | Tương tác trình duyệt             |
| **Storage**       | `getLocalStorage`, `setLocalStorage`, `removeLocalStorage`, `getSessionStorage`       | Wrapper cho local/session storage |
| **Promise/Async** | `sleep`, `retry`, `timeout`, `debounceFn`, `throttleFn`                               | Hỗ trợ bất đồng bộ                |
| **Misc/Other**    | `uuid`, `noop`, `range`, `hashString`, `safeJSONParse`                                | Tiện ích chung                    |
