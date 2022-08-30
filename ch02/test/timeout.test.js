function fetchUser(id, cb) {
  setTimeout(() => {
    const user = {
      id,
      name: 'user' + id,
      email: id + '@test.com',
    };
    cb(user);
  }, 100);
}

it('fetch a user', async () => {
  fetchUser(1, user => {
    expect(user).toStrictEqual({
      id: 1,
      name: 'user1',
      email: '1@test.com',
    });
  });
}, 7000);
