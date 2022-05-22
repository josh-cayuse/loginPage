# loginPage

This cypress project is designed to test the login page at [app.sherpany.com](https://app.sherpany.com/). If an error occurs right away, please restart the test, so far they are working on this machine (win 11, core i7) running the lastest version of chrome. 

------Files ------

Automated tests:
- checkLinks.js – need the added code for testing opening the app store
- checkTexts.js
- errorMessages.js
- userInput.js

Support files:
- languageTesting.js
- errorMess.json
    
    
------What the files do ------

checklinks.js 
- checks all the existing links, for example ther sherpany link at the bottom and such. 

checkText.js
- checks all the text within their elements
- checks for all languages 
- uses languageTesting.js for its methods and such

errorMessages.js
- checks for all exists error message and their elements
- checks for all languages 
- uses errorMess.json for variables. 
    
    
 
            
    
