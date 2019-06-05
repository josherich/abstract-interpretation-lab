// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function pleq(a1, a2) {
  if (a1 !== 0) {
    if (a2 !== 0) {
      if (a2 >= 3) {
        return true;
      } else if (a1 >= 3) {
        return false;
      } else {
        return a1 === a2;
      }
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function pjoin(a1, a2) {
  if (a1 !== 0) {
    if (a2 !== 0 && (a2 >= 3 || a1 >= 3 || a1 !== a2)) {
      return /* TOP */3;
    } else {
      return a1;
    }
  } else {
    return a2;
  }
}

function psum(a1, a2) {
  var exit = 0;
  switch (a1) {
    case 0 : 
        return /* BOT */0;
    case 1 : 
        switch (a2) {
          case 0 : 
              exit = 1;
              break;
          case 1 : 
              return /* EVEN */2;
          case 2 : 
              return /* ODD */1;
          case 3 : 
              return /* TOP */3;
          
        }
        break;
    case 2 : 
        switch (a2) {
          case 0 : 
              exit = 1;
              break;
          case 1 : 
              return /* ODD */1;
          case 2 : 
              return /* EVEN */2;
          case 3 : 
              return /* TOP */3;
          
        }
        break;
    case 3 : 
        exit = 1;
        break;
    
  }
  if (exit === 1) {
    if (a2 !== 0) {
      return /* TOP */3;
    } else {
      return /* BOT */0;
    }
  }
  
}

function stringofparity(a) {
  switch (a) {
    case 0 : 
        return "_|_";
    case 1 : 
        return "o";
    case 2 : 
        return "e";
    case 3 : 
        return "T";
    
  }
}

function leq(r1, r2) {
  if (pleq(Curry._1(r1, "x"), Curry._1(r2, "x")) && pleq(Curry._1(r1, "y"), Curry._1(r2, "y"))) {
    return pleq(Curry._1(r1, "z"), Curry._1(r2, "z"));
  } else {
    return false;
  }
}

function initialize(vl) {
  return /* () */0;
}

function bot(param, x) {
  return /* BOT */0;
}

function join(r1, r2, x) {
  return pjoin(Curry._1(r1, x), Curry._1(r2, x));
}

function initialP(param, x) {
  return /* EVEN */2;
}

function evala(a, r) {
  var exit = 0;
  switch (a.tag | 0) {
    case 0 : 
        if (a[0] % 2 === 0) {
          return /* EVEN */2;
        } else {
          return /* ODD */1;
        }
    case 1 : 
        var x = a[0];
        if (x === "x" || x === "y" || x === "z") {
          return Curry._1(r, x);
        } else {
          return Pervasives.failwith("AbstractDomainParity : undeclared variable");
        }
    case 2 : 
    case 3 : 
        exit = 1;
        break;
    
  }
  if (exit === 1) {
    return psum(evala(a[0], r), evala(a[1], r));
  }
  
}

function assign(x, a, r, y) {
  if (x === y) {
    return evala(a, r);
  } else {
    return Curry._1(r, y);
  }
}

function smash(p1, p2, r) {
  if (p1 !== 0) {
    if (p2 !== 0) {
      return r;
    } else {
      return (function (param) {
          return /* BOT */0;
        });
    }
  } else {
    return (function (param) {
        return /* BOT */0;
      });
  }
}

function test(_b, r) {
  while(true) {
    var b = _b;
    switch (b.tag | 0) {
      case 2 : 
          var match = evala(b[0], r);
          var match$1 = evala(b[1], r);
          var exit = 0;
          switch (match) {
            case 0 : 
                return (function (param) {
                    return /* BOT */0;
                  });
            case 1 : 
                if (match$1 >= 3) {
                  return r;
                } else {
                  switch (match$1) {
                    case 0 : 
                        exit = 1;
                        break;
                    case 1 : 
                        return r;
                    case 2 : 
                        return (function (param) {
                            return /* BOT */0;
                          });
                    
                  }
                }
                break;
            case 2 : 
                if (match$1 !== 1) {
                  if (match$1 !== 0) {
                    return r;
                  } else {
                    exit = 1;
                  }
                } else {
                  return (function (param) {
                      return /* BOT */0;
                    });
                }
                break;
            case 3 : 
                exit = 1;
                break;
            
          }
          if (exit === 1) {
            if (match$1 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          }
          break;
      case 4 : 
          _b = b[1];
          continue ;
      default:
        return smash(evala(b[0], r), evala(b[1], r), r);
    }
  };
}

function nottest(b, r) {
  if (b.tag === 4) {
    return r;
  } else {
    return smash(evala(b[0], r), evala(b[1], r), r);
  }
}

function stringofaP(r, vl) {
  if (vl) {
    var vl$prime = vl[1];
    var v = vl[0];
    if (vl$prime) {
      return v + ("=" + (stringofparity(Curry._1(r, v)) + ("; " + stringofaP(r, vl$prime))));
    } else {
      return v + ("=" + stringofparity(Curry._1(r, v)));
    }
  } else {
    return ";";
  }
}

exports.pleq = pleq;
exports.pjoin = pjoin;
exports.psum = psum;
exports.stringofparity = stringofparity;
exports.leq = leq;
exports.initialize = initialize;
exports.bot = bot;
exports.join = join;
exports.initialP = initialP;
exports.evala = evala;
exports.assign = assign;
exports.smash = smash;
exports.test = test;
exports.nottest = nottest;
exports.stringofaP = stringofaP;
/* No side effect */