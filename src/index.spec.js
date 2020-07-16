import chai from 'chai';
import { Placeholder } from './index.js';

const { expect } = chai;

describe('some test', () => {
  const placeholder = new Placeholder();
  it('SHOULD do something', () => {
    expect(placeholder.anotherFunction()).to.be.eql(1);
  });
});
