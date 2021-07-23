const Employee = require("./Employee");

class Manager extends Employee {
  costructor(name,id,email,officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;