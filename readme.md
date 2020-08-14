#  Menu of Titans

`A vanilla JS app built to keep track of food locations in Path of Titan.`

Example: [https://titanmap.dwrolvink.com](https://titanmap.dwrolvink.com)

#### Support
This app is being developed in/for the latest version of Firefox on Linux Manjaro. Other browser support is not tested/developed for. Might work though, who knows.  Chrome seems to work OK, but it's not tested very well.

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
| E | Deselect all |
| Esc | Deselect all, Close all edit panes, empty clipboard |
| R/Del | Delete selected objects |
| C or D | Copy/Duplicate selected object(s) |
| G   | Toggle grid display on/off |
| Q  | Toggle page settings |
| S  | Download current state (see saving progress) | 


#### Installation & Running the app
Download and extract this project or git clone it to a folder. This folder will be called your `web directory`.

**Filedrive hosting**: Open your web directory, and then open `index.html` with your webbrowser.

**Webserver hosting**: You can run a simple webserver on your computer and configure it so it runs with your web directory as webroot. Then go to http://localhost:8080 (or whatever url your webserver is configured to serve at). 

> Note: Pressing P will result in an error when you use filedrive hosting. To use the "save to image" functionality, you need to use webserver hosting.


#### Saving progress
When editing the map, any progress will be automatically saved to your localstorage session. If you open the app in a different browser (=different session) everything will be gone. 

The only way around this is to install the app yourself (so not using it via https://titanmap.dwrolvink.com), see the installation section.

If you run the app yourself, you can press S to download a file `save_file.js`. Replace the file `/sets/save_file.js` in your webdirectory with your downloaded file to have your data available in all sessions.

> Note: If there is a local session present, this session will be loaded instead of `/sets/save_file.js`. To remedy this, press F12 when you are in the app. In the menu that opens, go to `console` and type: 
  ```js
    localStorage.clear();
  ```
> Finish with enter. This will delete all the data saved in your local session!


#### Notes
- Currently only /sets/save_file.js is loaded. You can manually load a different file in index.html (bottom of the page).
- Well defined classes for *actual* objects can be placed in /classes/
- The rectangle class currently does a lot, maybe too much. 
- Separate files for separate functionality (like scrolling) can be placed in /modules/
