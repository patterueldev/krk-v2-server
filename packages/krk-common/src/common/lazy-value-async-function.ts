import { Lazy } from "./lazy";

export default function lazyValueAsync<T>(compute: () => Promise<T>): Lazy<Promise<T>> {
  let value: T | undefined;
  return async function() { // changed to use a regular function
    if (!value) {
      value = await compute();
    }
    return value;
  };
}