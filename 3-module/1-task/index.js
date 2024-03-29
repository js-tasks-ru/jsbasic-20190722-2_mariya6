/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data
    .filter(user => user.age <= age)
    .map(user => user.name.concat(', ', user.balance))
    .join('\n');
}
