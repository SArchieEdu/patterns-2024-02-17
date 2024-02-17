const UserService = {
  userPermissions,
  getUser() {},
  getUSerPermissions() {},
};

const UserServiceWithCache = {
  userService: UserService,
  user,

  getUser() {
    if (!user) {
      user = this.userService.getUser();
    }

    return this.user;
  },
  getUSerPermissions() {},
};

const userProxy = new Proxy(UserService, {
  get: (obj, property) => {
    obj[property];
  },
  set: (obj, property, value) => {
    obj[property] = value;
  },
});
