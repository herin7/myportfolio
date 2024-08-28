
var tl = gsap.timeline()
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadingAnimation() {
    


tl.from(".line h1", {
    y: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6
})



tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: function () {
        var h5 = document.querySelector("#line1-part1 h5");
        var grow = 0;

        setInterval(function () {

            if (grow < 100) {
                h5.innerHTML = grow++;
            }
            else {
                h5.innerHTML = 100
            }
           
        },10)
    },
})
tl.to("#loader", {
    opacity: 0,
    duration: 1.5,
    delay: 0
})
tl.from("#nav",{
    opacity:0
})
tl.from("#page1", {
    y:1200,
    opacity:0,
    ease:Power4,
    duration: 0.5
})
tl.to("#loader",{
    display: "none"
})
tl.from(".nav-line", {
    y: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6
})
tl.from(".hero h1,.hero h2,.hero h3",{
    y: 100,
    stagger:0.2,
    duration: 0.
})
}




loadingAnimation();


function cursorAnimation() {
   
    document.addEventListener('mousemove',function(dets){
        console.log(dets.x);
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
            ease: Power4
        })
    })
    
    
    Shery.makeMagnet("#nav-part2 h1" /* Element to target.*/, {
    
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    
}


locomotiveAnimation();

function sheryAnimation() {
        Shery.imageEffect(".image-div",{
            style:5,
            gooey:true 
        })
}

sheryAnimation();
document.querySelectorAll("#skills h4").forEach(function(element) {
    element.addEventListener("click", function() {
        let skill = element.innerText;

        switch(skill) {
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
                window.location.href = "https://github.com/herinsoni"; // Example URL for projects
                break;
            case "GIT/Github":
                window.location.href = "https://github.com/";
                break;
            case "SQL":
                window.location.href = "https://www.w3schools.com/sql/";
                break;
            case "Github":
                window.location.href = "https://github.com/";
                break;
            case "CS50":
                window.location.href = "https://cs50.harvard.edu/";
                break;
            default:
                console.log("No URL defined for " + skill);
        }
    });
});


document.querySelectorAll("#page4-blue .blue-div-elem h4").forEach(function(element) {
    element.addEventListener("click", function() {
        let projectName = element.innerText;

        switch(projectName) {
            case "Crypto Platform":
                
                window.location.href = "https://example.com/crypto-platform";
                break;
            case "ChecEat-Food campanion":
                if (element.nextElementSibling.innerText.includes("Perishable Items")) {
                    window.location.href = "https://example.com/checeat-food-companion";
                } else if (element.nextElementSibling.innerText.includes("Job Recommendations")) {
                    window.location.href = "https://example.com/checeat-job-recommendations";
                }
                break;
            case "CareerSetGo":
                window.location.href = "https://example.com/careersetgo";
                break;
            default:
                console.log("No URL defined for " + projectName);
        }
    });
});


document.querySelectorAll("#footer .box h5").forEach(function(element) {
    element.addEventListener("click", function() {
        let text = element.innerText;

        switch(text) {
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


document.getElementById("video-cursor").addEventListener("click", function() {
    var video = document.getElementById("video-player");

    if (video.paused) {
        video.play();
        this.style.display = "none"; // Hide the play icon after the video starts
    } else {
        video.pause();
        this.style.display = "block"; // Show the play icon if the video is paused again
    }
});
