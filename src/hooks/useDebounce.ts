import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useDebounce = (time: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const debounce = setTimeout(() => {
      searchParams.set("title", value);
      setSearchParams(searchParams);
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(debounce);
    };
  }, [value, time]);
  return { debouncedValue, value, setValue };
};
