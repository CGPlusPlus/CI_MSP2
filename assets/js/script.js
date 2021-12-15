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

    //create game board
    function createBoard() {
        for (let i=0; i<allCardsArray.length; i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/prem-logo-blend.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }

    }

    createBoard()






let flips = 0;
let counter = document.querySelector('.flips');
function moveCounter() {
    flips++;
    counter.innerHTML = `Flips: ${flips}`; 
}
})