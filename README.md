# WattFire Training Planner

A cycling and running training planner for any event. A rider enters their details (age, experience, weekly hours, riding days, optional FTP and heart rate) and their event (type, date, expected finish time, elevation). The app builds a periodized plan: base, build, peak and taper.

## Features
- **Running:** 5K to marathon and trail plans with pace targets from a recent race time, gradual mileage build, hill/threshold/interval sessions, race-pace long runs, and a 2–3 week marathon taper. Seasons can mix running and cycling races.
- **Race schedule:** several events per season, each marked A (peak and taper), B (short taper) or C (training race)
- **Seasons:** schedule changes with a start date, so hours, riding days and indoor/outdoor riding can change through the year
- **Check-ins:** every two weeks the app asks how training feels, missed time, illness, new FTP and schedule changes, and adjusts the plan from the next Monday
- **Today:** the day's workout with power, heart rate and effort targets, an interval chart, and step-by-step instructions
- **Plan:** phase timeline, personal training zones, event-specific advice, and every week of the plan
- **Downloads:** the full plan as a PDF, a calendar file for Google Calendar, and structured workout files for Zwift (.zwo) and Wahoo ELEMNT (.fit), per day or per week, with an in-app guide to loading them
- **Gym:** strength exercises with gym and home versions, form cues, and GCN / GTN video links
- **Skills:** bike fit, pedaling, climbing, descending, trail skills, fueling, altitude, pacing, recovery
- **Science:** the research and coaching sources behind each rule in the plan generator

## Running it
It's a single static page: open `index.html` in a browser, or serve the folder with GitHub Pages.
Rider data is stored in the browser (localStorage). "Save my details" exports it as a JSON file.

## Disclaimer
General training guidance, not medical advice. Check with a doctor before starting a new training program.

## Adding videos
All embedded videos live in [`videos.js`](videos.js). To add one:
1. Open `videos.js` on GitHub and click the pencil (Edit) icon.
2. Find the spot (e.g. `ex:squat` for the squat exercise, `skill:climbing` for the climbing guide).
3. Paste a YouTube link between the quotes after `url:`, and optionally fill in `title` and `channel`.
4. Click **Commit changes**. The live site updates in a minute or two.

Videos show as a thumbnail and play inside the app when tapped (using YouTube's privacy-enhanced mode).
