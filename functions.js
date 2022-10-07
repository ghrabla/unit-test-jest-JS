const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'kamal' };
    user['lastName'] = 'ghrabla';
    return user;
  },
  // fake online rest pai for test
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};

module.exports = functions;


// jest expect methods link https://jest-bot.github.io/jest/docs/expect.html