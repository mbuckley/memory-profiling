# Memory Profiling


## Chrome Task Manager
Window > Task Manager > Right click on header bar and select "JavaScript Memory"

- The Memory column represents native memory. DOM nodes are stored in native memory. If this value is increasing, DOM nodes are getting created.

- The JavaScript Memory column represents the JS heap. This column contains two values. The value you're interested in is the live number (the number in parentheses). The live number represents how much memory the reachable objects on your page are using. If this number is increasing, either new objects are being created, or the existing objects are growing.
