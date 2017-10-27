# ItsGoTime

itsgotime is a simple utility to watch a handful of events and trigger a callback with all collected event arguments

It is useful for waiting until all necessary event data is available before starting some processing step. If an event is re-emitted, the callback will be called again with updated event argument values.


## Usage

```js
const itsgotime = require('itsgotime');
const EventEmitter = require('events').EventEmitter;

let ee = new EventEmitter();

itsgotime(ee, ['event1', 'event2'], (data) => {
  // the last arguments emitted for all events are indexed by event name
  let argumentsForEvent1 = data.event1;
  let argumentsForEvent2 = data.event2;

  // .. do something

});

ee.emit('event1', args);
ee.emit('event2', args);


```

## License

ISC