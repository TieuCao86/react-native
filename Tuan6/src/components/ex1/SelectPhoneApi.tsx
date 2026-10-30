
import React, { useState, useEffect, useCallback } from "react";
import type { Phone } from "../../types";
import { fetchPhone } from "../../api/phoneApi";
import { Loading } from "../ex2/Loading";
import { ErrorBox } from "../ex2/ErrorBox";
import { SelectPhoneApp } from "./SelectPhoneApp";

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    // TODO 1
    setError(null);
    setPhone(null);

    // TODO 2
    try {
      setPhone(await fetchPhone("1"));
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Có lỗi xảy ra"
      );
    }
  }, []);

  // TODO 3
  useEffect(() => {
    load();
  }, [load]);

  // TODO 4
  if (error) {
    return <ErrorBox message={error} onRetry={load} />;
  }

  // TODO 5
  if (!phone) {
    return <Loading />;
  }

  // TODO 6
  return <SelectPhoneApp phone={phone} />;
}
