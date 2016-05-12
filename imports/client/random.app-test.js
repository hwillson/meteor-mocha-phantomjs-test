import { expect } from 'meteor/practicalmeteor:chai';

import { Random } from './random.js';

describe('Full app tests', function () {
  it('should return expected string', function () {
    expect(Random.hello()).to.equal('world!');
  });
});
