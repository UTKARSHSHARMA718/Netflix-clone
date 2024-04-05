import { useEffect, useRef, useState } from "react";

import { SCROLL_BY } from "@/constant/const";

const useScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLeftArraowActive, setIsLeftArrowActive] = useState(false);
  const [isRightArraowActive, setIsRightArrowActive] = useState(false);

  const checkScrollIsActive = () => {
    const scrollContaier = containerRef?.current!;
    const rightSideLimit =
      scrollContaier?.scrollWidth - scrollContaier?.clientWidth;
    const scrollPosition = scrollContaier?.scrollLeft || 0;
    if (rightSideLimit - 150 <= scrollPosition) {
      setIsRightArrowActive(false);
    } else {
      setIsRightArrowActive(true);
    }
    if (scrollPosition - 100 <= 0) {
      setIsLeftArrowActive(false);
    } else {
      setIsLeftArrowActive(true);
    }
  };

  const onScroll = (direction: "left" | "right") => {
    const scrollContaier = containerRef?.current!;
    const currentScrollLeft = (scrollContaier?.scrollLeft as number) || 0;

    if (direction === "left") {
      scrollContaier.scrollLeft = currentScrollLeft - SCROLL_BY;
      checkScrollIsActive();
      return;
    }
    scrollContaier.scrollLeft = currentScrollLeft + SCROLL_BY;
    checkScrollIsActive();
  };

  useEffect(() => {
    checkScrollIsActive();
  }, []);

  return {
    containerRef,
    isLeftArraowActive,
    isRightArraowActive,
    checkScrollIsActive,
    onScroll,
  };
};

export default useScroll;
