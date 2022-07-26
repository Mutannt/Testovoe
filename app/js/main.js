// const btns = document.querySelectorAll("*[data-popup-btn]");

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         let namePopup = btns[i].getAttribute("data-popup-btn");
//         let popup = document.querySelector("[data-popup-window='" + namePopup + "']");
//         popup.style.display = "block";
//         // popupOpen(popup);
//         // e.preventDefault();
//     }); 
// }

// window.onclick = function (event) {
//     if (event.target.hasAttribute('data-modal-window')) {
//       let modals = document.querySelectorAll('*[data-modal-window]');
//       for (let i = 0; i < modals.length; i++) {
//         modals[i].style.display = "none";
//       }
//     }
// }



const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

let timeout = 800;

// На все объекты с классом .popup-link повесить событие click
if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".popup-close");

// На все объекты с классом .close-popup повесить событие click
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        });
    }
}

function popupOpen (currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");
        if (popupActive) {
            popupClose(popupActive, false);
        }
        // else {
        //     bodyLock();
        // }
        currentPopup.classList.add("open");
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup__content")) {
                popupClose(e.target.closest(".popup"));
            }
        });
        
    }
}

function popupClose(popupActive, doUnlock=true) {
    if (unlock) {
        popupActive.classList.remove("open");
        // if (doUnlock) {
        //     bodyUnlock();
        // }
    }
}

const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector("#form");
const btn = document.querySelector("#Go");

form.addEventListener("submit", () => {
    document.querySelector(".popup2").classList.add("open");
});

btn.addEventListener("click", (e)=>Submit(e));

function Submit (e) {
    if(fullName.value == "") {
        fullName.classList.add("is-invalid");
    }
    else {
        fullName.classList.remove("is-invalid");
        fullName.classList.add("is-valid");
    }

    if(email.value == "") {
        email.classList.add("is-invalid");
    }
    else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }

    if(message.value == "") {
        message.classList.add("is-invalid");
    }
    else {
        message.classList.remove("is-invalid");
        message.classList.add("is-valid");
    }

    const valid = form.querySelectorAll(".is-invalid");
    if (valid.length > 0) {
        e.preventDefault();
    }
}