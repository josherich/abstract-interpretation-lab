// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function string_abs(a) {
  if (typeof a === "number") {
    if (a !== 0) {
      return "TOP";
    } else {
      return "BOT";
    }
  } else {
    return String(a[0]);
  }
}

function cleq(a1, a2) {
  var exit = 0;
  if (typeof a1 === "number" && a1 === 0) {
    return true;
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (typeof a2 === "number") {
      return a2 !== 0;
    } else if (typeof a1 === "number") {
      return false;
    } else {
      return Caml_obj.caml_equal(a1, a2);
    }
  }
  
}

function cjoin(a1, a2) {
  var exit = 0;
  if (typeof a1 === "number" && a1 === 0) {
    return a2;
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (typeof a2 === "number") {
      if (a2 !== 0) {
        return /* TOP */1;
      } else {
        return a1;
      }
    } else if (typeof a1 === "number" || !Caml_obj.caml_equal(a1, a2)) {
      return /* TOP */1;
    } else {
      return a1;
    }
  }
  
}

function csum(a1, a2) {
  var exit = 0;
  if (typeof a1 === "number") {
    if (a1 !== 0) {
      exit = 1;
    } else {
      return /* BOT */0;
    }
  } else if (typeof a2 === "number") {
    exit = 1;
  } else {
    return /* Int */[a1[0] + a2[0] | 0];
  }
  if (exit === 1) {
    if (typeof a2 === "number" && a2 === 0) {
      return /* BOT */0;
    } else {
      return /* TOP */1;
    }
  }
  
}

function csub(a1, a2) {
  var exit = 0;
  if (typeof a1 === "number") {
    if (a1 !== 0) {
      exit = 1;
    } else {
      return /* BOT */0;
    }
  } else if (typeof a2 === "number") {
    exit = 1;
  } else {
    return /* Int */[a1[0] - a2[0] | 0];
  }
  if (exit === 1) {
    if (typeof a2 === "number" && a2 === 0) {
      return /* BOT */0;
    } else {
      return /* TOP */1;
    }
  }
  
}

function stringofconstant(a) {
  if (typeof a === "number") {
    if (a !== 0) {
      return "T";
    } else {
      return "_|_";
    }
  } else {
    return String(a[0]);
  }
}

