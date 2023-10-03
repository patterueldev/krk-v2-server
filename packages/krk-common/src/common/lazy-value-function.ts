import { Lazy } from "./lazy";

export default function lazyValue<T>(compute: () => T): Lazy<T> {
  let value: T | undefined;
  return () => {
    if (!value) {
      value = compute();
    }
    return value;
  };
}