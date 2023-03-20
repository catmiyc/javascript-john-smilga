// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw Error(`"${selection}" you did not select correct element`);
//   }
// }

// export default getElement;
export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`"${selection}" you did not select correct element`);
  }
}