function leq(r1, r2) {
  if (cleq(Curry._1(r1, "x"), Curry._1(r2, "x")) && cleq(Curry._1(r1, "y"), Curry._1(r2, "y"))) {
    return cleq(Curry._1(r1, "z"), Curry._1(r2, "z"));
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
  return cjoin(Curry._1(r1, x), Curry._1(r2, x));
}

function initialP(param, x) {
  return /* Int */[0];
}

function evala(a, r) {
  switch (a.tag | 0) {
    case 0 : 
        return /* Int */[a[0]];
    case 1 : 
        var x = a[0];
        if (x === "x" || x === "y" || x === "z") {
          return Curry._1(r, x);
        } else {
          return Pervasives.failwith("AbstractDomainParity : undeclared variable");
        }
    case 2 : 
        return csub(evala(a[0], r), evala(a[1], r));
    case 3 : 
        return csum(evala(a[0], r), evala(a[1], r));
    
  }
}

function assign(x, a, r, y) {
  if (x === y && Curry._1(r, x) !== /* BOT */0) {
    return evala(a, r);
  } else {
    return Curry._1(r, y);
  }
}

function smash(p1, p2, r) {
  var exit = 0;
  if (typeof p1 === "number" && p1 === 0) {
    return (function (param) {
        return /* BOT */0;
      });
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (typeof p2 === "number" && p2 === 0) {
      return (function (param) {
          return /* BOT */0;
        });
    } else {
      return r;
    }
  }
  
}

function test(b, r) {
  switch (b.tag | 0) {
    case 0 : 
        var match = evala(b[0], r);
        var match$1 = evala(b[1], r);
        var exit = 0;
        if (typeof match === "number" && match === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit = 1;
        }
        if (exit === 1) {
          if (typeof match$1 === "number") {
            if (match$1 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match === "number" || Caml_obj.caml_lessthan(match, match$1)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 1 : 
        var match$2 = evala(b[0], r);
        var match$3 = evala(b[1], r);
        var exit$1 = 0;
        var exit$2 = 0;
        if (typeof match$2 === "number" && match$2 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$2 = 2;
        }
        if (exit$2 === 2) {
          if (typeof match$3 === "number" && match$3 === 0) {
            return (function (param) {
                return /* BOT */0;
              });
          } else {
            exit$1 = 1;
          }
        }
        if (exit$1 === 1) {
          if (typeof match$2 === "number") {
            return r;
          } else if (typeof match$3 === "number") {
            return (function (param) {
                return /* BOT */0;
              });
          } else if (Caml_obj.caml_greaterthan(match$2, match$3)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 2 : 
        var match$4 = evala(b[0], r);
        var match$5 = evala(b[1], r);
        var exit$3 = 0;
        if (typeof match$4 === "number" && match$4 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$3 = 1;
        }
        if (exit$3 === 1) {
          if (typeof match$5 === "number") {
            if (match$5 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match$4 === "number" || Caml_obj.caml_equal(match$4, match$5)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 3 : 
        var match$6 = evala(b[0], r);
        var match$7 = evala(b[1], r);
        var exit$4 = 0;
        var exit$5 = 0;
        if (typeof match$6 === "number" && match$6 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$5 = 2;
        }
        if (exit$5 === 2) {
          if (typeof match$7 === "number" && match$7 === 0) {
            return (function (param) {
                return /* BOT */0;
              });
          } else {
            exit$4 = 1;
          }
        }
        if (exit$4 === 1) {
          if (match$6 !== match$7) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 4 : 
        return r;
    
  }
}

function nottest(b, r) {
  switch (b.tag | 0) {
    case 0 : 
        var match = evala(b[0], r);
        var match$1 = evala(b[1], r);
        var exit = 0;
        if (typeof match === "number" && match === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit = 1;
        }
        if (exit === 1) {
          if (typeof match$1 === "number") {
            if (match$1 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match === "number" || !Caml_obj.caml_lessthan(match, match$1)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 1 : 
        var match$2 = evala(b[0], r);
        var match$3 = evala(b[1], r);
        if (typeof match$2 === "number") {
          return (function (param) {
              return /* BOT */0;
            });
        } else if (typeof match$3 === "number" && match$3 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          return r;
        }
    case 2 : 
        var match$4 = evala(b[0], r);
        var match$5 = evala(b[1], r);
        var exit$1 = 0;
        if (typeof match$4 === "number" && match$4 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$1 = 1;
        }
        if (exit$1 === 1) {
          if (typeof match$5 === "number") {
            if (match$5 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match$4 === "number" || !Caml_obj.caml_equal(match$4, match$5)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 3 : 
        var match$6 = evala(b[0], r);
        var match$7 = evala(b[1], r);
        var exit$2 = 0;
        if (typeof match$6 === "number" && match$6 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$2 = 1;
        }
        if (exit$2 === 1) {
          if (typeof match$7 === "number") {
            if (match$7 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match$6 === "number" || match$6 === match$7) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 4 : 
        return r;
    
  }
}

function stringofaP(r, vl) {
  if (vl) {
    var vl$prime = vl[1];
    var v = vl[0];
    if (vl$prime) {
      return v + ("=" + (stringofconstant(Curry._1(r, v)) + ("; " + stringofaP(r, vl$prime))));
    } else {
      return v + ("=" + stringofconstant(Curry._1(r, v)));
    }
  } else {
    return ";";
  }
}

exports.string_abs = string_abs;
exports.cleq = cleq;
exports.cjoin = cjoin;
exports.csum = csum;
exports.csub = csub;
exports.stringofconstant = stringofconstant;
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