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