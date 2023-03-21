const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`no sucn element:${selection} selected`);
};

export default getElement;
