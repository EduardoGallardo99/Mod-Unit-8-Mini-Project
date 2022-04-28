

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://i.pinimg.com/564x/50/d1/49/50d149c1c607a730ab652db076a48177--teddy-bears-comedy-films.jpg", "https://filmfilicos.com/wp-content/uploads/2018/03/461b39d31d77235499e4c74771661c90.jpg","https://i.pinimg.com/originals/44/bd/0f/44bd0f871fb17f956703a5c2538d71bb.jpg"];
	 let action =["https://qph.cf2.quoracdn.net/main-qimg-107d4054c1d8160d8c238b649aa08e88.webp","https://imgsrc.cineserie.com/2021/08/3817489-1.jpg?ver=1","https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/06/f9.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5"];
	let drama =["https://cdn.film-fish.com/uploads/movie/2fee35615fc2e1920d8106e9096da89c.jpg","https://m.media-amazon.com/images/M/MV5BMGM2MWUxMGEtMjU4Ny00OGRkLTk2ZTMtMDgzZDBhY2EwNzlhXkEyXkFqcGdeQXVyMjUxOTc0Ng@@._V1_.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drama-movies-1595364142.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    $(".shows").append("<img src="+show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of "drama"){
    $(".shows").append("<img src="+show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
    console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});