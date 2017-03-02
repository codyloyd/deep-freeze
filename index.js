module.exports = function deepFreeze () {
  var args = [].slice.call(arguments);
  var freeze = function(o) {
      Object.freeze(o);

      Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop)
        && o[prop] !== null
        && (typeof o[prop] === "object" || typeof o[prop] === "function")
        && !Object.isFrozen(o[prop])) {
          deepFreeze(o[prop]);
        }
      });
    
    return o;
  }
  
  for (var index = 0; index < args.length; index++) {
    freeze(args[index])
  }
};
