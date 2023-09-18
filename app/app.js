import { updatePageContent } from "../model/model.js";



/* active Navigator */
function updateActiveBtn(btnID) {
    //grab old and new actives
    let oldActive = document.getElementById("active");
    let newActive = document.getElementById(btnID);

    if (oldActive.innerHTML == newActive.innerHTML) {
        oldActive.id = "active";
    } else {
        //switch class and ID names
        oldActive.id = oldActive.className;
        newActive.className = newActive.id;

        // empty old class name and set ID name
        oldActive.className = "";
        newActive.id = "active"
    }
}
/* current Banner */
function updateBanner(btnID) {
    if (btnID == "active") {
        /* Banner remains the same */
    } else {
        document.getElementById("banner").innerHTML = btnID;
    }
}


function photoPage() {

    const photos = document.getElementsByClassName("photo");
    const details = document.getElementsByClassName("detail");

    console.log("photos: ", photos.childNodes);
    console.log("details: ", details.childNodes);

    for (let i = 0; i < photos.length; i++) {
        console.log("loop");

        const photo = photos[i];
        // const detail = details[i];

        /* Estabilish id tags */
        // const detailID = `detailID${i}`;
        const photoID = `photoID${i}`;
        console.log(i + " & mouseOver listener");

        //add ID to hidden details
        // detail.setAttribute('id', detailID)
        photo.setAttribute('id', photoID)

        /* add event listener */
        photo.addEventListener("mouseover", () => {
            console.log("mouseOver listener executed");
            // showDetail(photoID, detailID)
        });

        /* establishing hidden elements */
        console.log("hiding photo detail");
        // hideDetail(detailID);
    };

}

function initListeners() {
    $("nav div a").on("click", (e) => {
        //prevents page from changing
        e.preventDefault();
        let btnID = e.currentTarget.id;

        updateActiveBtn(btnID);
        updateBanner(btnID);
        updatePageContent(btnID);

        if (btnID == "photos") {

            photoPage();

        } else {
            console.log(btnID);
            // updatePageContent(btnID);

        }

    })
}

$(document).ready(function () {
    updatePageContent("home");
    initListeners();
});