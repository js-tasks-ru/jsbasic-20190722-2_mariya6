/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  const result = data.filter(user => user.age <= age).map(user => {
    return {
      name: user.name,
      balance: user.balance,
    }
  });
  let str = '';
  result.forEach((el, i) => {
    str = str + result[i].name + ' ' + result[i].balance + '\n'
    })
  return result;
}
