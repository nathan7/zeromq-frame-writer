# zeromq-frame-writer

  ZMTP frame writer

## Installation

    npm install zeromq-frame-writer

## API
### writer(frames, function write(buf, cb), cb)

  Writes the given frames out, converting them to buffers if necessary.
  The callback is passed on to the last write. The return value is that of the last write.

### writer.single(frame, last, function write(buf, cb), cb)


  Writes the frame out, converting it a buffer if necessary.
  The callback is passed on to the last write. The return value is that of the last write.

