#  Flodraw

`A vanilla JS app built to easily make simple diagrams in your browser.`

Example: [http://flod.dwrolvink.com](http://flod.dwrolvink.com)

#### Support
This app is being developed in/for the latest version of Firefox on Linux Manjaro. Other browser support is not tested/developed for. Might work though, who knows. 

#### Installation
Download and extract this project or git clone it to a folder. Then open index.html with your browser. As said above, it is developed for Firefox, but Chrome seems to work fine too (not tested very well).


#### Saving progress
While in the app, press S to download the save file. Open `/sets/rectangles1.js` and replace its contents with the savefile you downloaded.
If you have this file open in a text editor, and open the downloaded file with the same editor you can save pretty quickly. Still looking for a better (serverless) way though.

#### Controls 
- Click object to select it and show the edit pane (only when edit mode is on, see key table)
- Scroll to zoom in/out
- Drag empty space to move around
- Drag object to move it (only when edit mode is on, see key table)
- Press and hold space to move around even when clicking on an object even when in edit mode (= force pan)

| Key | Action |
| :-- | :----- |
| I   | Toggle edit mode. When edit mode is off pan is forced, so you can move around by dragging without moving objects by mistake. |
| H   | Show/hide help text |
| Ctrl + drag | Select multiple object to move them collectively |
| Shift + click | Add/remove objects from current selection. Also works with Ctrl added in the mix. |
| R/Del | Delete selected objects |
| C or D | Copy/Duplicate selected object(s) |
| G   | Toggle grid display on/off |
| Q  | Toggle page settings |
| S  | Download current state (see saving progress) | 


#### Notes
- Objects can be defined in /sets/
- Currently only /sets/rectangles1.js is loaded. You can manually load a different file in index.html (bottom of the page).
- Well defined classes for *actual* objects can be placed in /classes/
- The rectangle class currently does a lot, maybe too much. 
- Separate files for separate functionality (like scrolling) can be placed in /modules/
