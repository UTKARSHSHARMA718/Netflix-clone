import { IMAGES_ARRAY } from "@/constant/const";

export const getRandomImage = () => {
  return IMAGES_ARRAY[Math.floor(Math.random() * IMAGES_ARRAY?.length)];
};

export const compareStrings = (str1: string, str2: string) => {
  return str1?.toLowerCase() === str2?.toLowerCase();
};
