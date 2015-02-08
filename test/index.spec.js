
import {expect} from 'chai';
import _path from 'path';

import * as path from '../index';

describe('path', function(){
  // Tests inspired by
  // https://github.com/joyent/node/blob/v0.12.0/test/simple/test-path.js

  describe('dirname', function(){
    it('should return the directory name of a path', function(){
      expect(path.dirname('/a/b/')).to.be.equal('/a');
      expect(path.dirname('/a/b')).to.be.equal('/a');
      expect(path.dirname('/a')).to.be.equal('/');
      expect(path.dirname('')).to.be.equal('.');
      expect(path.dirname()).to.be.equal('.');
      expect(path.dirname('/')).to.be.equal('/');
      expect(path.dirname('////')).to.be.equal('/');
    });
  });

});
