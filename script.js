var tl = gsap.timeline();



function loadingAnimation() {
    tl.from(".line h1", {
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6
    });

    tl.from("#line1-part1, .line h2", {
        opacity: 0,
        onStart: function () {
            var h5 = document.querySelector("#line1-part1 h5");
            var grow = 0;

            setInterval(function () {
                if (grow < 100) {
                    h5.innerHTML = grow++;
                } else {
                    h5.innerHTML = 100;
                }
            }, 10);
        },
    });

    tl.to("#loader", {
        opacity: 0,
        duration: 2.5,
        delay: 1
    });

    tl.from("#nav", {
        opacity: 0
    });

    tl.from("#page1", {
        x: 500,
        opacity: 0,
        ease: Power4,
        duration: 0.1
    });
  
    tl.to("#loader", {
        display: "none"
    });

    tl.from(".nav-line", {
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5
    });
    
}

loadingAnimation();




Shery.makeMagnet("#nav-part2 h1", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});


document.getElementById("download-resume").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1h9-PZTikEliDn0-eH4ykxWaADJetkirx";
    link.download = "Herin_Soni_Resume.pdf";
    link.click();
});

document.querySelectorAll("#skills h4").forEach(function (element) {
    element.addEventListener("click", function () {
        let skill = element.innerText;

        switch (skill) {
            case "Django":
                window.location.href = "https://www.djangoproject.com/";
                break;
            case "React js":
                window.location.href = "https://reactjs.org/";
                break;
            case "Google Cloud":
                window.location.href = "https://cloud.google.com/";
                break;
            case "Projects":
                window.location.href = "https://github.com/herin7";
                break;
            case "SQL":
                window.location.href = "https://www.w3schools.com/sql/";
                break;
            case "Github":
                window.location.href = "https://github.com/";
                break;
            case "CS50":
                window.location.href = "https://certificates.cs50.io/03881be8-7df2-4bc5-9548-7d7cb4a61699.pdf?size=letter";
                break;
            default:
                console.log("No URL defined for " + skill);
        }
    });
});

document.querySelectorAll("#page4-blue .blue-div-elem h4").forEach(function (element) {
    element.addEventListener("click", function () {
        let projectName = element.innerText;

        switch (projectName) {
            case "Crypto Platform":
                window.location.href = "https://example.com/crypto-platform";
                break;
            case "ChecEat-Food campanion":
                if (element.nextElementSibling.innerText.includes("Perishable Items")) {
                    window.location.href = "https://github.com/herin7/bb4_django";
                } else if (element.nextElementSibling.innerText.includes("Job Recommendations")) {
                    window.location.href = "https://github.com/herin7/bb4_django";
                }
                break;
            case "CareerSetGo":
                window.location.href = "https://github.com/shalvirajpura2/CareerSetGo";
                break;
            default:
                console.log("No URL defined for " + projectName);
        }
    });
});

document.querySelectorAll("#footer .box h5").forEach(function (element) {
    element.addEventListener("click", function () {
        let text = element.innerText;

        switch (text) {
            case "LinkedIn":
                window.open("https://www.linkedin.com/in/herinsoni", "_blank");
                break;
            case "GitHub":
                window.open("https://github.com/herin7", "_blank");
                break;
            case "Instagram":
                window.open("https://www.instagram.com/herinsoni_", "_blank");
                break;
            case "herinsoni1818@gmail.com":
                window.location.href = "mailto:herinsoni1818@gmail.com";
                break;
            default:
                console.log("No action defined for " + text);
        }
    });
});


