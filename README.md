# zeromq-frame-writer

  ZMTP frame writer

## Installation

    npm install zeromq-frame-writer

## API
### writer(messages, function write(buf, cb), cb)

  Writes the given messages out into frames, converting them to buffers if necessary.
  The callback is passed on to the last write. The return value is that of the last write.

### writer.single(message, more, function write(buf, cb), cb)


  Writes the message out into a frame, converting it a buffer if necessary.
  The callback is passed on to the last write. The return value is that of the last write.

