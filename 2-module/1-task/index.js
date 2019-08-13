/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let cloned = {};
  try {
    cloned = JSON.parse(JSON.stringify(obj));
    }
  catch (e) {
    logMyErrors(e);
    }
  return cloned;
//  const cloned = {};
//  for (const key in obj) {
//    cloned[key] = obj[key];
//  }
//  return cloned;
}
