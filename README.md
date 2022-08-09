# **ROCK-PAPER-SCISSORS-LIZARD-SPOCK**
## -THE BIG BANG THEORY GAME-

Welcome to [THE R.P.S.L.S. GAME](https://vivhubb.github.io/bbtheory-game/) website.

THE R.P.S.L.S. GAME site, as the name suggests, is a website which allows users to play a different version of the ROCK-PAPER-SCISSORS game as it is presented in the American Sitcom called The Big Bang Theory. According to [IMDB](https://m.imdb.com/title/tt1256039/trivia/?ref_=tt_ql_trv) the game of "Rock Paper Scissors Lizard Spock" was invented by a software engineer named Sam Kass, who outlined the rules and hand gestures on his website in 1998. He, however, called it "Rock Paper Scissors Spock Lizard".

Upon accessing the website the user will be welcomed by a [Greeting & Game Rules Page](https://vivhubb.github.io/bbtheory-game/) which will display instructions of game rules using a picture and a link to a [Youtube video](https://www.youtube.com/watch?v=x5Q6-wMx-K8").

At this point the user will have two options to navigate. One of them being the link to the previously mentioned video and the other one will take the user to the [Game Page](https://vivhubb.github.io/bbtheory-game/game.html).

![Responsive Image](/assets/readme.images/responsive0.png)

## **CONTENTS**

<!-- TOC -->

- [**ROCK-PAPER-SCISSORS-LIZARD-SPOCK**](#rock-paper-scissors-lizard-spock)
    - [-THE BIG BANG THEORY GAME-](#-the-big-bang-theory-game-)
    - [**CONTENTS**](#contents)
        - [**USER EXPERIENCE UX**](#user-experience-ux)
            - [USER STORIES](#user-stories)
            - [WIREFRAMES](#wireframes)
        - [**SITE STRUCTURE**](#site-structure)
        - [**DESIGN**](#design)
            - [TYPEFACE](#typeface)
            - [COLOUR SCHEME](#colour-scheme)
        - [**FEATURES**](#features)
            - [EXISTING FEATURES](#existing-features)
                - [**GREETING & GAME RULES PAGE**](#greeting--game-rules-page)
                - [**THE GAME PAGE**](#the-game-page)
            - [FUTURE FEATURES](#future-features)
        - [TESTING](#testing)
            - [CODE VALIDATION](#code-validation)
            - [LIGHTHOUSE TESTING](#lighthouse-testing)
            - [BUGS AND FIXES](#bugs-and-fixes)
                - [GITPOD TEMPLATE](#gitpod-template)
                - [JAVASCRIPT](#javascript)

<!-- /TOC -->

### **USER EXPERIENCE UX**

#### USER STORIES

* As a user I want to understand the purpose of the site when accessing.
* As a user I want to be able to navigate through the website easily.
* As a user I want to clearly understand the information provided on the website.
* As a user I want to find out more about about where the idea of the game is coming from.
* As a user I want to play a game.
* As a user i want to receive constant feedback on the progress of the game.
* As a user i want to be able to interact with the website.

#### WIREFRAMES

The WIREFRAMES for THE R.P.S.L.S. GAME website were created using [Balsamiq](https://balsamiq.com/), initially to help visualize the project. The plans slightly differ from the website's final look due to developements and new ideas during creation.

![Wireframes website](/assets/readme.images/wireframes01.png) <br>
![Wireframes tablet](/assets/readme.images/wireframes02.png) &emsp;
![Wireframes mobile](/assets/readme.images/wireframes03.png)

[JUMP to TOP](<#contents>)

### **SITE STRUCTURE**

[THE R.P.S.L.S. GAME](https://vivhubb.github.io/bbtheory-game/) website created for the Rock-Paper-Scissors-Lizard-Spock game has two pages.

* [Greeting & Game Rules Page](https://vivhubb.github.io/bbtheory-game/) which is the default loading page welcoming the user and displaying instructions and game rules.
* [Game Page](https://vivhubb.github.io/bbtheory-game/game.html) which is holding the game itself.

[JUMP to TOP](<#contents>)

### **DESIGN**

#### TYPEFACE

The chosen font for the website was Cormorant SC, which falls back on serif. The choice was made due to the fonts nature of displaying the lowercase letters with an uppercase styling, while still showing the difference between the two. In my opinion the fonts' traits contribute well to the main purpose of the site's creation which is the game.

#### COLOUR SCHEME

The idea for the chosen colour scheme was initiated by the image from the [Greeting & Game Rules Page](https://vivhubb.github.io/bbtheory-game/) that visualizes the game rules. Furthermore, the presence of multiple colors are meant to represent playfulness suggesting "this should be fun".

[Color Picker](https://imagecolorpicker.com/en) was used for building the colour scheme and creating the colour palette.

![Colour Palette](/assets/readme.images/palette.png)

[JUMP to TOP](<#contents>)

### **FEATURES**

#### EXISTING FEATURES

##### **GREETING & GAME RULES PAGE**

* **Title**

**The main title** displays Rock-Paper-Scissors-Lizard-Spock stating clearly what the website is about. <br>
**The subtitle** displays -The Big Bang Theory Game- complementing the main title and giving further explanation on the website's thematics and purpose.

![Title](/assets/readme.images/title.png)

* **Greeting**

The title is followed by a greeting for the user:

![Greeting](/assets/readme.images/greeting.png)

* **Navigation**

The greeting is followed by a link to the [Game Page](https://vivhubb.github.io/bbtheory-game/game.html) in the case that the user is already familiar with the game rules.

![Link to the Game Page](/assets/readme.images/link01.png)

* **Game Rules Section**

This section displays clear instructions for the user on how to play the game and explains the score that needs to be achieved for a winner to be called. The basic rules are listed and visualized with a picture as well. It also ensures the user that the choice made by the computer is completely random so they have equal chances of winning the game.

![Game Rules](/assets/readme.images/game-rules.png)

* **Links**

This is followed by a link that will take the user to the [Game Page](https://vivhubb.github.io/bbtheory-game/game.html).

![Link to the Game Page](/assets/readme.images/link02.png)

Aditionally, there is a link that will take the user to a funny youtube video, which is a part from the American Sitcom called The Big Bang Theory, where one of the main characters explains the game rules to his friends.

![Youtube Video](/assets/readme.images/link03.png)

[JUMP to TOP](<#contents>)

##### **THE GAME PAGE**

* **Title**

**The main title** displays Rock-Paper-Scissors-Lizard-Spock stating clearly what the website is about. <br>
**The subtitle** displays -The Big Bang Theory Game- complementing the main title and giving further explanation on the website's thematics and purpose.

![Game Page Title](/assets/readme.images/title02.png)

* **Link**

Below the title there is a link that will take the user back to the [Game Rules Page](https://vivhubb.github.io/bbtheory-game/).

![Link to the Game Rules Page](/assets/readme.images/link04.png)

* **Game Area**

The next section is the game area itself which starts off completely empty and it displays the Player score and the Computer score initially starting at 0.

![Game area empty](/assets/readme.images/game-area01.png)

As soon as the user starts playing, both the Player zone and the Computer zone will display the choices and keep track of the scores.

![Game area](/assets/readme.images/game-area02.png)

Below the game area there are two sections displaying feedback messages for the user regarding the outcome of each round. The first section will display the rules applied for the choices made in the respective round while the second one will confirm who gets the score for that round.

![explain results section](/assets/readme.images/explain-results.png)

Under this section are displayed all the choices available for the user. The buttons are changing their color on mouse hover.

![Choices](/assets/readme.images/choices.png) &emsp;
![Choices on hover](/assets/readme.images/choices-hover.png)

Once the game is over and a winner is called, the buttons for choice options (Rock, Paper, Scissors, Lizard, Spock) will be disabled and a Restart Game option will pop up.

![Game over](/assets/readme.images/game-over.png)

The overall look of the game area can be associated with a "robotic face" which fits well with the site's purpose (being a game) as well as with the theme of The Big Bang Theory, where most of the characters are geniuses and scientists.

[JUMP to TOP](<#contents>)

#### FUTURE FEATURES

* Get some information on how to avoid [Javascript Warnings](<#javascript>) mentioned below.

[JUMP to TOP](<#contents>)

### TESTING

* The website has been tested among the most commonly used types of browsers, such as: Google Chrome, Firefox, Safari and Microsoft Edge.
* The website's responsive design was tested for all common screen sizes (including Iphone SE, Iphone 8 Plus, Iphone XS, Iphone SE 2nd gen, IPad Mini, Laptop, Desktop) with Developer Tools and [Am I Responsive?](https://ui.dev/amiresponsive?).

![Responsive Image 2](/assets/readme.images/responsive01.png)

[JUMP to TOP](<#contents>)

#### CODE VALIDATION

[THE R.P.S.L.S. GAME](https://vivhubb.github.io/bbtheory-game/) website has been validated through:

* [W3C Validation Service](https://validator.w3.org/)

![HTML validation](/assets/readme.images/html.png)

* [W3C CSS Validation service](https://jigsaw.w3.org/css-validator/)

![CSS validation](/assets/readme.images/css.png)

* [JSHint, a JavaScript Code Quality Tool](https://jshint.com/)

[JUMP to TOP](<#contents>)

#### LIGHTHOUSE TESTING

* **Greeting and Game Rules page**

    * Desktop

    ![Lighthouse desktop](/assets/readme.images/lighthouse-page1.png)

    * Mobile

    ![Lighthouse mobile](/assets/readme.images/lighthouse-page1-mobile.png)

* **Game page**

    * Desktop

    ![Lighthouse desktop](/assets/readme.images/lighthouse-page2.png)

    * Mobile

    ![Lighthouse mobile](/assets/readme.images/lighthouse-page2-mobile.png)

[JUMP to TOP](<#contents>)

#### BUGS AND FIXES

##### GITPOD TEMPLATE

Somewhere around the Mid Project review i have realised that i used the [wrong Gitpod template](https://github.com/vivhubb/gitpod-database-config) for the project. Once i realised my mistake I asked for advice from my Mentor and decided to move the project into a new repository using the [correct Gitpod template](https://github.com/vivhubb/gitpod-template). The repository that was created using the wrong template can be accessed [here](https://github.com/vivhubb/rpsls-game). 

[JUMP to TOP](<#contents>)

##### JAVASCRIPT

* **Bugs and Fixes**

    * **Bug:** At the end of the game, the result message stating the winner of the game was the opposite compared to what the scores were showing.

        ![JS bug](/assets/readme.images/js-bug.png)

        * Code

        ![JS bug code](/assets/readme.images/js-bug-code.png)

    * **Fix:** Changing the condition in the innner IF statement solved the problem.

        ![JS fix](/assets/readme.images/js-fix.png)

        * Code

        ![JS fix code](/assets/readme.images/js-fix-code.png)    

* **Warnings**

The first time the code was checked with [JSHint](https://jshint.com/) i have received 41 warinings with 3 "Missing semicolons".

![Javascript warnings 01](/assets/readme.images/javascript01.png) <br>
![Javascript warnings 02](/assets/readme.images/javascript02.png) &emsp;
![Javascript warnings 03](/assets/readme.images/javascript03.png) &emsp;
![Javascript warnings 04](/assets/readme.images/javascript04.png)

Once i have addeed the missing semicolons i have remained with 38 warnings.

![Javascript warnings 05](/assets/readme.images/javascript05.png)

* Two of them regarding: "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics." which i understood can be avoided but it is acceptable according to [Portfolio Project Scope Video](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/).

* The rest saying: " 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)." which i understood is also an acceptable warning.

![Javascript warnings 06](/assets/readme.images/javascript06.png)

[JUMP to TOP](<#contents>)

