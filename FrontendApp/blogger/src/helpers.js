export const getEl = (id) => document.getElementById(id);

export const createE1 = (id) => document.createElement(id);

export const removeEl = (el) => {
  if (isRendered(el)) getEl(el).remove();
};

export const isRendered = (el) => {
  return getEl(el) ? true : false;
};
