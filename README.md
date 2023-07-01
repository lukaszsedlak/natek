# How to run my tests

First make sure that You have node.js installed: https://nodejs.org. Than run folowing commands:

1. Command: `npm install`
2. Command : `npm run test`

Browser should be opened to display test results in HTML report. 

_________

Let me just elaborate a little bit on the resolution I decided to implement. 

I've worked on the premiss that I should not modify much my original task: `LoginPage.class`
Because `LoginPage` has already defined `login` method that returns boolean with 2 parameters than Only 4 test scenarios are possible to design. Of course If I would change parameters to be optional with `?` character I could expand my mock `AuthenticationService` on such options.

I could implement some open API authentication or even use some test website to do the same but in the end that would be too much overhead for the task to be completed. However, If You think I should bo it, than please contact me to expand that part as well.  