//
// ItsGoTime puts handlers onto the given emitter for each of the given events
// and collects the arguments for each event. When all events have arguments
// the provided callback is called with all current arguments.
//
module.exports = function(emitter, events, callback) {
  // attach handlers and initialize eventData collection
  let eventData = {};
  // make sure events is an array
  if (Array.isArray(events)) {
    for (let e of events) {
      eventData[e] = null;
      emitter.on(e, (...args) => {
        // save arguments
        eventData[e] = args;

        // see if we have a value for all requested events
        let itsgotime = Object.keys(eventData).reduce((acc, key) => {
          return acc && !!eventData[key];
        }, true);

        // emit with current argument values
        if (itsgotime) {
          callback(eventData);
        }
      });
    }
  }
};
