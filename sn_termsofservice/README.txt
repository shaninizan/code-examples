SN Terms of Service
Project: Add a Terms of Service Ribbon to the bottom of all pages, that will be persistent across all sites.

Interface development:
- Utilize CSS for decorations
- Original used font glyph instead of an image

What/How/When:
Original: tos.inc
- Create a self-contained file with all the javascript, HTML and CSS
- Must be responsive
- Has to work on all pages, including those without jQuery
- Persistent behavior between our suite of sites and another site written on a different platform

Updated: tos.js
- The day before we launched, the technical leads declared the TOS Ribbon should be a shared script, not done in parallel. That will allow future updates to happen in one spot and apply universally. I was given two hours to convert tos.inc into tos.js
- Build a single javascript file that contains the functions, HTML and CSS. 
- One source for all sites under the same domain, so it's shared between platforms.

Later: (not included)
- My code was restructured to fit the format of the shared JS library hosted on a different site.
- The tech lead decided to use localstorage, not just a cookie, so that was added.
- Both tech leads commended me on the core code.


Issues:
- Because some pages do not have jQuery, I had to add an eventListener to kick the JS unload.
- Since persistence is a key requirement, I had to continuously communicate that persistence will not happen in the test environments because our test environment domains don't match. 
