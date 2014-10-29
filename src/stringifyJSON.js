// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    
  var result = '';
  console.log("OBJECT -- " + typeof obj);
  console.log(obj);

  // Strings in double quotes
  if (typeof obj === 'string') {
    return '\"'  + obj + '\"';
  }

  // Null, Number, Boolean
  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'undefined' ) {
    return  obj + '';
  }


  // Arrays
  if (Array.isArray(obj)) {
    // empty array
    if (obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      // add commas
      result += stringifyJSON(obj[i]) + ',';
   } // remove the trailing comma 
    return '[' + result.slice(0, -1) + ']';
  }

  if (typeof obj === 'function') {
    console.log('func');
    return '{}';
  }

  // Objects
  if (typeof obj === 'object') {

    // empty object
    if (Object.keys(obj).length === 0) {
      return '{}';
    }

    for (var key in obj) {
      var keyString = stringifyJSON(key);
      var valueString = stringifyJSON(obj[key]);
      var resultString = keyString + ':' + valueString + ','; 

      // dont stringify anything if the value is undefined or an empty function
      if (valueString === 'undefined') {
        resultString = '';
      }
      if (valueString === '{}' && typeof obj[key] === 'function') {
        resultString = '';
      }

      // build the stringified object
      result += resultString;

    }

    return '{' + result.slice(0, -1) + '}';
  }


};
