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
    if (obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ','
    } 
    return '[' + result.slice(0, -1) + ']';
  }

  if (typeof obj === 'function') {
    console.log('func');
    return '{}';
  }

  // Objects
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    console.log('KEYS:');
    console.log(Object.keys(obj));

    for (var key in obj) {
      if (obj[key] !== undefined) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + result.slice(0, -1) + '}';
  }


};
