// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Dnd__Style from "./Dnd__Style.bs.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";

function getDirection(was, is) {
  if (was > is) {
    return /* Alpha */0;
  } else if (was < is) {
    return /* Omega */1;
  } else {
    return ;
  }
}

function getDimensions(rect) {
  return {
          width: rect.width,
          height: rect.height
        };
}

function getMargins(style) {
  return {
          top: Dnd__Style.stripPx(style.marginTop),
          bottom: Dnd__Style.stripPx(style.marginBottom),
          left: Dnd__Style.stripPx(style.marginLeft),
          right: Dnd__Style.stripPx(style.marginRight)
        };
}

function getPaddings(style) {
  return {
          top: Dnd__Style.stripPx(style.paddingTop),
          bottom: Dnd__Style.stripPx(style.paddingBottom),
          left: Dnd__Style.stripPx(style.paddingLeft),
          right: Dnd__Style.stripPx(style.paddingRight)
        };
}

function getBorders(style) {
  return {
          top: Dnd__Style.stripPx(style.borderTopWidth),
          bottom: Dnd__Style.stripPx(style.borderBottomWidth),
          left: Dnd__Style.stripPx(style.borderLeftWidth),
          right: Dnd__Style.stripPx(style.borderRightWidth)
        };
}

function getPageRect(rect, scroll) {
  return {
          top: rect.top + scroll.y,
          bottom: rect.bottom + scroll.y,
          left: rect.left + scroll.x,
          right: rect.right + scroll.x
        };
}

function getViewportRect(rect) {
  return {
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right
        };
}

function getPageRectFromViewportRect(viewport, scroll) {
  return {
          top: viewport.top + scroll.y,
          bottom: viewport.bottom + scroll.y,
          left: viewport.left + scroll.x,
          right: viewport.right + scroll.x
        };
}

function getGeometry(rect, style, scroll) {
  return {
          rect: {
            page: getPageRect(rect, scroll),
            viewport: getViewportRect(rect)
          },
          dimensions: getDimensions(rect),
          margins: getMargins(style),
          borders: getBorders(style),
          paddings: getPaddings(style)
        };
}

function getElementGeometry(el) {
  var partial_arg = window.getComputedStyle(el);
  var partial_arg$1 = el.getBoundingClientRect();
  return function (param) {
    return getGeometry(partial_arg$1, partial_arg, param);
  };
}

function getViewport(param) {
  var element = document.documentElement;
  return {
          width: element.clientWidth,
          height: element.clientHeight
        };
}

function getElementCenterRelToViewport(rect) {
  var top = rect.top;
  var bottom = rect.bottom;
  var left = rect.left;
  var right = rect.right;
  return {
          x: left + (right - left) / 2,
          y: top + (bottom - top) / 2
        };
}

function getElementCenterRelToPage(rect, scroll) {
  var top = scroll.y + rect.top;
  var bottom = scroll.y + rect.bottom;
  var left = scroll.x + rect.left;
  var right = scroll.x + rect.right;
  return {
          x: left + (right - left) / 2,
          y: top + (bottom - top) / 2
        };
}

function shiftRects(rect, delta) {
  return {
          page: {
            top: rect.page.top - delta.y,
            bottom: rect.page.bottom - delta.y,
            left: rect.page.left - delta.x,
            right: rect.page.right - delta.x
          },
          viewport: {
            top: rect.viewport.top - delta.y,
            bottom: rect.viewport.bottom - delta.y,
            left: rect.viewport.left - delta.x,
            right: rect.viewport.right - delta.x
          }
        };
}

function shiftViewportRect(rect, delta) {
  return {
          page: rect.page,
          viewport: {
            top: rect.viewport.top - delta.y,
            bottom: rect.viewport.bottom - delta.y,
            left: rect.viewport.left - delta.x,
            right: rect.viewport.right - delta.x
          }
        };
}

function shiftInternalSibling(axis, ghost, item, scroll, scrollable, shift) {
  if (axis) {
    var scrollableDeltaY = Belt_Option.getWithDefault(Belt_Option.map(scrollable, (function (scrollable) {
                return scrollable.scroll.delta.y;
              })), 0);
    var deltaY = shift !== undefined ? (
        shift ? scroll.delta.y + scrollableDeltaY - ghost.height - item.margins.top - item.margins.bottom : scroll.delta.y + scrollableDeltaY + ghost.height + item.margins.top + item.margins.bottom
      ) : scroll.delta.y + scrollableDeltaY;
    var init = item.rect.viewport;
    var viewport_top = item.rect.viewport.top - deltaY;
    var viewport_bottom = item.rect.viewport.bottom - deltaY;
    var viewport_left = init.left;
    var viewport_right = init.right;
    var viewport = {
      top: viewport_top,
      bottom: viewport_bottom,
      left: viewport_left,
      right: viewport_right
    };
    var page = getPageRectFromViewportRect(viewport, scroll.current);
    return {
            page: page,
            viewport: viewport
          };
  }
  var scrollableDeltaX = Belt_Option.getWithDefault(Belt_Option.map(scrollable, (function (scrollable) {
              return scrollable.scroll.delta.x;
            })), 0);
  var deltaX = shift !== undefined ? (
      shift ? scroll.delta.x + scrollableDeltaX - ghost.width - item.margins.left - item.margins.right : scroll.delta.x + scrollableDeltaX + ghost.width + item.margins.left + item.margins.right
    ) : scroll.delta.x + scrollableDeltaX;
  var init$1 = item.rect.viewport;
  var viewport_top$1 = init$1.top;
  var viewport_bottom$1 = init$1.bottom;
  var viewport_left$1 = item.rect.viewport.left - deltaX;
  var viewport_right$1 = item.rect.viewport.right - deltaX;
  var viewport$1 = {
    top: viewport_top$1,
    bottom: viewport_bottom$1,
    left: viewport_left$1,
    right: viewport_right$1
  };
  var page$1 = getPageRectFromViewportRect(viewport$1, scroll.current);
  return {
          page: page$1,
          viewport: viewport$1
        };
}

