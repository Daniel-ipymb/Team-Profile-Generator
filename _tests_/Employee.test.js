const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id and email properties if provided valid arguments", () => {
      const employee = new Employee("Daniel", 1, "daniel@me.com")

      expect(employee.name).toEqual("Daniel");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("daniel@me.com")
    })

    it("should throw an error if no arguments are provided", () => {
      const cb = () => new Child();

      expect(cb).toThrow()
    })

    it("should throw an error if id is not provided", () => {
      const cb = () => new Employee("Daniel", "daniel@me.com")

      // Define the error message that is expected to be thrown
      const err = new Error("parameter 'id' has not been provided");

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 1, "daniel@me.com");
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is not a number", () => {
      const cb = () => new Child("Daniel", "1", "daniel@me.com");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    describe("getName", () => {
      it("Should return a name", () => {
        const name = "Daniel"
        const employee = new Employee(name, 1, "daniel@me.com")
        expect(employee.getName()).toEqual(name)
      });
    })

    describe("getId", () => {
      it("Should return id", () => {
        const id = 1
        const employee = newEmployee("Daniel", id, "daniel@me.com")
        expect(employee.getId()).toEqual(id)
      })
    })

    describe("getEmail", () => {
      it("Should return email", () => {
        const email = 1
        const employee = newEmployee("Daniel", 1, email)
        expect(employee.getEmail()).toEqual(email)
      })
    })

    describe("getRole", () => {
      it("Should return role", () => {
        const role = 'Employee'
        const employee = newEmployee("Daniel", 1, "daniel@me.com")
        expect(employee.getRole()).toEqual(role)
      })
    })
  })
})

