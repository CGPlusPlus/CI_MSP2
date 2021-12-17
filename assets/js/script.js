document.addEventListener('DOMContentLoaded', () =>{

    //load all card options
    const allCardsArray = [{
        name: 'Arsenal',
        img: 'assets/images/100x100/arsenal.png'
    },
    {
        name: 'Aston Villa',
        img: 'assets/images/100x100/aston_villa.png'
    },
    {
        name: 'Brentford',
        img: 'assets/images/100x100/brentford.png'
    },
    {
        name: 'Brighton',
        img: 'assets/images/100x100/brighton.png'
    },
    {
        name: 'Burnley',
        img: 'assets/images/100x100/burnley.png'
    },
    {
        name: 'Chelsea',
        img: 'assets/images/100x100/chelsea.png'
    },
    {
        name: 'Everton',
        img: 'assets/images/100x100/everton.png'
    },
    {
        name: 'Leeds',
        img: 'assets/images/100x100/leeds.png'
    },
    {
        name: 'Leicester',
        img: 'assets/images/100x100/leicester.png'
    },
    {
        name: 'Liverpool',
        img: 'assets/images/100x100/liverpool.png'
    },
    {
        name: 'Man United',
        img: 'assets/images/100x100/man_united.png'
    },
    {
        name: 'Man City',
        img: 'assets/images/100x100/man_city.png'
    },
    {
        name: 'Newcastle',
        img: 'assets/images/100x100/newcastle.png'
    },
    {
        name: 'Norwich',
        img: 'assets/images/100x100/norwich.png'
    },
    {
        name: 'C. Palace',
        img: 'assets/images/100x100/palace.png'
    },
    {
        name: 'S.hampton',
        img: 'assets/images/100x100/southampton.png'
    },
    {
        name: 'Tottenham',
        img: 'assets/images/100x100/spurs.png'
    },
    {
        name: 'Watford',
        img: 'assets/images/100x100/watford.png'
    },
    {
        name: 'West Ham',
        img: 'assets/images/100x100/west_ham.png'
    },
    {
        name: 'Wolves',
        img: 'assets/images/100x100/wolves.png'
    }
    ];

    // second array to hold 50x50 images for ssmaller screens
    const allCardsArraySmall = [{
        name: 'Arsenal',
        img: 'assets/images/50x50/arsenal.png'
    },
    {
        name: 'Aston Villa',
        img: 'assets/images/50x50/aston_villa.png'
    },
    {
        name: 'Brentford',
        img: 'assets/images/50x50/brentford.png'
    },
    {
        name: 'Brighton',
        img: 'assets/images/50x50/brighton.png'
    },
    {
        name: 'Burnley',
        img: 'assets/images/50x50/burnley.png'
    },
    {
        name: 'Chelsea',
        img: 'assets/images/50x50/chelsea.png'
    },
    {
        name: 'Everton',
        img: 'assets/images/50x50/everton.png'
    },
    {
        name: 'Leeds',
        img: 'assets/images/50x50/leeds.png'
    },
    {
        name: 'Leicester',
        img: 'assets/images/50x50/leicester.png'
    },
    {
        name: 'Liverpool',
        img: 'assets/images/50x50/liverpool.png'
    },
    {
        name: 'Man United',
        img: 'assets/images/50x50/man_united.png'
    },
    {
        name: 'Man City',
        img: 'assets/images/50x50/man_city.png'
    },
    {
        name: 'Newcastle',
        img: 'assets/images/50x50/newcastle.png'
    },
    {
        name: 'Norwich',
        img: 'assets/images/50x50/norwich.png'
    },
    {
        name: 'C. Palace',
        img: 'assets/images/50x50/palace.png'
    },
    {
        name: 'S.hampton',
        img: 'assets/images/50x50/southampton.png'
    },
    {
        name: 'Tottenham',
        img: 'assets/images/50x50/spurs.png'
    },
    {
        name: 'Watford',
        img: 'assets/images/50x50/watford.png'
    },
    {
        name: 'West Ham',
        img: 'assets/images/50x50/west_ham.png'
    },
    {
        name: 'Wolves',
        img: 'assets/images/50x50/wolves.png'
    }
    ];

    //array to hold 10 randomly selected cards
    const gameCards = [];
    const gameCardsSmall = [];

    //randomise allCardsArray positioning
    for (let run=0; run < 100000; run++){
        allCardsArray.sort(() => 0.5 - Math.random())
        allCardsArraySmall.sort(() => 0.5 - Math.random())
    }

    //select first 10 randomised teams for game 
    for(var imgs = 0; imgs < 10; imgs++) {
        gameCards[imgs] = allCardsArray[imgs]
    }
    // for small screens
    for(var imgs = 0; imgs < 10; imgs++) {
        gameCardsSmall[imgs] = allCardsArraySmall[imgs]
    }

    //duplicate first 10 indexs from allCardsArray to back 10 indexs within gameCards array
    for (var j = 10; j <20; j++){
        gameCards[j] = allCardsArray[j-10]
    }
    // for small screens
    for (var j = 10; j <20; j++){
        gameCardsSmall[j] = allCardsArraySmall[j-10]
    }

    // randomise cards for loading to grid
    gameCards.sort(() => 0.5 - Math.random())
    gameCardsSmall.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    
    // Empty arrays for comparing cards and cards IDs
    var cardsToCompare = []
    var cardsToCompareId = []

    var matches = 0;

    //create game board
    function createBoard() {
        for (let i=0; i<allCardsArray.length; i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/100x100/prem-logo-blend.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }

    }

    // function to create game board for smaller screen
    function createBoardSmall() {
        for (let i=0; i<allCardsArraySmall.length; i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/50x50/prem-logo-blend.png')
            card.setAttribute('data-id-small', i)
            card.addEventListener('click', flipCardSmall)
            grid.appendChild(card)
        }

    }


    // checking selected cards for a match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const cardOneId = cardsToCompareId[0]
        const cardTwoId = cardsToCompareId[1]

        if(cardOneId === cardTwoId){
            alert('You have selected the same card twice, please only select different cards for matching!')
            if (x.matches) { // If media query matches
                cards[cardOneId].setAttribute('src', 'assets/images/50x50/prem-logo-blend.png')
                cards[cardTwoId].setAttribute('src', 'assets/images/50x50/prem-logo-blend.png')        
            } else {
                cards[cardOneId].setAttribute('src', 'assets/images/100x100/prem-logo-blend.png')
                cards[cardTwoId].setAttribute('src', 'assets/images/100x100/prem-logo-blend.png')
            }
        }

        if (cardsToCompare[0] === cardsToCompare[1] && cardOneId != cardTwoId ) {

            cards[cardOneId].style.opacity = "0"
            cards[cardTwoId].style.opacity = "0"

            if (x.matches) { // If media query matches
                cards[cardOneId].removeEventListener('click', flipCardSmall)
                cards[cardTwoId].removeEventListener('click', flipCardSmall)        
            } else {
                cards[cardOneId].removeEventListener('click', flipCard)
                cards[cardTwoId].removeEventListener('click', flipCard)
            }
            matches++; 
        }
        else {
            if (x.matches) { // If media query matches
                cards[cardOneId].setAttribute('src', 'assets/images/50x50/prem-logo-blend.png')
                cards[cardTwoId].setAttribute('src', 'assets/images/50x50/prem-logo-blend.png')        
            } else {
                cards[cardOneId].setAttribute('src', 'assets/images/100x100/prem-logo-blend.png')
                cards[cardTwoId].setAttribute('src', 'assets/images/100x100/prem-logo-blend.png')
            }
        }
        cardsToCompare = []
        cardsToCompareId = []

        if (matches === 10) {
            clearTimeout(interval);
            $('#congratsModal').modal('toggle')
            winningModal(flips, minute, second)
        }

    }

    // flip card function 
    function flipCard(){

        var cardId = this.getAttribute('data-id')
        cardsToCompare.push(gameCards[cardId].name)
        cardsToCompareId.push(cardId)
        this.setAttribute('src', gameCards[cardId].img)
        
        if (cardsToCompare.length === 2 ){
            setTimeout(checkForMatch, 1000)
        }
        // start flip counter
        flipCounter();
        
    }

    // flip card function for smaller screen
    function flipCardSmall(){

        var cardId = this.getAttribute('data-id-small')
        cardsToCompare.push(gameCardsSmall[cardId].name)
        cardsToCompareId.push(cardId)
        this.setAttribute('src', gameCardsSmall[cardId].img)
        
        if (cardsToCompare.length === 2 ){
            setTimeout(checkForMatch, 600)
        }
        // start flip counter
        flipCounter(); 
    }

    function myFunction(x) {
        if (x.matches) { // If media query matches
            createBoardSmall()        
        } else {
            createBoard()
        }
    }
      
    var x = window.matchMedia("(max-width: 400px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes






    let flips = 0
    let counter = document.querySelector('.flips')

    // count flips made - inspired from https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-3-moves
    function flipCounter() {
        flips++;
        counter.innerHTML = `Flips: ${flips}` 
        if(flips == 1) {
            startTimer()
        }
    }


    //game timer - code basis from https://github.com/sandraisrael/Memory-Game-fend
    //started second at 1 as it takes 1 second to load new format before continuing to increment

    var second = 1, minute = 0
    var timer = document.querySelector("#timer")
    var interval
    function startTimer(){
        interval = setInterval(function(){
            timer.innerHTML = minute+" mins "+second+" secs"
            second++
            if(second == 60){
                minute++
                second = 0;
            }
            if(minute == 60){
                hour++
                minute = 0;
            }
        },1000);
        
    }

    // game winning modal - final second count showing as 1 more than it should, so minused 1 second for equality of data
    function winningModal(flips, minute, second) {
        let winModal = document.querySelector('.win')
        winModal.style.visibility = 'visible'
        winModal.querySelector('#totalFlips').innerHTML = `You made ${flips} card flips and `
        winModal.querySelector('#winTime').innerHTML = `you completed the game in ${minute} minutes and ${second - 1} seconds`

        matches = 0;
    }

})