export const UserService = {
  currentUser: null,

  setUser() {},
};

Object.freeze(UserService);

const instanceMap = new Map();

class Singleton {
  constructor(provideIn) {
    if (instanceMap.get(provideIn)) {
      return instanceMap.get(provideIn);
    }

    instanceMap.set(provideIn, this);
  }

  getInstance(provideIn) {
    return instanceMap.get(provideIn);
  }
}
