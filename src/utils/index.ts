export const capitalize = <T extends string>(s: T) =>
  s.replace(/^\w/, (c) => c.toUpperCase()) as Capitalize<T>;

export const unsafeEntries = Object.entries as <T>(
  o: T
) => { [K in keyof T]-?: [K, T[K]] }[keyof T][];
