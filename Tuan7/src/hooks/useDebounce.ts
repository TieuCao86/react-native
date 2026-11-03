import { useEffect, useState } from "react";

// Trả về giá trị "đã trễ": chỉ cập nhật sau khi người dùng ngừng gõ `delay` ms
export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState(value);
  
  useEffect(() => {
    // Thiết lập hẹn giờ cập nhật giá trị sau khoảng thời gian `delay`
    const t = setTimeout(() => setDebounced(value), delay);
    
    // Hàm dọn dẹp (cleanup function): huỷ hẹn giờ cũ nếu `value` hoặc `delay` thay đổi trước khi hết giờ
    return () => clearTimeout(t);
  }, [value, delay]);

  return debounced;
}