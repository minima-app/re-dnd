// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";

var MissingContext = /* @__PURE__ */Caml_exceptions.create("Dnd__DndContext.MissingContext");

function fail(param) {
  throw {
        RE_EXN_ID: MissingContext,
        Error: new Error()
      };
}

var T = {};

function Make(Item, Container) {
  var x = React.createContext({
        status: /* StandBy */0,
        target: undefined,
        scroll: undefined,
        registerItem: fail,
        registerContainer: fail,
        disposeItem: fail,
        disposeContainer: fail,
        getItemShift: fail,
        startDragging: fail
      });
  var make = x.Provider;
  var Provider = {
    make: make
  };
  var useDnd = function (param) {
    return React.useContext(x);
  };
  return {
          Item: Item,
          Container: Container,
          x: x,
          Provider: Provider,
          useDnd: useDnd
        };
}

export {
  MissingContext ,
  fail ,
  T ,
  Make ,
}
/* react Not a pure module */