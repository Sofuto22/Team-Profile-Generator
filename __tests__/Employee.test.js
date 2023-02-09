const employee = require('../lib/Employee')

it("returns employee name", () => {
    const Matthew = new employee('Matthew');
    expect(Matthew.name).toEqual('Matthew');
})

it("returns employee id", () => {
    const Matthew = new employee('Matthew', 1);
    expect(Matthew.id).toEqual(1);
})

it("returns employee email", () => {
    const Matthew = new employee("Matthew",1, "matthewdep@gmail.com")
    expect(Matthew.email).toEqual("matthewdep@gmail.com")
})