// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  
  var traverse = function (element) {
    if (typeof element.classList !== 'undefined' && element.classList.contains(className)) {
      results.push(element);
    }
    if (element.childNodes) {
      for (var el in element.childNodes) {
        traverse(element.childNodes[el]);
      }
    }
  };

  traverse(document.body);

  return results;

};
