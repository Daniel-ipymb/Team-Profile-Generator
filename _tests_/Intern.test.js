const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the school", () => {
      const school = "uoft"
      const intern = new Intern("Daniel", 1, "daniel@me.com", school)
      expect(intern.getSchool()).toEqual(school)
    })
  })

  describe("getRole", () => {
    it("Should return 'intern'", () => {
      const role = "Intern"
      const employee = new Intern("Daniel", 1, "daniel@me.com", "uoft")
      expect(employee.getRole()).toEqual(role)
    })
  })
  
})