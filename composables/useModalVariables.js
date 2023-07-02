export default () => {
  //open or close the modal
  let openToggle = useState("openToggle", () => false);
  //changing the value of tho modal (used in Acions/Comment box)
  let toggleValue = useState("toggleValue", () => null);
  return {
    openToggle,
    toggleValue,
  };
};
