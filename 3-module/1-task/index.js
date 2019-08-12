/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  const result = data
    .filter(user => user.age <= age)
    .map((user) => {
      const obj = {
        name: user.name,
        balance: user.balance,
      };
      return obj;
    });


  let str = '';
  result.forEach((el, i) => {
    str += result[i].name;
    str += ', ';
    str += result[i].balance;
    str += '\n';
  });
  return result;
}
