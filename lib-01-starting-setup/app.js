const customers = ["max", "manuel", "anna"];
const activeCustomers = ["max", "manuel"];

const inactiveCustomers = _.difference(customers, activeCustomers);
console.log(inactiveCustomers);