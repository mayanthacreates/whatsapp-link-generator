export function buildQrSvgMarkup(qrModel, cellPx, inkColor, paperColor) {
  const count = qrModel.getModuleCount();
  const size = count * cellPx;
  let rects = '<rect width="100%" height="100%" fill="' + paperColor + '"/>';
  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (qrModel.isDark(r, c)) {
        rects += '<rect x="' + (c * cellPx) + '" y="' + (r * cellPx) + '" width="' + cellPx + '" height="' + cellPx + '" fill="' + inkColor + '"/>';
      }
    }
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '">' + rects + '</svg>';
}

export function buildVcard(name, fullDigits) {
  const fn = name.trim() || 'WhatsApp Contact';
  return 'BEGIN:VCARD\nVERSION:3.0\nFN:' + fn + '\nTEL;TYPE=CELL:+' + fullDigits + '\nEND:VCARD\n';
}
