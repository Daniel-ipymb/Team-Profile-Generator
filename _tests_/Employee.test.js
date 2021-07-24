const Employee = require("../lib/Employee");

describe("Employee", () => {
	describe("Initialization", () => {
		it("should return an object containing a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
			const employee = new Employee();

			expect("name" in employee).toEqual(true);
			expect("id" in employee).toEqual(true);
			expect("email" in employee).toEqual(true);
		});
	});
	describe("getName", () => {
		it("Should return a name", () => {
			const name = "Daniel";
			const employee = new Employee(name, 1, "daniel@me.com");
			expect(employee.getName()).toEqual(name);
		});
	});

	describe("getId", () => {
		it("Should return id", () => {
			const id = 1;
			const employee = new Employee("Daniel", id, "daniel@me.com");
			expect(employee.getId()).toEqual(id);
		});
	});

	describe("getEmail", () => {
		it("Should return email", () => {
			const email = "daniel@me.com";
			const employee = new Employee("Daniel", 1, email);
			expect(employee.getEmail()).toEqual(email);
		});
	});

	describe("getRole", () => {
		it("Should return role", () => {
			const role = "Employee";
			const employee = new Employee("Daniel", 1, "daniel@me.com");
			expect(employee.getRole()).toEqual(role);
		});
	});
});
