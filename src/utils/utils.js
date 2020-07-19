export const normalizeArray = (array) =>
  array.reduce((acc, item) => ({ ...acc, [item._id]: item }), {});

export const denormalizeArray = (arrayObject) => Object.values(arrayObject);

export const checkIfEmptyOject = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const getSelectValues = (select) => {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
};

// Receives a number and returns an array with that number of elements with letter like A...Z,AA...AZ....
export const getArrayOfLetters = (topVal) => {
  let resp = [];
  const posA = "A".charCodeAt(0);
  const posZ = "Z".charCodeAt(0);
  const charOpts = posZ - posA + 1;

  for (let i = 0; i < topVal; i++) {
    let temp = i;
    let acc = "";
    while (temp >= 0) {
      acc = String.fromCharCode(temp % charOpts + posA) + acc;
      temp = Math.floor(temp / charOpts) - 1;
    }
    resp.push(acc);
  }
  return resp;
};
