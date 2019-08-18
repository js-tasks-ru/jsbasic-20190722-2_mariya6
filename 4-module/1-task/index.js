/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let html = '';
  friends.forEach((el) => {
    html += '<li>';
    html += el.firstName;
    html += ' ';
    html += el.lastName;
    html += '</li>';
  });

  const ul = document.createElement('ul');
  ul.innerHTML = html;

  // document.getElementById('friends').innerHTML = html;
  return ul;
}
