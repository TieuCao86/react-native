import { HomeScreen } from './screens/HomeScreen';

export default function App() {
  return (
    <HomeScreen
      cartCount={3}
      onPressBook={(id) => {
        console.log("Chọn sách:", id);
      }}
      onPressCart={() => {
        console.log("Mở giỏ hàng");
      }}
    />
  );
}