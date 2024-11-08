import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function genRandomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function extractFilename(url: string) {
  // Match the filename pattern before the extension duplicates
  const match = url.match(/\/([^/]+?)(\.(?:png|jpg|jpeg|gif|pdf))+$/);
  console.log("✨ ~ file: utils.ts:15 ~ extractFilename ~ match:", match);
  return match ? match[1] + match[2] : null;
}

export function capitalizeFirstLetter(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
