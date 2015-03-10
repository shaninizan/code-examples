SN Biographies
Project: Build a tool to write and edit player and coach biographies to be consumed by a client's website.

My role in this project was as an interface designer / developer. 
1. Change 'enter name' (text field) into two drop down lists
  - First option is to choose player or coach. 
  - Second select menu is populated by data for that specific team based on the first selection.
  - Player and coach data is coming from a feed.
  WHY?
  A) Removes necessity of spell check.
  B) Insures proper mapping to players that have the same name (on the client's website).
  C) Since options are feed-driven, player trades and other personnel changes are handled automatically and quickly.

2. Suggest importing existing data. That includes biographies imported from a previous system. Also, allows biographies to travel with the player if he is traded.

3. Expanded fields
  - Business leaders wanted to add a Twitter handle to the roster page, but there was nothing on the site controlling specific player data outside of the feed. Until this project.
  - Some of fields that previously existed but weren't getting used have been brought back so we can capture the data and use it if we choose to.
  WHY?
  A) Forward thinking. The data captured by this project can be leveraged at a later time.
  
4. Architected data delivery and format
  - Since the pieces were supposed to map to player pages on another web site, I worked with a developer from that group to understand their data format.
  - Suggested curl to send the JSON object to the client.
  
Note: Due to schedule changes, I had to transition development to another team member. The knowledge transfer was very smooth and the project launched without a hitch. The importer was built as a separate tool.

Three screenshots demonstrate the data-driven user interface.