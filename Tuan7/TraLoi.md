### 1. Cấu trúc điều hướng
`BookDetail` được đăng ký ở Stack thay vì Tab vì màn hình chi tiết cần ẩn thanh điều hướng dưới cùng (Bottom Tab Bar) để tối ưu không gian hiển thị nội dung và cung cấp nút quay lại (Back). Nếu đặt trong Tab, thanh tab bar vẫn sẽ hiển thị cố định ở phía dưới và người dùng có thể chuyển tab ngay khi đang xem chi tiết sách, điều này làm trải nghiệm người dùng kém tự nhiên.

### 2. Redux & Hooks
Redux Toolkit sử dụng thư viện Immer bên dưới, tự động tạo ra một bản sao (draft) bất biến (immutable) khi thực hiện các thao tác thay đổi trạng thái như `push`. Nếu bỏ `useMemo` trong `useCart`, kết quả hiển thị trên UI không đổi nhưng các giá trị `totalQuantity` và `totalPrice` sẽ bị tính toán lại liên tục ở mỗi lần component render, gây sụt giảm hiệu năng nghiêm trọng.

### 3. Promise.all & Xử lý lỗi API
Nếu `getCategories()` lỗi còn `getBooks()` thành công, toàn bộ khối `Promise.all` sẽ bị nhảy vào nhánh `catch`, khiến màn hình `Home` hiển thị giao diện lỗi thay vì danh sách sách. Để khắc phục, ta có thể dùng `Promise.allSettled` để lấy kết quả độc lập của từng lời gọi, nhưng đánh đổi là code xử lý logic trả về sẽ phức tạp hơn và ta phải tự xử lý hiển thị linh hoạt khi một phần dữ liệu bị thiếu.

### 4. Debounce & Cleanup
Không đặt `setTimeout` trực tiếp trong `onChangeText` vì hàm này chạy mỗi lần người dùng gõ ký tự, dẫn đến việc tạo ra hàng loạt timer chạy chồng chéo gây sai lệch logic. Hàm dọn dẹp (`clearTimeout`) giúp hủy bỏ các bộ đếm hẹn giờ của các lần gõ trước đó, ngăn chặn việc gọi callback liên tục không cần thiết và tránh rò rỉ bộ nhớ.

### 5. Code bổ sung: Sắp xếp giá sách
Để thêm tính năng sắp xếp, bạn khai báo thêm state `sortOrder` và cập nhật lại cách tính toán `visibleBooks` trong `HomeScreen`:

```tsx
// 1. Thêm state sắp xếp trong HomeScreen
const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");

// 2. Cập nhật lại logic trong useMemo của visibleBooks
const visibleBooks = useMemo(() => {
  let list = filterBooks(books, { keyword: debouncedKeyword, categoryId, priceRange });
  if (sortOrder === "asc") {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    list = [...list].sort((a, b) => b.price - a.price);
  }
  return list;
}, [books, debouncedKeyword, categoryId, priceRange, sortOrder]);
```
*(Kết quả hiển thị danh sách sách được sắp xếp chuẩn xác theo chiều tăng/giảm của giá trên giao diện).*