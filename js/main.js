// Response menu 
let menu = document.querySelector(".header-icon");
let list = document.querySelector("nav ul");
menu.addEventListener("click", function () {
    list.classList.toggle("list");
});

// header
let header = document.querySelector("header");

window = addEventListener("scroll", function () {
    if (scrollY >= 300) {
        header.classList.add("header");
    } else {
        header.classList.remove("header");
    }
});


let home = document.querySelector("#home-list");
let about = document.querySelector("#about-list");
let services = document.querySelector("#services-list");
let imgOerLay = document.images[0];
let move = document.querySelector("#move");

window.addEventListener("scroll", function () {
    if (scrollY >= 566) {
        about.classList.add("active");
        home.classList.remove("active");
    } else if (scrollY >= 450){
        move.classList.remove("move");
    } else if (scrollY >= 2070) {
        services.classList.add("active");
        about.classList.remove("active");
    } else {
        about.classList.remove("active");
        home.classList.add("active");
        move.classList.add("move");
    }
})
let moveSer = document.querySelector("#move-ser");
let headServices = document.querySelector("#heading");
let imageVideo = document.querySelector(".video img");


window.addEventListener("scroll", function () {
    if (scrollY >= 1300) {
        services.classList.add("active");
        about.classList.remove("active");
        imgOerLay.classList.add("hide");
        moveSer.classList.remove("move");
        imageVideo.classList.remove("hide-image-video");
    } else {
        services.classList.remove("active");
        imgOerLay.classList.remove("hide");
        moveSer.classList.add("move");
        imageVideo.classList.add("hide-image-video");
    }
})
window.addEventListener("scroll", function () {
    if (this.scrollY >= 980) {
        headServices.classList.remove("up");
    } else {
        headServices.classList.add("up");
    }
})

let iconPlay = document.querySelector(".video i");
let divVideo = document.querySelector(".video-Introducing");
let iconClose = document.querySelector(".video-Introducing i");
let video = document.querySelector("video");
iconPlay.addEventListener("click", function () {
    divVideo.classList.remove("show");
});

iconClose.addEventListener("click", function () {
    divVideo.classList.add("show");
    video.pause();
});

let team = document.querySelector("#team-list");
window.addEventListener("scroll", function () {
    if (scrollY >= 2530) {
        team.classList.add("active");
        this.document.querySelector(".team .container").classList.remove("down");
        services.classList.remove("active");
    } else {
        team.classList.remove("active");
        this.document.querySelector(".team .container").classList.add("down");
    }
})

window.addEventListener("scroll", function () {
    if (scrollY >= 3000) {
        document.querySelector(".digital  img").classList.remove("hide");
        imageVideo.classList.add("hide-image-video");
    } else {
        document.querySelector(".digital img").classList.add("hide");
    }
});

// up to home page button 
let btn = document.querySelector(".up-home");
window.addEventListener("scroll", function () {
    if (scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
    btn.addEventListener("click", function () {
        scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        })
    })
});


let works = document.querySelector("#works-list");
let imgMove = document.querySelector("#img-move");

window.addEventListener("scroll", function () {
    if (scrollY >= 5750) {
        team.classList.remove("active");
        works.classList.add("active");
    } else if (scrollY >= 5600) {
        imgMove.classList.remove("img-move");
    } else {
        works.classList.remove("active");
        imgMove.classList.add("img-move");
    }
});
let price = document.querySelector("#prices-list");
window.addEventListener("scroll", function () {
    if (scrollY >= 6800) {
        price.classList.add("active");
        works.classList.remove("active");
    } else {
        price.classList.remove("active");
    }
});
let sub = document.querySelector("#subscribe-list");
let contact = document.querySelector("#contact-list");
window.addEventListener("scroll", function () {
    if (scrollY >= 7950) {
        sub.classList.add("active")
        price.classList.remove("active");
    } else {
        sub.classList.remove("active")
    }
});

window.addEventListener("scroll", function () {
    if (scrollY >= 8950) {
        contact.classList.add("active");
        sub.classList.remove("active");
    } else {
        contact.classList.remove("active");
    }
});