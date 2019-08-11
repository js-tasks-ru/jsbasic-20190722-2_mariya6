/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const reg = /(-?\d+.?\d+)/gi;
  const arr = str.match(reg);
  arr.forEach((el, i) => {
    arr[i] = parseFloat(el);
  });

  const obj = {
    min: Math.min.apply(null, arr),
    max: Math.max(null, arr),
  };

  return obj;
}
