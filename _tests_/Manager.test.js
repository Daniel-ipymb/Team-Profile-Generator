const { describe, it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
	describe("getOfficeNumber", () => {
		it("Should return the officeNumber", () => {
			const officeNumber = 56;
			const employee = new Manager("Daniel", 1, "daniel@me.com", 56);
			expect(employee.getOfficeNumber()).toEqual(officeNumber);
		});
	});

  describe("getRole", () => {
    it("Should return 'Manager'", () => {
      const role = "Manager";
      const employee = new Manager("Daniel", 1, "daniel@me.com", 56);
      expect(employee.getRole()).toEqual(role)
    })
  })
});
