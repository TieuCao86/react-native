
import React from "react";
import { SelectPhoneApp } from "./src/components/ex1/SelectPhoneApp";
import { PHONES } from "./src/data/phones";

export default function App() {
  return <SelectPhoneApp phone={PHONES[0]} />;
}
