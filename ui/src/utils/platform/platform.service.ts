const usePlatform = () => {
  const isBrowser = typeof window !== "undefined";
  return {
    isBrowser,
  };
};

export { usePlatform };
