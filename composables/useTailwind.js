const useTailwind = () => {
  let darkToggle = useState("darkToggle", () => false);
  let defaultTransition = "transition-all duration-300";
  return {
    defaultTransition,
    darkToggle,
  };
};

export default useTailwind;
