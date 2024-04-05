import { IMAGES_ARRAY, LANGUAGES } from "@/constant/const";

export const getRandomImage = () => {
  return IMAGES_ARRAY[Math.floor(Math.random() * IMAGES_ARRAY?.length)];
};

export const compareStrings = (str1: string, str2: string) => {
  return str1?.toLowerCase() === str2?.toLowerCase();
};

export const getFullLanguageName = (lang: string) => {
  if (!lang) {
    return "";
  }
  // @ts-ignore
  return LANGUAGES[lang];
};
export const getCommaSepratedString = (strArr: string[]) => {
  const newStr = strArr?.reduce((cumm, current, index, array) => {
    if (index === array.length - 1) {
      return cumm + current;
    }
    return cumm + current + ", ";
  }, "");
  return newStr;
};

export const getHumanReadableDate = (date: Date) => {
  return new Date(date)?.toDateString();
};

export const getRandomId = () => {
  return Math.ceil(Math.random() * 1000000);
};

export const getDuration = (value: number) => {
  const base = Math.floor(value / 60);
  const extra = value - base * 60;
  return `${base} hrs ${extra} mins`;
};

export const showLimitedText = (text: string, limit: number) => {
  const modifiedText = text?.slice(0, limit);
  if (limit < text?.length) {
    return `${modifiedText}...`;
  }
  return modifiedText;
};
