/**
 * Utility function to conditionally combine classNames
 * @param classes - ClassValue can be string, object, or array
 * @returns Combined class string
 */
export function classNames(
  ...classes: (string | undefined | null | { [key: string]: boolean })[]
): string {
  return classes
    .flatMap((cls) => {
      if (!cls) return [];
      if (typeof cls === 'string') return cls.split(' ');
      if (Array.isArray(cls)) return cls;
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([, value]) => value)
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}

export default classNames;
