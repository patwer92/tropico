const url = "https://tropico.one/wp-json/wp/v2/media/?per_page=14&_embed";
const blogContainer = document.querySelector(".blog-container");
const viewMoreBtn = document.querySelector(".viewmore-btn");

viewMoreBtn.style.display = "none";

async function makeApiCall() {
    try {
        const response = await fetch(url);

        const json = await response.json();

        console.log(json);

        blogContainer.innerHTML = "";
        viewMoreBtn.style.display = "block";

        for (let i = 0; i < 7; i++) {
            blogContainer.innerHTML +=
                `
                <div class="blog-post">
                    <div class="img-container">
                        <a href="details.html?id=${json[i].id}">
                            <img src="${json[i].source_url}" alt="${json[i].alt_text}">
                        </a>
                    </div>
                    <div class="text-container">
                        <h2>${json[i].title.rendered}</h2>
                        <p>${json[i].caption.rendered}</p>
                        <a class="continue-btn" href="details.html?id=${json[i].id}">continue reading</a>
                    </div>
                </div>
                `
        };

    } catch (error) {
        console.log(error);
        blogContainer.innerHTML = displayError();
        viewMoreBtn.style.display = "none";
    }
}

viewMoreBtn.addEventListener("click", () => {
    async function makeApiCall() {
        try {
            const response = await fetch(url);

            const json = await response.json();

            console.log(json);

            blogContainer.innerHTML = "";


            for (let i = 0; i < json.length; i++) {
                viewMoreBtn.style.display = "none";

                blogContainer.innerHTML +=
                    `
                    <div class="blog-post">
                        <div class="img-container">
                            <a href="details.html?id=${json[i].id}">
                                <img src="${json[i].source_url}" alt="${json[i].alt_text}">
                            </a>
                        </div>
                        <div class="text-container">
                            <h2>${json[i].title.rendered}</h2>
                            <p>${json[i].caption.rendered}</p>
                            <a class="continue-btn" href="details.html?id=${json[i].id}">continue reading</a>
                        </div>
                    </div>
                    `
            };

        } catch (error) {
            console.log(error);
        }
    }
    makeApiCall();
});

makeApiCall();

/* ERROR HANDLING */

function displayError(message = "An error has occured. </br>Something went wrong when trying to fetch API.") {
    return `<div class="error">${message}</div>`
}