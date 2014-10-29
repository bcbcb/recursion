// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    
  var result = '';

  console.log("OBJECT*** : " + obj + ' - type: ' + typeof obj);

  if (typeof obj === 'string') {
    return '\"'  + obj + '\"';
  }
  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
    return  obj + '';
  }
  if (Array.isArray(obj)) {
    return '[' + obj.toString() + ']';
}
  
  return result;
};
