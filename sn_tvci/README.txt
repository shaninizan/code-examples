SN TVCI
Project: Extend Splashify module to accommodate three game time behavior options

Interface development:
- Named project "Live Game Settings"
- Use url input to match Splashify (previous version had a drop down)

What/How/When:
- (PHP / Drupal) Site editor selects one of three live game settings:
  1. Redirect to a TV Companion (application run and supported by the league)
  2. Custom splash page
  3. Ignore live settings
  
- (PHP) Curl game feed to determine if there is a game today and if it is live.
  * Note: a later enhancement was requested to initiate live game settings based on the start time, not (only) the game status
  
- (PHP) If it's a live game, create a javascript object with all the necessary parameters to manage the redirect.
  * Note: we decided to have this inline so improve site performance
  
- Since site are responsive, the client has to determine a minimum screen width for a redirect. My text recommends a minimum, and I set the default. Both of these numbers were determined through conversations with the product owner.

- Javascript checks the object and performs the redirect.

Issues:
- (PHP / Drupal) Splashify requires an argument of a url. If a client chose to ignore the live game settings, no url is required, so I had to hook the validation method to accommodate.

- (Javascript) Since JS does not have a hook system like Drupal, I had to take the splashify javascript code and copy it so was can run our "live game" code first. 