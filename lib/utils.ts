import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// A custom classnames function that merges tailwind classes
// credit https://ui.shadcn.com/docs/installation#add-a-cn-helper
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function tagToColor(tag: string) {
  switch (tag) {
    case 'Personal':
      return 'blue-500';
    case 'Class':
      return 'green-500';
    case 'Start Up':
      return 'yellow-500';
    case 'Research':
      return 'red-500';
    default:
      return 'gray-500';
  }
}

export function countStrings(strings: string[]): Map<string, number> {
  const stringMap = new Map<string, number>();

  // generate string map
  for (const str of strings) {
    if (stringMap.has(str)) {
      // Increment the count if the string is already in the map
      stringMap.set(str, stringMap.get(str)! + 1);
    } else {
      // Initialize the count to 1 for a new string
      stringMap.set(str, 1);
    }
  }

  // return a new Map sorted by value
  const sortedEntries = [...stringMap.entries()].sort((a, b) => b[1] - a[1]);
  return new Map(sortedEntries);
}
