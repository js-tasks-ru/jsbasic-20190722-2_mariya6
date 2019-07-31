import { isNull, isNumber } from "util";

/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
  function pow(m, n) {
      if (!isNaN(m) && !isNaN(n)) {
        if( n != 1) {
            return m * pow(m, n-1);
            } else {
                return m;
            }
        } else alert ("Ошибка! Вводимые числа должны быть натуральные!");
    }