function shiftExternalSibling(axis, ghost, item, scroll, scrollable, shift) {
  if (axis) {
    var scrollableDeltaY = Belt_Option.getWithDefault(Belt_Option.map(scrollable, (function (scrollable) {
                return scrollable.scroll.delta.y;
              })), 0);
    var deltaY = shift !== undefined && shift ? scroll.delta.y + scrollableDeltaY - ghost.height - item.margins.top - item.margins.bottom : scroll.delta.y + scrollableDeltaY;
    var init = item.rect.viewport;
    var viewport_top = item.rect.viewport.top - deltaY;
    var viewport_bottom = item.rect.viewport.bottom - deltaY;
    var viewport_left = init.left;
    var viewport_right = init.right;
    var viewport = {
      top: viewport_top,
      bottom: viewport_bottom,
      left: viewport_left,
      right: viewport_right
    };
    var page = getPageRectFromViewportRect(viewport, scroll.current);
    return {
            page: page,
            viewport: viewport
          };
  }
  var scrollableDeltaX = Belt_Option.getWithDefault(Belt_Option.map(scrollable, (function (scrollable) {
              return scrollable.scroll.delta.x;
            })), 0);
  var deltaX = shift !== undefined && shift ? scroll.delta.x + scrollableDeltaX - ghost.width - item.margins.left - item.margins.right : scroll.delta.x + scrollableDeltaX;
  var init$1 = item.rect.viewport;
  var viewport_top$1 = init$1.top;
  var viewport_bottom$1 = init$1.bottom;
  var viewport_left$1 = item.rect.viewport.left - deltaX;
  var viewport_right$1 = item.rect.viewport.right - deltaX;
  var viewport$1 = {
    top: viewport_top$1,
    bottom: viewport_bottom$1,
    left: viewport_left$1,
    right: viewport_right$1
  };
  var page$1 = getPageRectFromViewportRect(viewport$1, scroll.current);
  return {
          page: page$1,
          viewport: viewport$1
        };
}

function isWithin(point, rect) {
  if (point.x >= rect.left && point.x <= rect.right && point.y >= rect.top) {
    return point.y <= rect.bottom;
  } else {
    return false;
  }
}

function isWithinWithOffset(point, rect, offset) {
  if (point.x >= rect.left - offset.left && point.x <= rect.right + offset.right && point.y >= rect.top - offset.top) {
    return point.y <= rect.bottom + offset.bottom;
  } else {
    return false;
  }
}

function contains(parent, child) {
  if (child.top > parent.top && child.bottom < parent.bottom && child.left > parent.left) {
    return child.right < parent.right;
  } else {
    return false;
  }
}

function isAfore(subject, comparand, axis) {
  if (axis) {
    var subjectHeight = subject.bottom - subject.top;
    var comparandHeight = comparand.bottom - comparand.top;
    var subjectCenter = subject.top + subjectHeight / 2;
    var comparandCenter = comparand.top + comparandHeight / 2;
    return subjectCenter < comparandCenter;
  }
  var subjectWidth = subject.right - subject.left;
  var comparandWidth = comparand.right - comparand.left;
  var subjectCenter$1 = subject.left + subjectWidth / 2;
  var comparandCenter$1 = comparand.left + comparandWidth / 2;
  return subjectCenter$1 < comparandCenter$1;
}

function isAforeAdjusted(subject, comparand, axis, direction) {
  if (axis) {
    var subjectHeight = subject.bottom - subject.top;
    var comparandHeight = comparand.bottom - comparand.top;
    var subjectCenter = subject.top + subjectHeight / 2;
    var comparandCenter = comparand.top + comparandHeight / 2;
    var height = subjectHeight < comparandHeight ? subjectHeight : comparandHeight;
    var directionFactor = height * 0.55;
    if (direction !== undefined) {
      if (direction) {
        return subjectCenter + directionFactor < comparandCenter;
      } else {
        return subjectCenter - directionFactor < comparandCenter;
      }
    } else {
      return subjectCenter < comparandCenter;
    }
  }
  var subjectWidth = subject.right - subject.left;
  var comparandWidth = comparand.right - comparand.left;
  var subjectCenter$1 = subject.left + subjectWidth / 2;
  var comparandCenter$1 = comparand.left + comparandWidth / 2;
  var width = subjectWidth < comparandWidth ? subjectWidth : comparandWidth;
  var directionFactor$1 = width * 0.55;
  if (direction !== undefined) {
    if (direction) {
      return subjectCenter$1 + directionFactor$1 < comparandCenter$1;
    } else {
      return subjectCenter$1 - directionFactor$1 < comparandCenter$1;
    }
  } else {
    return subjectCenter$1 < comparandCenter$1;
  }
}

var Style;

var Web;

export {
  Style ,
  Web ,
  getDirection ,
  getDimensions ,
  getMargins ,
  getPaddings ,
  getBorders ,
  getPageRect ,
  getViewportRect ,
  getPageRectFromViewportRect ,
  getGeometry ,
  getElementGeometry ,
  getViewport ,
  getElementCenterRelToViewport ,
  getElementCenterRelToPage ,
  shiftRects ,
  shiftViewportRect ,
  shiftInternalSibling ,
  shiftExternalSibling ,
  isWithin ,
  isWithinWithOffset ,
  contains ,
  isAfore ,
  isAforeAdjusted ,
}
/* No side effect */