const url = "https://www.tropico.one/wp-json/wp/v2/media/";
const cardContainer = document.querySelector(".card-container")
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let length = 3;
let offset = 0;


async function makeApiCall() {
    try {
        const response = await fetch(url +
            `?per_page=${length}&offset=${offset}&_embed`);

        const json = await response.json();

        if (offset === 0) {
            previousBtn.style.display = "none";
        } else {
            previousBtn.style.display = "block";
        }

        if (json.length < 3) {
            nextBtn.style.display = "none";
        } else {
            nextBtn.style.display = "block";
        }

        console.log(json);

        cardContainer.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            cardContainer.innerHTML +=
                `   
                        <div class="blog-card">
                            <a href="details.html?id=${json[i].id}">
                                <img src="${json[i].source_url}" alt="${json[i].alt_text}">
                            </a>
                            <h3 class="blog-title">${json[i].title.rendered}</h3>
                            <p>${json[i].caption.rendered}</p>
                            <a class="continue-btn" href="details.html?id=${json[i].id}">continue reading</a>
                        </div>
                    </a>
                `
        };

        
        
    }
    catch (error) {
        console.log(error);
        cardContainer.innerHTML = displayError();
        previousBtn.style.display = "none";
        nextBtn.style.display = "none";
    }
}


previousBtn.addEventListener("click", () => {
    if (offset >= 3) {
        offset -= 3;
        makeApiCall();
    }
});

nextBtn.addEventListener("click", () => {
    offset += 3;
    makeApiCall();
});


makeApiCall();

/* DRAFT ON WORKING OUT HOW TO CHANGE PER_POST TO 1 WHEN WINDOW WIDTH IS 1000px OR LESS */

// const mediaQuery = window.matchMedia('(max-width: 768px)')

// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (e.matches) {
//       length = 1;
      
//     // Then log the following message to the console
//     console.log('Media Query Matched!')
//   } else {
//       length = 3;
//   }
// }

/* ERROR HANDLING */

function displayError(message = "An error has occured. </br>Something went wrong when trying to fetch API.") {
    return `<div class="error">${message}</div>`
}

// Register event listener
mediaQuery.addEventListener("change", handleTabletChange);

// Initial check
handleTabletChange(mediaQuery)