// Let's get start with Js

let left_button = document.getElementsByClassName(' bi-chevron-left')[0];
let right_button = document.getElementsByClassName(' bi-chevron-right')[0];
let entertain = document.getElementsByClassName('entertain')[0];
let looking = document.getElementsByClassName('looking')[0];
let search_in  = document.getElementById('search_in');

left_button.addEventListener('click', ()=> {
    entertain.scrollLeft -= 140;
});
right_button.addEventListener('click', ()=> {
    entertain.scrollLeft += 140;
});

// There is a JSON File which will get linked with Js now.....

let json_url = "movies.json"

fetch(json_url).then(Response => Response.json())
.then( (data) => {
    data.forEach((element,i) => {
        let{name,imdb,year,sposter,bposter,genre,url}=element;
        let card = document.createElement('a');
        card.href =url;
        card.classList.add('popcorn');
        card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="posters">
                    <div class="more_info">
                        <img src="${bposter}" alt="">
                        <div class="info">
                            <h4>${name}</h4>
                            <div class="subject">
                                <p>${genre}, ${year}</p>
                                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                            </div>
                        </div>
                    </div>
        `
        entertain.appendChild(card);
    });
    document.getElementById('heading').innerText = data[0].name;
    document.getElementById('genre').innerText = data[0].genre;
    document.getElementById('year').innerText = data[0].year;
    document.getElementById('rating').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i>${data[0].imdb}`


//Let's go for the search option...!!!

    data.forEach(element => {
    let {name,imdb,year,sposter,genre,url} = element;
    let card = document.createElement('a');
    card.href = url;
    card.classList.add('lists');
    card.innerHTML = `
        <img src="${sposter}" alt="spiderman">
            <div class="search_box">
                <h3>${name}</h3>
                <p>${genre},${year},<span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</p>
            </div>
            `
            looking.appendChild(card);
        });
        // We have to now filter the search

        search_in.addEventListener('keyup',() =>{
            let filter = search_in.value.toUpperCase();
            let x = looking.getElementsByTagName('a');
            for(let index = 0; index < x.length; index++){
                let y = x[index].getElementsByClassName('search_box')[0];
                let TextVal = y.textContent || y.innerText;
                if (TextVal.toUpperCase().indexOf(filter)> -1) {
                   x[index].style.display = "flex";
                   looking.style.visibility = "visible";
                   looking.style.opacity = 1;
                } else {
                    x[index].style.display = "none";
                }
                if (search_in.value == 0) {
                    looking.style.visibility = "none";
                    looking.style.opacity = 0;
                }
            }
        })
        
        // Let's go for the video paly button

        let video = document.getElementsByTagName('video')[0];
        let play = document.getElementById('play');
        play.addEventListener('click', () =>{
            if (video.paused) {
                video.play();
                play.innerHTML = `Paused<i class="bi bi-pause-fill"></i>`
            } else{
                video.pause();
                play.innerHTML = `Trailer<i class="bi bi-play-fill"></i>`
            }
        });

        //It's the last part 
        //Here we will showing the movies, series and kids option 

        let series = document.getElementById('series');
        let movies = document.getElementById('movies');
        let kids = document.getElementById('kids');

        series.addEventListener('click', () =>{
            entertain.innerHTML = '';

        let series_array = data.filter(ele =>{
            return ele.type === "Series";
        })
        series_array.forEach((ele,i)=>{
            let{name,imdb,year,sposter,bposter,genre,url}=ele;
            let card = document.createElement('a');
            card.href =url;
            card.classList.add('popcorn');
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="posters">
                        <div class="more_info">
                            <img src="${bposter}" alt="">
                            <div class="info">
                                <h4>${name}</h4>
                                <div class="subject">
                                    <p>${genre}, ${year}</p>
                                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                                </div>
                            </div>
                        </div>
            `
            entertain.appendChild(card);
        });  
     })
     movies.addEventListener('click', () =>{
        entertain.innerHTML = '';

    let movies_array = data.filter(ele =>{
        return ele.type === "Movie";
    })
    movies_array.forEach((ele,i)=>{
        let{name,imdb,year,sposter,bposter,genre,url}=ele;
        let card = document.createElement('a');
        card.href =url;
        card.classList.add('popcorn');
        card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="posters">
                    <div class="more_info">
                        <img src="${bposter}" alt="">
                        <div class="info">
                            <h4>${name}</h4>
                            <div class="subject">
                                <p>${genre}, ${year}</p>
                                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                            </div>
                        </div>
                    </div>
        `
        entertain.appendChild(card);
    });  
 })
 kids.addEventListener('click', () =>{
    entertain.innerHTML = '';

let kids_array = data.filter(ele =>{
    return ele.type === "Kids";
})
kids_array.forEach((ele,i)=>{
    let{name,imdb,year,sposter,bposter,genre,url}=ele;
    let card = document.createElement('a');
    card.href =url;
    card.classList.add('popcorn');
    card.innerHTML = `
    <img src="${sposter}" alt="${name}" class="posters">
                <div class="more_info">
                    <img src="${bposter}" alt="">
                    <div class="info">
                        <h4>${name}</h4>
                        <div class="subject">
                            <p>${genre}, ${year}</p>
                            <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                        </div>
                    </div>
                </div>
    `
    entertain.appendChild(card);
});  
})
})

