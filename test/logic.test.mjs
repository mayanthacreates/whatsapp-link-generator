import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildQrSvgMarkup, buildVcard } from '../public/logic.js';

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

test('buildVcard falls back to a default name when empty', () => {
  const vcf = buildVcard('', '971501234567');
  assert.match(vcf, /BEGIN:VCARD/);
  assert.match(vcf, /FN:WhatsApp Contact/);
  assert.match(vcf, /TEL;TYPE=CELL:\+971501234567/);
  assert.match(vcf, /END:VCARD/);
});

test('buildVcard uses the provided name', () => {
  const vcf = buildVcard('Ali Motors', '971501234567');
  assert.match(vcf, /FN:Ali Motors/);
});
