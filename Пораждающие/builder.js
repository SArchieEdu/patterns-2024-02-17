const CustomerBuilder = {
  customer: {},

  setMainInfo(name) {
    this.customer.name = name;
    return this;
  },
  setAddressInfo() {
    return this;
  },
  setDocumentInfo() {
    return this;
  },
  setBankInfo() {
    return this;
  },

  getCustomer() {
    const result = this.customer;
    this.customer = {};

    return result;
  },
};
