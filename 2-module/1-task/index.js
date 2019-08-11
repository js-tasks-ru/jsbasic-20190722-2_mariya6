/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  const cloned = {};
  for (const key in obj) {
    cloned[key] = obj[key];
  }
  return cloned;
}
