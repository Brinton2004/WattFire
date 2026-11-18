/*
  WattFire videos
  ===============
  Paste a YouTube link into any "url" below and it appears as a video player
  in the app. Leave "url" empty ('') to show nothing.

  Links can be any YouTube form:
    https://www.youtube.com/watch?v=VIDEO_ID
    https://youtu.be/VIDEO_ID?t=95        <- starts at 1:35
    https://www.youtube.com/shorts/VIDEO_ID

  To show more than one video in the same spot, copy a line and give it the
  same "for" value. Keep the commas at the ends of lines.

  "for" values:
    gym:intro               top of the Gym page
    ex:squat ex:rdl ex:split ex:stepup ex:hipthrust ex:calf ex:pushup ex:row
    ex:pulldown ex:plank ex:sideplank ex:deadbug ex:pallof ex:jump
    mobility                post-ride mobility section
    skill:fit skill:pedaling skill:climbing skill:descending skill:trail
    skill:fueling skill:altitude skill:pacing skill:recovery
    ride:endurance ride:long ride:tempo ride:sweetspot ride:threshold ride:vo2
    ride:climbs ride:anaerobic ride:sprints ride:skills ride:racesim
*/
window.WATTFIRE_VIDEOS = [
  // Found by web search; titles match GCN/GTN videos. Check each one plays the right video.
  { for: 'gym:intro', channel: 'GCN', title: '6 Beginner Strength Training Exercises For Cyclists', url: 'https://www.youtube.com/watch?v=ymuQtR_-Loc' },
  { for: 'gym:intro', channel: 'GTN', title: '4 Exercises To Increase Your Power On The Bike', url: 'https://www.youtube.com/watch?v=rBf0zsPE2Ok' },
  { for: 'gym:intro', channel: 'GTN', title: 'How Important Is Gym Work For Triathletes?', url: 'https://www.youtube.com/watch?v=7LE9gvC56fQ' },

  // Strength exercises
  { for: 'ex:squat',      channel: '', title: '', url: '' },
  { for: 'ex:rdl',        channel: '', title: '', url: '' },
  { for: 'ex:split',      channel: '', title: '', url: '' },
  { for: 'ex:stepup',     channel: '', title: '', url: '' },
  { for: 'ex:hipthrust',  channel: '', title: '', url: '' },
  { for: 'ex:calf',       channel: '', title: '', url: '' },
  { for: 'ex:pushup',     channel: '', title: '', url: '' },
  { for: 'ex:row',        channel: '', title: '', url: '' },
  { for: 'ex:pulldown',   channel: '', title: '', url: '' },
  { for: 'ex:plank',      channel: '', title: '', url: '' },
  { for: 'ex:sideplank',  channel: '', title: '', url: '' },
  { for: 'ex:deadbug',    channel: '', title: '', url: '' },
  { for: 'ex:pallof',     channel: '', title: '', url: '' },
  { for: 'ex:jump',       channel: '', title: '', url: '' },
  { for: 'mobility',      channel: '', title: '', url: '' },

  // Skills tab
  { for: 'skill:fit',        channel: '', title: '', url: '' },
  { for: 'skill:pedaling',   channel: '', title: '', url: '' },
  { for: 'skill:climbing',   channel: '', title: '', url: '' },
  { for: 'skill:descending', channel: '', title: '', url: '' },
  { for: 'skill:trail',      channel: '', title: '', url: '' },
  { for: 'skill:fueling',    channel: '', title: '', url: '' },
  { for: 'skill:altitude',   channel: '', title: '', url: '' },
  { for: 'skill:pacing',     channel: '', title: '', url: '' },
  { for: 'skill:recovery',   channel: '', title: '', url: '' },

  // Shown on that day's ride workout
  { for: 'ride:vo2',       channel: '', title: '', url: '' },
  { for: 'ride:threshold', channel: '', title: '', url: '' },
  { for: 'ride:sweetspot', channel: '', title: '', url: '' },
  { for: 'ride:long',      channel: '', title: '', url: '' },
  { for: 'ride:skills',    channel: '', title: '', url: '' },
];
