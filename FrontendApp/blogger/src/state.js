const state = {
  restUrl: "http://localhost/headerlessWP/wp-json/",
  sitename: "Blogger Site",
  siteDescription: "Just Another Headerless WordPress Site",
};

const setState = (toSet, newValue) => {
  state[toSet] = newValue;
};

export { state, setState };
