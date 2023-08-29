// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cx from "rescript-classnames/src/Cx.bs.js";
import * as Dnd from "../../src/Dnd.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Control from "../components/Control.bs.js";
import * as ArrayExt from "../libs/ArrayExt.bs.js";
import * as Belt_Map from "rescript/lib/es6/belt_Map.js";
import * as Identity from "../libs/Identity.bs.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as DragHandleIcon from "../icons/DragHandleIcon.bs.js";
import * as JsxPPXReactSupport from "rescript/lib/es6/jsxPPXReactSupport.js";

var TodoId = Identity.Make({});

var TodoListId = Identity.Make({});

var Todo = {};

var TodoList = {};

var Item_eq = TodoId.eq;

var Item_cmp = TodoId.cmp;

var Item = {
  eq: Item_eq,
  cmp: Item_cmp
};

var Container_eq = TodoListId.eq;

var Container_cmp = TodoListId.cmp;

var Container = {
  eq: Container_eq,
  cmp: Container_cmp
};

var include = Dnd.Make(Item, Container);

var DndManager = include.DndManager;

var DraggableItem = include.DraggableItem;

var DroppableContainer = include.DroppableContainer;

var Todos_DndContext = include.DndContext;

var Todos = {
  Item: Item,
  Container: Container,
  DndContext: Todos_DndContext,
  DndManager: DndManager,
  DraggableItem: DraggableItem,
  DroppableContainer: DroppableContainer
};

var Item_eq$1 = TodoListId.eq;

var Item_cmp$1 = TodoListId.cmp;

var Item$1 = {
  eq: Item_eq$1,
  cmp: Item_cmp$1
};

var Container$1 = Dnd.MakeSingletonContainer({});

var include$1 = Dnd.Make(Item$1, Container$1);

var DndManager$1 = include$1.DndManager;

var DraggableItem$1 = include$1.DraggableItem;

var DroppableContainer$1 = include$1.DroppableContainer;

var TodoLists_DndContext = include$1.DndContext;

var TodoLists = {
  Item: Item$1,
  Container: Container$1,
  DndContext: TodoLists_DndContext,
  DndManager: DndManager$1,
  DraggableItem: DraggableItem$1,
  DroppableContainer: DroppableContainer$1
};

function reducer(state, action) {
  if (action.TAG === /* ReorderTodos */0) {
    var match = action._0;
    if (match === undefined) {
      return state;
    }
    if (match.TAG === /* SameContainer */0) {
      var placement = match._1;
      var todoId = match._0;
      var todo = Belt_Map.getExn(state.todosMap, todoId);
      return {
              todosMap: state.todosMap,
              todoListsMap: Belt_Map.update(state.todoListsMap, todo.todoListId, (function (x) {
                      return Belt_Option.map(x, (function (list) {
                                    return {
                                            id: list.id,
                                            title: list.title,
                                            todos: ArrayExt.reinsert(list.todos, todoId, placement ? ({
                                                      NAME: "Before",
                                                      VAL: placement._0
                                                    }) : "Last")
                                          };
                                  }));
                    })),
              todoListsIndex: state.todoListsIndex
            };
    }
    var placement$1 = match._2;
    var todoListId = match._1;
    var todoId$1 = match._0;
    var todo$1 = Belt_Map.getExn(state.todosMap, todoId$1);
    return {
            todosMap: Belt_Map.update(state.todosMap, todoId$1, (function (x) {
                    return Belt_Option.map(x, (function (todo) {
                                  return {
                                          id: todo.id,
                                          title: todo.title,
                                          todoListId: todoListId
                                        };
                                }));
                  })),
            todoListsMap: Belt_Map.update(Belt_Map.update(state.todoListsMap, todo$1.todoListId, (function (x) {
                        return Belt_Option.map(x, (function (list) {
                                      return {
                                              id: list.id,
                                              title: list.title,
                                              todos: Belt_Array.keep(list.todos, (function (id) {
                                                      return id !== todoId$1;
                                                    }))
                                            };
                                    }));
                      })), todoListId, (function (x) {
                    return Belt_Option.map(x, (function (list) {
                                  return {
                                          id: list.id,
                                          title: list.title,
                                          todos: ArrayExt.insert(list.todos, todoId$1, placement$1 ? ({
                                                    NAME: "Before",
                                                    VAL: placement$1._0
                                                  }) : "Last")
                                        };
                                }));
                  })),
            todoListsIndex: state.todoListsIndex
          };
  }
  var match$1 = action._0;
  if (match$1 === undefined) {
    return state;
  }
  if (match$1.TAG !== /* SameContainer */0) {
    return state;
  }
  var placement$2 = match$1._1;
  return {
          todosMap: state.todosMap,
          todoListsMap: state.todoListsMap,
          todoListsIndex: ArrayExt.reinsert(state.todoListsIndex, match$1._0, placement$2 ? ({
                    NAME: "Before",
                    VAL: placement$2._0
                  }) : "Last")
        };
}

