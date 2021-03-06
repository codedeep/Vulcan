import { getSetting } from './settings.js';

export const debug = function () {
  if (getSetting('debug', false)) {
    console.log.apply(null, arguments);
  }
}

export const debugGroup = function () {
  if (getSetting('debug', false)) {
    console.groupCollapsed.apply(null, arguments);
  }
}
export const debugGroupEnd = function () {
  if (getSetting('debug', false)) {
    console.groupEnd.apply(null, arguments);
  }
}