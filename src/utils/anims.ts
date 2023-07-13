export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
    return {
      hidden: {
        x: direction === "left" ? "-200%" : direction === "right" ? "200%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  export const slideInHighDistance = (direction: string, type: string, delay: number, duration: number) => {
    return {
      hidden: {
        x: direction === "left" ? "-2000%" : direction === "right" ? "2000%" : 0,
        y: direction === "up" ? "1000%" : direction === "down" ? "-1000%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  export const textVariant = (delay: number) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };