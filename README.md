# Premier League Flip
Developed by: Conor Gorman  
Live site: https://cgplusplus.github.io/CI_MSP2/

## Project Goals
### End-User Goals
•	Finding a simple interactive game to play  
•	Find a game that has a certain familiarity to it in two ways; function and content  
•	If unfamiliar, User requires a way to understand game rules  
•	Ability to play differing levels of difficulty of the same game  
•	Ability to track progress as User moves through game / levels  
•   Easily Restart game at users request  
•   Easy to navigate site that is intuitive and interactive  

### Site-Owner Goals
•	Provide end-users an easy to play game that is fun and interactive  
•	Ensure users continue to play by keeping engaged; most likely through increasing difficulty/levels  
•	Functions of site should include:  
    •	Randomising of cards on game load or user reset  
    •   Display current game progress to user  
    •   Allow user to restart game at their request  
    •   Let user know when they have completed game/level  

## User Experience
### Target Audience
•	People who play online games  
•	People who support/know football teams in the English Premier League  
•	People who are looking to kill time with a fun game  
•	People looking to test their memory with a fun game  
### End-User Expectations
•	Game is fun to play and responds to user input  
•	Website layout is intuitive and easy to navigate  
•	Game will display current game progress   
•	Cards positioning will change with each restart/attempt of game  
•	Game will let user know when they have complete/finished a level  

## User Stories
### First Time User
•	As a first-time User, I want to understand what Premier League Flip has to offer  
•	As a first-time User, I want to play a fun easy to play game  
•	As a first-time User, I want to be able to intuitively navigate the website and find what I am looking for
•	As a first-time User, if I don't know how to play the game, i'd like to be able to locate game rules / how to play tutorial  
### Returning User
•	As a returning User, I want to be able to replay the game i played last time I visited the site  
•	As a returning User, I want to have the possibility to increase game difficulty  
•	As a returning User, I would like the navigation of the website to remain the same   
### Site Owner
•	As Site Owner, I want User to return to use the site  
•	As Site Owner, I want Users to be able to intuitively navigate the website.  
•	As Site Owner, I would like users to information available on-site on how to play the game  

## Design
### Wireframes

<details><summary>Home</summary>
<image src="assets/images/wireframes/Homepage.png">
</details> 

<details><summary>Game Page</summary>
<image src="assets/images/wireframes/Game_page.png">
</details> 
 
### Structure
As the site has 2 main components; Home page and Game page, navigation should be clear and intuitive. Navigation buttons are highly visible and labelled on each page, where they stand out against the background. 
From the wireframes above, there are 2 pages:
1.	The home page has a large hero image and will have a How to Play button and a Start Game button.
    Along with this, the How to Play will open a Modal with game instructions
2.	The game page will be front and center of the page, with 2 separate buttons for returning to homepage (Home) and also restarting the game (Reset)

### Website Layout
The website layout needed to be simple yet contain all the information required.
In order to avoid the need for scrolling, all contants are contained within the main viewport.

### Fonts
A single main font was imported from Google fonts; Rosario.
This was used as it is a close match to the font used officially for the Premier League logo.

## Site Features
### 'Start Game' and 'How to Play'
•	On the Homepage there is 2 buttons located at the bottom:  
    •	How to Play  
    •   Start Game  
<details><summary>Start Game and How to Play</summary>
<image src="assets/images/imgs/homepage.png">
</details> 
  
### How to Play Modal
•	Once the 'How to Play' button is clicked, a Modal (Screen Overlay) appears with instructions on how to play the game.  
<details><summary>How to Play modal</summary>
<image src="assets/images/imgs/howToModal.png">
</details> 
  
### Game grid
•	The game grid is located on the game.html page  
•	It consists of a grid of cards, each of which contains an image of the Premier League crest  
•   On clicking a card, it flips over revealing a Premier League crest beneath it  
<details><summary>Game grid</summary>
<image src="assets/images/imgs/game_grid.png">
</details> 
  
### Game data
•	Above the game grid is the game data  
•	It contains data on 2 metrics: Flips (no. of cards flipped over) and Time (time from first card click to game finish - stopwatch timer)  
<details><summary>Game data</summary>
<image src="assets/images/imgs/gameData.png">
</details> 
  
### Home and Reset
•	Above the game data is the gHome and Reset buttons  
•	The Home button will navigate the User back to the homepage and the Reset button wil rest the game, shuffling the cards positions and resetting the game data values.  
<details><summary>Home and Reset</summary>
<image src="assets/images/imgs/gameReset.png">
</details> 

### Features to be implemented
•   There is currently only 1 level in the game, in future adding further levels with differing dificulties would improve the user experience.


## Technologies Utilised
### Languages
•	HTML  
•	CSS  
•   JavaScript  
### Tools 
•	Git  
•	Github  
•	Gitpod  
•	Font Awesome v5.15  
•	Google Fonts  
•	Balsamiq  

## Validation
### HTML Validation
The W3C Nu Html Checker was used to validate the HTML pages.  
There were 4 errors on the index.html page.
<details><summary>Home Page errors</summary>
<image src="assets/images/imgs/htmlValidation.png">
</details> 

These errors were fixed by removing stray tags, closing a h4 element as opposed to h3 and chaning from an id to a class element.
<details><summary>Home Page No Errors</summary>
<image src="assets/images/imgs/htmlValidationPostFixes.png">
</details> 

There was also one error on the game.html page.
<details><summary>Game page errors</summary>
<image src="assets/images/imgs/htmlValidationGamePage.png">
</details> 

This was solved by removing a stray tag.
<details><summary>Game page No Errors</summary>
<image src="assets/images/imgs/htmlValidationGamePagePostFix.png">
</details> 

### Performance
Google Lighthouse in Chrome Developer Tools was used to check the website performance indicators. The pages performance readings are below:

<details><summary>Home page Performance</summary>
<image src="assets/images/imgs/home_page_performance.png">
</details>

<details><summary>Game page Performance</summary>
<image src="assets/images/imgs/game_page_performance.png">
</details>
  

## Issues
All issues encountered were to do with Javascript. These included:  
•   An issue in determining how to remove cards from the grid once matched.  
    The below was attempted - however it would remove the tile as a whole and meant the grid would move and ruin the flow of the game, making it impossible to remember positioning of cards.  
    cards[cardOneId].remove('img');  
    cards[cardTwoId].remove('img');  
    As an alternative approach, I went with the below code; setting an opacity level to '0' basically making the images transparent.  
    cards[cardOneId].style.opacity = "0"  
    cards[cardTwoId].style.opacity = "0"  

•   There is 20 teams in the Premier League (PL), but we only needed 10 teams to complete the game grid.  
    But the teams needed to be a random 10 teams. This meant I needed to utilise 2 arrays, one with all teams and one with a random 10 teams.  
    Using random sort function to ensure data was random, I could then select the first 10 teams for the second array.  

•   There was an issue were selecting the same tile twice would make an incorrect match.  
    To solve this I checked for the card ID and compared them.  
    If the IDs are the same, the browser throws an alert to the User asking to select two different cards and resets the flipped images.

•   There is also an issue where selecting more than 2 cards before the setTimeout expires causes a glitch.  
    The glitch will cause the 3rd or subsequent card to stay 'revealed'.  
    Unfortunately this is also an unsolved issue.  

 
## Deployment

This website was deployed using GitHub Pages following these steps:  
•	In the GitHub repository click on the settings tab at the top  
•	On the left menu scroll down to ‘Pages’  
•	For the source select 'main'. Click Save  
•	The page will refresh and display a highlighted section with a message stating: "Your website is published at https://cgplusplus.github.io/CI_MSP2/“  

The repository can be cloned by following the below steps:  
•	Navigate  to the GitHub repository  
•	Click on 'Code' at the top of the repository  
•	Select to clone either HTML, SSH or GitHub CLI  
•	Go to the working directory you wish to work from  
•	Go to Git Bash  
•	Type git clone and paste the URL from your clipboard ($ git clone https://github.com/USERNAME/REPOSITORY)  
•	Press enter to create your clone  

## Acknowledgements
### Media
•	Main Homepage Image: https://knowinsiders.com/stores/news_dataimages/triduongvnt/052021/23/13/in_article/1144_premier-league-2021-2022-list-all-team-clubs.jpg?rt=20210523131148 

•	Premier League Logo Image: https://obamabcn.com/wp-content/uploads/2019/11/logo-premier-league.jpg

•	Team Images: 
man_city.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png  
man_united.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png  
liverpool.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png  
chelsea.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png  
arsenal.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/800px-Arsenal_FC.svg.png  
west_ham.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/800px-West_Ham_United_FC_logo.svg.png  
spurs.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/800px-Tottenham_Hotspur.svg.png  
leicester.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/800px-Leicester_City_crest.svg.png  
aston_villa.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/800px-Aston_Villa_FC_crest_%282016%29.svg.png  
wolves.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/800px-Wolverhampton_Wanderers.svg.png  
brentford.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/800px-Brentford_FC_crest.svg.png  
brighton.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/800px-Brighton_%26_Hove_Albion_logo.svg.png  
palace.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Crystal_Palace_FC_logo.svg/800px-Crystal_Palace_FC_logo.svg.png  
everton.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/800px-Everton_FC_logo.svg.png  
southampton.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/800px-FC_Southampton.svg.png  
leeds.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/800px-Leeds_United_F.C._logo.svg.png  
watford.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Watford.svg/800px-Watford.svg.png  
burnley.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Burnley_F.C._Logo.svg/800px-Burnley_F.C._Logo.svg.png  
newcastle.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/800px-Newcastle_United_Logo.svg.png  
norwich.png - link: https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Norwich_City.svg/800px-Norwich_City.svg.png  

•	Icons: Font Awesome - https://fontawesome.com/  


### Code
•	Code Institute - Love Maths project: While creating this website/game, this tutorial served as a tutorial for basic Javascript functionality.  

#### Resources:
Modal information - https://getbootstrap.com/docs/4.0/components/modal/  
JS and Jquery links - https://getbootstrap.com/docs/4.0/getting-started/introduction/  
JS inspired by Ania Kubow @ https://www.youtube.com/watch?v=tjyDOHzKN0w  
some JS inspired by https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-3-moves  
some JS inspired by https://github.com/sandraisrael/Memory-Game-fend  
