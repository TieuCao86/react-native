import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  ids: number[];
}
const initialState: WishlistState = { ids: [] };

// THỬ THÁCH (BT7.C1) — dùng lại ở buổi sau
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // BT7.C1 (thử thách): nếu id đã có trong state.ids thì bỏ ra, chưa có thì thêm vào
    toggleWishlist(state, action: PayloadAction<number>) {
      const bookId = action.payload;
      if (state.ids.includes(bookId)) {
        state.ids = state.ids.filter((id) => id !== bookId);
      } else {
        state.ids.push(bookId);
      }
    },
    hydrateWishlist(state, action: PayloadAction<number[]>) {
      state.ids = action.payload;
    },
  },
});

export const { toggleWishlist, hydrateWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;