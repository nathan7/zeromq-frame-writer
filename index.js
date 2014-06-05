'use strict';
exports = module.exports = writeFrames

function writeFrames(msgs, write, cb) {
  for (var i = 0, len = msgs.length; i < (len - 1); i++)
    writeFrame(msgs[i], false, write)
  return writeFrame(msgs[i], true, write, cb)
}

exports.single = writeFrame
function writeFrame(message, last, write, cb) {
  last = !!last
  var buf = Buffer.isBuffer(message)
      ? message
      : new Buffer(message)
    , len = buf.length
    , long = len > 0x100
    , header

  if (long) {
    header = new Buffer(1 + 8)
    header.writeUInt32BE(0  , 1 + 0)
    header.writeUInt32BE(len, 1 + 4)
  }
  else {
    header = new Buffer(1 + 1)
    header.writeUInt8(len, 1)
  }

  header[0] = (last << 0) | (long << 1)

  write(header)
  return write(buf, cb)
}
