
import {expect} from 'chai';

import {dirname} from '../index';

describe('path', function(){
  // Tests inspired by
  // https://github.com/joyent/node/blob/v0.12.0/test/simple/test-path.js

  describe('dirname', function(){
    it('should return the directory name of a path', function(){
      expect(dirname('/a/b/')).to.be.equal('/a');
      expect(dirname('/a/b')).to.be.equal('/a');
      expect(dirname('/a')).to.be.equal('/');
      expect(dirname('')).to.be.equal('.');
      expect(dirname()).to.be.equal('.');
      expect(dirname('/')).to.be.equal('/');
      expect(dirname('////')).to.be.equal('/');
    });
  });

});
