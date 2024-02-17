const Person1 = {
  chat,
  sendMessage(message, person) {
    this.chat.sendMessage(message, person);
  },
};

const Person2 = {
  chat,
  sendMessage(message, person) {
    this.chat.sendMessage(message, person);
  },
};

const Person3 = {
  chat,
  sendMessage(message, person) {
    this.chat.sendMessage(message, person);
  },
};

const Chat = {
  person: {
    Person1,
    Person2,
    Person3,
  },
  sendMessage(message) {},
};

const Store = {
  subscribers: new Set(),
  state: {},

  rootReducer: () => {
    // logic
    return {
      //...properties
    };
  },

  subscribe(callback) {
    this.subscribers.add(callback);
  },

  unsubscribe(callback) {
    this.subscribers.delete(callback);
  },

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);

    [...this.subscribers.values].forEach((callback) => callback(this.state));
  },
};
