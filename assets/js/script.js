document.addEventListener('DOMContentLoaded', () =>{

    //load all card options
    const allCardsArray = [{
        name: 'Arsenal',
        img: 'assets/images/arsenal.png'
    },
    {
        name: 'Aston Villa',
        img: 'assets/images/aston_villa.png'
    },
    {
        name: 'Brentford',
        img: 'assets/images/brentford.png'
    },
    {
        name: 'Brighton',
        img: 'assets/images/brighton.png'
    },
    {
        name: 'Burnley',
        img: 'assets/images/burnley.png'
    },
    {
        name: 'Chelsea',
        img: 'assets/images/chelsea.png'
    },
    {
        name: 'Everton',
        img: 'assets/images/everton.png'
    },
    {
        name: 'Leeds',
        img: 'assets/images/leeds.png'
    },
    {
        name: 'Leicester',
        img: 'assets/images/leicester.png'
    },
    {
        name: 'Liverpool',
        img: 'assets/images/liverpool.png'
    },
    {
        name: 'Man United',
        img: 'assets/images/man_united.png'
    },
    {
        name: 'Man City',
        img: 'assets/images/man_city.png'
    },
    {
        name: 'Newcastle',
        img: 'assets/images/newcastle.png'
    },
    {
        name: 'Norwich',
        img: 'assets/images/norwich.png'
    },
    {
        name: 'C. Palace',
        img: 'assets/images/palace.png'
    },
    {
        name: 'S.hampton',
        img: 'assets/images/southampton.png'
    },
    {
        name: 'Tottenham',
        img: 'assets/images/spurs.png'
    },
    {
        name: 'Watford',
        img: 'assets/images/watford.png'
    },
    {
        name: 'West Ham',
        img: 'assets/images/west_ham.png'
    },
    {
        name: 'Wolves',
        img: 'assets/images/wolves.png'
    }
    ];

    //array to hold 10 randomly selected cards
    const gameCards = [];
    //randomise allCardsArray positioning
    allCardsArray.sort(() => 0.5 - Math.random())

    var count = 0;

    //select first 10 randomised teams for game 
    for(var imgs = 0; imgs < 10; imgs++) {
        gameCards[imgs] = allCardsArray[imgs]
    }
    //duplicate first 10 indexs from allCardsArray to back 10 indexs within gameCards array
    for (var j = 10; j <20; j++){
        gameCards[j] = allCardsArray[j-10]
    }

    // randomise cards for loading to grid
    gameCards.sort(() => 0.5 - Math.random())

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
            card.setAttribute('src', 'assets/images/prem-logo-blend.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }

    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const cardOneId = cardsToCompareId[0]
        const cardTwoId = cardsToCompareId[1]

        console.log(cardOneId)
        console.log(cardTwoId)


        if (cardsToCompare[0] === cardsToCompare[1]) {

            cards[cardOneId].style.opacity = "0";
            cards[cardTwoId].style.opacity = "0";
            matches++;
            console.log(matches);
            /*
            cards[cardOneId].remove('img');
            cards[cardTwoId].remove('img');
            document.getElementById("myDIV").style.opacity = "0.5";
            */

        }
        else {
            cards[cardOneId].setAttribute('src', 'assets/images/prem-logo-blend.png');
            cards[cardTwoId].setAttribute('src', 'assets/images/prem-logo-blend.png');
        }
        cardsToCompare = []
        cardsToCompareId = []

        if (matches === 1) {
            clearTimeout(interval);
            $('#congratsModal').modal('toggle');
            winningModal(flips, minute, second);
        }

    }


    // flip card function 
    function flipCard(){

        var cardId = this.getAttribute('data-id')
        cardsToCompare.push(gameCards[cardId].name)
        cardsToCompareId.push(cardId)
        this.setAttribute('src', gameCards[cardId].img)
        
        
        if (cardsToCompare.length === 2 ){
            setTimeout(checkForMatch, 800)
        }
        // start flip counter
        flipCounter();
        
    }
    createBoard()


    let flips = 0;
    let counter = document.querySelector('.flips');

    // count flips made - inspired from https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-3-moves
    function flipCounter() {
        flips++;
        counter.innerHTML = `Flips: ${flips}`; 
        if(flips == 1) {
            startTimer(); 
        }
    }


    //game timer - code basis from https://github.com/sandraisrael/Memory-Game-fend
    //started second at 1 as it takes 1 second to load new format before continuing to increment

    var second = 1, minute = 0;
    var timer = document.querySelector("#timer");
    var interval;
    function startTimer(){
        interval = setInterval(function(){
            timer.innerHTML = minute+" mins "+second+" secs";
            second++;
            if(second == 60){
                minute++;
                second = 0;
            }
            if(minute == 60){
                hour++;
                minute = 0;
            }
        },1000);
        
    }

    // game winning modal - final second count showing as 1 more than it should, so minused 1 second for equality of data
    function winningModal(flips, minute, second) {
        let winModal = document.querySelector('.win');
        winModal.style.visibility = 'visible';
        winModal.querySelector('#totalFlips').innerHTML = `You made ${flips} card flips and `;
        winModal.querySelector('#winTime').innerHTML = `you completed the game in ${minute} minutes and ${second - 1} seconds`;

        matches = 0;
    }



    
})