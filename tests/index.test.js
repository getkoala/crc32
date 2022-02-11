import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { crc32 } from '../src';

test('hashes the input correctly', function () {
  assert.equal(crc32('foobar'), 2666930069);
  assert.equal(crc32('Magna Pellentesque Egestas Nibh Ultricies'), 1920919084);
  assert.equal(crc32('koala 🐨'), 4005375993);
});

test.run();