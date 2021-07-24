const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
  describe("getGihub", () => {
    it("Should return the set github link ", () => {
      const githubLink = "https://github.com/Daniel-ipymb"
      const engineer = new Engineer("Daniel", 1, "daniel@me.com", githubLink)
      expect(engineer.getGithub()).toEqual(githubLink)
    })
  })

  describe("getRole", () => {
		it(" Should return 'Engineer' ", () => {
			const role = "Engineer";
			const employee = new Engineer("Daniel", 1, "daniel@me.com", "https://github.com/Daniel-ipymb");
			expect(employee.getRole()).toEqual(role);
		});
	});
})