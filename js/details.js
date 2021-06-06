const detailsContainer = document.querySelector(".details-section");

const title = document.querySelector("title")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function makeApiCall() {
    try {
        const response = await fetch("https://tropico.one/wp-json/wp/v2/media/" + id + `?_embed"`);

        const json = await response.json();

        console.log(json);

        title.innerHTML = `Tropico | ${json.title.rendered}`;

        detailsContainer.innerHTML = "";

        detailsContainer.innerHTML =
            `
            <div class="breadcrumb">
                <p><a href="index.html">Home</a> > <a href="blog.html">Blog</a> ><span class="bold-text capitalize-text"> ${json.title.rendered}</span>
                </p>
            </div>
            <div class="previous_btn-container">
                <a href="blog.html">
                    <i class="fas fa-chevron-left" id="previous-btn"></i>
                </a>
            </div>
            <div class="container">
                <div class="img-container">
                    <img src="${json.source_url}" alt="${json.alt_text}">
                </div>
                <div class="show-img">
                    <img src="${json.source_url}" alt="${json.alt_text}" class="original-img">
                </div>
                <div class="text-container">
                    <h1>${json.title.rendered}</h1>
                    <h4>${json.caption.rendered}</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut rerum reiciendis. Eveniet
                        doloribus, error vel possimus alias doloremque fuga non. Incidunt eos deserunt odio numquam
                        cupiditate quo, repellendus vitae perspiciatis velit sit dolores fugit nostrum illo est nihil,
                        totam praesentium veniam animi, necessitatibus repellat quibusdam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero voluptatum neque
                        numquam
                        accusamus illum nam excepturi maxime suscipit modi quibusdam, itaque, earum quae omnis
                        voluptatibus
                        adipisci magni culpa ipsum! Quisquam reprehenderit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium, minus illum
                        odio deserunt esse totam delectus excepturi, tempore exercitationem veniam maiores ad quod
                        magni. Placeat delectus dolore error minus non, dolorem quas ipsam adipisci ut inventore fuga id
                        vero cumque quaerat recusandae qui. Nostrum iure facilis sint vel, nihil ipsa, rem dolorum
                        corrupti qui praesentium, rerum fugiat quae pariatur.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti consequuntur rem
                        porro
                        enim accusantium modi assumenda velit tempora cum? A est recusandae consequuntur in minus rem
                        voluptatum
                        exercitationem asperiores dolores rerum! Vel alias culpa qui ipsa modi volutum.
                    </p>
                    <p class="bold-text">
                        Tropico &#174; 2021
                    </p>
                </div>
            </div>        
        `;
        const blogImage = document.querySelector(".img-container img");
        const showImage = document.querySelector(".show-img");
        const originalImage = document.querySelector(".original-img");

        blogImage.addEventListener("click", () => {
            showImage.classList.add("open");
            originalImage.classList.add("open");
        });

        showImage.addEventListener("click", (e) => {
            if (e.target.classList.contains("show-img")) {
                showImage.classList.remove("open");
                originalImage.classList.remove("open");
            }

        });



    } catch (error) {
        console.log(error);
        detailsContainer.innerHTML = displayError();
    }
}

makeApiCall();

/* ERROR HANDLING */

function displayError(message = "An error has occured. </br>Something went wrong when trying to fetch API.") {
    return `<div class="error">${message}</div>`
}