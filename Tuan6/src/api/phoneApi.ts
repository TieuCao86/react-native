
import { PHONES } from "../data/phones";
import type { Phone } from "../types";

export const API_URL = (
  process.env.EXPO_PUBLIC_API_URL ?? ""
).replace(/\/$/, "");

export const USING_API = API_URL !== "";

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchPhone(id: string): Promise<Phone> {
  if (!USING_API) {
    await sleep(600);
    const phone = PHONES.find((p) => p.id === id);

    if (!phone) throw new Error("Không tìm thấy sản phẩm");
    return phone;
  }

  const res = await fetch(`${API_URL}/phones/${id}`);

  if (!res.ok) {
    throw new Error(`Máy chủ trả về lỗi ${res.status}`);
  }

  return (await res.json()) as Phone;
}