function CardBoard(props) {
  var initialState = React.useMemo((function () {
          return {
                  todosMap: Belt_Array.reduce(Belt_Array.range(1, 40), Curry._1(TodoId.$$Map.make, undefined), (function (map, id) {
                          return Belt_Map.set(map, id, {
                                      id: id,
                                      title: "Todo " + Curry._1(TodoId.toString, id),
                                      todoListId: id >= 1 && id <= 4 ? 1 : (
                                          id >= 5 && id <= 11 ? 2 : (
                                              id >= 12 && id <= 14 ? 3 : (
                                                  id >= 15 && id <= 23 ? 4 : (
                                                      id >= 24 && id <= 28 ? 5 : (
                                                          id >= 29 && id <= 35 ? 6 : 7
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    });
                        })),
                  todoListsMap: Belt_Map.set(Belt_Map.set(Belt_Map.set(Belt_Map.set(Belt_Map.set(Belt_Map.set(Belt_Map.set(Curry._1(TodoListId.$$Map.make, undefined), 1, {
                                                id: 1,
                                                title: "List #1",
                                                todos: Belt_Array.range(1, 4)
                                              }), 2, {
                                            id: 2,
                                            title: "List #2",
                                            todos: Belt_Array.range(5, 11)
                                          }), 3, {
                                        id: 3,
                                        title: "List #3",
                                        todos: Belt_Array.range(12, 14)
                                      }), 4, {
                                    id: 4,
                                    title: "List #4",
                                    todos: Belt_Array.range(15, 23)
                                  }), 5, {
                                id: 5,
                                title: "List #5",
                                todos: Belt_Array.range(24, 28)
                              }), 6, {
                            id: 6,
                            title: "List #6",
                            todos: Belt_Array.range(29, 35)
                          }), 7, {
                        id: 7,
                        title: "List #7",
                        todos: Belt_Array.range(36, 40)
                      }),
                  todoListsIndex: Belt_Array.range(1, 7)
                };
        }), []);
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var state = match[0];
  return React.createElement(DndManager$1.make, {
              onReorder: (function (result) {
                  Curry._1(dispatch, {
                        TAG: /* ReorderTodoLists */1,
                        _0: result
                      });
                }),
              children: React.createElement(DndManager.make, {
                    onReorder: (function (result) {
                        Curry._1(dispatch, {
                              TAG: /* ReorderTodos */0,
                              _0: result
                            });
                      }),
                    children: React.createElement(DroppableContainer$1.make, {
                          axis: /* X */0,
                          className: (function (param) {
                              return "todo-lists";
                            }),
                          children: Belt_Array.mapWithIndex(state.todoListsIndex, (function (todoListIndex, todoListId) {
                                  var todoList = Belt_Map.getExn(state.todoListsMap, todoListId);
                                  return JsxPPXReactSupport.createElementWithKey(Curry._1(TodoListId.toString, todoListId), DraggableItem$1.make, {
                                              id: todoListId,
                                              index: todoListIndex,
                                              className: (function (dragging) {
                                                  return Cx.cx([
                                                              "todo-list",
                                                              dragging ? "dragging" : ""
                                                            ]);
                                                }),
                                              children: {
                                                NAME: "ChildrenWithDragHandle",
                                                VAL: (function (style, onMouseDown, onTouchStart) {
                                                    return JsxPPXReactSupport.createElementVariadicWithKey(Curry._1(TodoListId.toString, todoListId), DroppableContainer.make, {
                                                                id: todoListId,
                                                                axis: /* Y */1,
                                                                className: (function (draggingOver) {
                                                                    return Cx.cx([
                                                                                "todos",
                                                                                draggingOver ? "active" : ""
                                                                              ]);
                                                                  }),
                                                                children: null
                                                              }, [
                                                                React.createElement("div", {
                                                                      className: "todos-header"
                                                                    }, React.createElement(Control.make, {
                                                                          className: "drag-handle",
                                                                          style: style,
                                                                          onMouseDown: onMouseDown,
                                                                          onTouchStart: onTouchStart,
                                                                          children: React.createElement(DragHandleIcon.make, {})
                                                                        }), React.createElement("div", {
                                                                          className: "title"
                                                                        }, todoList.title)),
                                                                Belt_Array.mapWithIndex(todoList.todos, (function (todoIndex, todoId) {
                                                                        var todo = Belt_Map.getExn(state.todosMap, todoId);
                                                                        return JsxPPXReactSupport.createElementWithKey(Curry._1(TodoId.toString, todoId), DraggableItem.make, {
                                                                                    id: todoId,
                                                                                    containerId: todoListId,
                                                                                    index: todoIndex,
                                                                                    className: (function (dragging) {
                                                                                        return Cx.cx([
                                                                                                    "todo",
                                                                                                    dragging ? "dragging" : ""
                                                                                                  ]);
                                                                                      }),
                                                                                    children: {
                                                                                      NAME: "Children",
                                                                                      VAL: todo.title
                                                                                    }
                                                                                  });
                                                                      }))
                                                              ]);
                                                  })
                                              }
                                            });
                                }))
                        })
                  })
            });
}

var make = CardBoard;

export {
  TodoId ,
  TodoListId ,
  Todo ,
  TodoList ,
  Todos ,
  TodoLists ,
  reducer ,
  make ,
}
/* TodoId Not a pure module */
