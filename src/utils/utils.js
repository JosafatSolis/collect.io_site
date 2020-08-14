import tinycolor from "tinycolor2";

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

export const clearSelectValues = (select) => {
  var options = select && select.options;
  for (var i = 0; i < options.length; i++ ) {
    options[i].selected = false;
  }
}

// Receives a number and returns an array with that number of elements with letters like A...Z,AA...AZ....
export const getArrayOfLetters = (topVal) => {
  let resp = [];
  const posA = "A".charCodeAt(0);
  const posZ = "Z".charCodeAt(0);
  const charOpts = posZ - posA + 1;

  for (let i = 0; i < topVal; i++) {
    let temp = i;
    let acc = "";
    while (temp >= 0) {
      acc = String.fromCharCode((temp % charOpts) + posA) + acc;
      temp = Math.floor(temp / charOpts) - 1;
    }
    resp.push(acc);
  }
  return resp;
};

// Generates a particular color from the CODE
export const getRGBA = (textSeed, alpha = 0.99) => {
  const seed = getUniqueNumber(textSeed);
  let r = (255 + 60 * seed) % 255;
  let g = (99 + 140 * seed) % 255;
  let b = (132 + 220 * seed) % 255;
  let color = tinycolor({r:`${r}`, g:`${g}`, b:`${b}`});
  // Ensures that the color is always visible
  while (color.getBrightness() > 128) {
    color = color.darken();
  }
  color.setAlpha(alpha);
  return color.toRgbString();
};

const getUniqueNumber = (text) => {
  var num = 0,
    i,
    chr,
    len;
  if (text.length === 0) return num;
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    num = (num << 5) - num + chr;
    num |= 0; // Convert to 32bit integer
  }
  return num;
};

export const getA2 = (sampleSize) => {
  let resp = 0;
  switch (sampleSize) {
    case 2:
      return 1.88;
    case 3:
      return 1.023;
    case 4:
      return 0.729;
    case 5:
      return 0.577;
    case 6:
      return 0.483;
    case 7:
      return 0.419;
    case 8:
      return 0.373;
    case 9:
      return 0.337;
    case 10:
      return 0.308;
    case 11:
      return 0.285;
    case 12:
      return 0.266;
    case 13:
      return 0.249;
    case 14:
      return 0.235;
    case 15:
      return 0.223;
    case 16:
      return 0.212;
    case 17:
      return 0.203;
    case 18:
      return 0.194;
    case 19:
      return 0.187;
    case 20:
      return 0.18;
    case 21:
      return 0.173;
    case 22:
      return 0.167;
    case 23:
      return 0.162;
    case 24:
      return 0.157;
    case 25:
      return 0.153;
    default:
      return resp;
  }
};
