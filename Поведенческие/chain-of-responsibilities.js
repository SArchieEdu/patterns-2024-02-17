const Middleware = {
  next,
  handle() {
    if ((new Date().getDay = 12)) {
      this.next.handle();
    }
  },
  setNext(next) {
    this.next = next;
    return next;
  },
};
const Middleware2 = {
  next,
  handle() {
    if (checkUser()) {
      this.next.handle();
    }
  },
  setNext(next) {
    this.next = next;
    return next;
  },
};
const Middleware3 = {
  next,
  handle() {
    console.log("log");
    this.next.handle();
  },
  setNext(next) {
    this.next = next;
    return next;
  },
};
const Middleware4 = {
  next,
  handle() {
    this.next.handle({
      info: "",
    });
  },
  setNext(next) {
    this.next = next;
    return next;
  },
};

Middleware.next(Middleware2).next(Middleware3).next(Middleware4);

Middleware.handle();
