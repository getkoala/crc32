const CRC32_TABLE = (function() {
  let c;
  let crcTable = [];
  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crcTable[n] = c;
  }
  return crcTable;
})();


export function crc32(string) {
  const bytes = bytesFor(string);
  let crc = 0;
  let n = 0;
  crc = crc ^ -1;

  let i = 0;
  const iTop = bytes.length;

  while (i < iTop) {
    n = (crc ^ bytes[i]) & 0xff;
    crc = (crc >>> 8) ^ CRC32_TABLE[n];
    i++;
  }

  crc = crc ^ -1;
  if (crc < 0) {
    crc += 4294967296;
  }

  return crc;
};

function bytesFor(string) {
  const bytes = [];
  let i = 0;

  while (i < string.length) {
    bytes.push(string.charCodeAt(i));
    ++i;
  }
  return bytes;
};