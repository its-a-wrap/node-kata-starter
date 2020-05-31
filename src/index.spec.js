const { expect } = require('chai');
const mainFunction = require('./index');

describe('Test', () => {
  const output = mainFunction();

  it('SHOULD equal ten', () => {
    expect(output).to.be.eql(10);
  })
})
