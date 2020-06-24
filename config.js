const clientPresence = require('discord-rich-presence')('APPLICATION ID HERE');
 
clientPresence.updatePresence({
  state: 'Reversatile',
  details: '',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 420,
  largeImageKey: '',
  largeImageText: '',
  smallImageKey: '',
  smallImageText: '',
  instance: true,
});