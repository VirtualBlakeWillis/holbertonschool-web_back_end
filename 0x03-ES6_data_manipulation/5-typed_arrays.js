export default function createInt8TypedArray(length, position, value) {
  if (postion >= length - 1) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;
  return new DataView(buffer);
}
