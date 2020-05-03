console.log('oooooh thats how you do it')
$(()=> {
    const $cardContainer = $('<div class="card-container">');
    $('#root > .app').append($cardContainer);


    $.ajax({
        url:'https://www.omdbapi.com/?apikey=53aa2cd6&s=Spiderman'
      }).then(
        (data) => {
          data.Search.forEach((el)=> {
            const $card = $(`<div class="card"><div class="card__value"><img src="https://picsum.photos/200"><h1>${el.Title}</h1><h2>${el.Year}</h2><h2>${el.Type}</h2> <br/></div><hr></div>`);
            $cardContainer.append($card)
          })
        },
        ()=> {
          console.log('this isnt SPARTA');
        }
      );
})
