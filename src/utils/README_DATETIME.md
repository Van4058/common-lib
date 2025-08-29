📅 Bảng tổng hợp datetime utils
Hàm	Mô tả	Ví dụ input	Ví dụ output
formatDate	Format ngày theo pattern (yyyy-mm-dd, dd/mm/yyyy…)	new Date("2025-08-30")	"30/08/2025"
formatDateTime	Format ngày + giờ	new Date("2025-08-30T15:45:00")	"30/08/2025 15:45"
parseDate	Chuyển string → Date (theo định dạng)	"30-08-2025", "dd-MM-yyyy"	Date(2025-08-30)
addDays	Cộng ngày vào date	(new Date("2025-08-30"), 7)	2025-09-06
subtractDays	Trừ ngày khỏi date	(new Date("2025-08-30"), 3)	2025-08-27
diffInDays	Tính số ngày giữa 2 date	(2025-08-30, 2025-09-05)	6
diffInHours	Tính số giờ giữa 2 date	(2025-08-30 10:00, 2025-08-30 15:00)	5
isBefore	So sánh date trước 1 date khác	(2025-08-29, 2025-08-30)	true
isAfter	So sánh date sau 1 date khác	(2025-09-01, 2025-08-30)	true
isSameDay	Kiểm tra 2 ngày có cùng ngày/tháng/năm không	(2025-08-30, 2025-08-30)	true
toISODate	Convert về ISO string (yyyy-mm-dd)	new Date("2025-08-30T12:00:00")	"2025-08-30"
timeAgo	Trả về dạng “x phút trước” / “x ngày trước”	new Date(Date.now()-60000)	"1 phút trước"
startOfDay	Trả về thời điểm 00:00:00 của ngày	new Date("2025-08-30 15:30")	2025-08-30T00:00:00
endOfDay	Trả về thời điểm 23:59:59 của ngày	new Date("2025-08-30 15:30")	2025-08-30T23:59:59



// utils/datetime.ts

// 1. Format date dd/MM/yyyy
export const formatDate = (date: Date, locale = "vi-VN") =>
new Intl.DateTimeFormat(locale).format(date);

// 2. Format date + time
export const formatDateTime = (date: Date, locale = "vi-VN") =>
new Intl.DateTimeFormat(locale, {
dateStyle: "short",
timeStyle: "short",
}).format(date);

// 3. Parse date từ string (basic, có thể dùng lib nếu phức tạp hơn)
export const parseDate = (str: string) => new Date(str);

// 4. Add / Subtract days
export const addDays = (date: Date, days: number) =>
new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

export const subtractDays = (date: Date, days: number) =>
addDays(date, -days);

// 5. Difference
export const diffInDays = (d1: Date, d2: Date) =>
Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));

export const diffInHours = (d1: Date, d2: Date) =>
Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60));

// 6. Compare
export const isBefore = (d1: Date, d2: Date) => d1.getTime() < d2.getTime();
export const isAfter = (d1: Date, d2: Date) => d1.getTime() > d2.getTime();
export const isSameDay = (d1: Date, d2: Date) =>
d1.getFullYear() === d2.getFullYear() &&
d1.getMonth() === d2.getMonth() &&
d1.getDate() === d2.getDate();

// 7. Convert to ISO date (yyyy-mm-dd)
export const toISODate = (date: Date) => date.toISOString().split("T")[0];

// 8. Time ago
export const timeAgo = (date: Date) => {
const diff = Date.now() - date.getTime();
const minutes = Math.floor(diff / (1000 * 60));
const hours = Math.floor(diff / (1000 * 60 * 60));
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

if (minutes < 1) return "Vừa xong";
if (minutes < 60) return `${minutes} phút trước`;
if (hours < 24) return `${hours} giờ trước`;
return `${days} ngày trước`;
};

// 9. Start/End of day
export const startOfDay = (date: Date) =>
new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

export const endOfDay = (date: Date) =>
new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
