import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildQrSvgMarkup } from './logic-helpers.mjs';

test('buildQrSvgMarkup renders one rect per dark module', () => {
  const fakeQr = {
    getModuleCount: () => 2,
    isDark: (r, c) => r === 0 && c === 0
  };
  const svg = buildQrSvgMarkup(fakeQr, 10, '#000000', '#ffffff');
  assert.match(svg, /<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" viewBox="0 0 20 20" width="20" height="20">/);
  assert.equal((svg.match(/<rect/g) || []).length, 2); // 1 background rect + 1 dark module
  assert.match(svg, /x="0" y="0" width="10" height="10" fill="#000000"/);
});
