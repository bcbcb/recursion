// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    
  var result = [];

  // Strings in double quotes
  if (typeof obj === 'string') {
    return '"'  + obj + '"';
  }

  // Null, Number, Boolean return string
  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean' ) {
    return  obj + '';
  }

  // Arrays in brackets
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      // add commas
      result.push(stringifyJSON(obj[i]));
   } 
    return '[' + result.join(',') + ']';
  }

  // Objects in curly braces
  if (typeof obj === 'object') {
    for (var key in obj) {
      var value = stringifyJSON(obj[key]);

      // Skip if the value is undefined or a function
      if (typeof value !== 'undefined' && typeof value !== 'function') {
        result.push( stringifyJSON(key) + ':' + value );
      }
    }

    return '{' + result.join(',') + '}';
  }
};
