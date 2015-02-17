SN Podcast
Project: Create and brand a podcast for iTunes.

Interface development:
- Instructional text

What/How/When:
- (Drupal) EntityFieldQuery to gather audio files based on a checkbox.
- (Drupal / PHP) Custom XML output to iTunes standards.
- (Drupal) Cache output feed.
- (Drupal) Manually entered settings.
- (Drupal) Prevent normal page load and display podcast xml instead.

Issues:
- Audio had been developed as an entity, not a content type, and did not have all the appropriate fields for iTunes syndication. Thus, extensive reworking of audio module was necessary.
- We did not have an actual live podcast to submit to iTunes. There was some minor reworking that had to be done post-launch, where the specs did not cover the specific situation of our client.
