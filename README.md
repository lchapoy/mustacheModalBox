# mustacheModalBox

### Description
  The file mustacheModal.js contains a function called lauchModal that will be stored inside
  the global scope this function is going to allow the user to show a simple modal box, using 
  an already predefined mustache template.
  ***
### Function inside mustacheModal.js
#### launchModal(options)
  This method will receive an options object that will let the user define the modal behavior,
  the object should have the next properties/methods
  * title : the title to be show on the modal box
  * message : the message to be show as description
  * acceptCallback: the function that is going to be trigger when the click accept
  * cancelCallback: the function that is going to be trigger when the user click cancel
  
###Test Folder
  The file inside this folder is an example that use this Modal Box
