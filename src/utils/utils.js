export const normalizeArray = (array) => array.reduce((acc, item) => ({...acc, [item._id]: item}), {});

export const denormalizeArray = (arrayObject) => Object.values(arrayObject);

export const checkIfEmptyOject = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) return false;
    }
    return true;
}

export const getSelectValues = (select) => {
    console.log("Select", select);
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }