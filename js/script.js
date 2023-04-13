const header_content = document.querySelector(".page-header-content")
const statistics_element = document.querySelector(".statistics")
const challenges_element = document.querySelector(".challenges-element-main-text")
const courses_element = document.querySelector(".course-cards")
const about_us = document.querySelector(".about-us")
const why_us = document.querySelector(".why-us")
const nav_item = document.querySelectorAll(".nav-item")
const users_comments = document.querySelector(".users-comments")

const scrollIntroViewElements = [header_content, courses_element, about_us, users_comments]

setTimeout( ()=> {
    header_content.classList.add("scrolled")
}, 100 )


function scroll_animation_handler(element) {
    const scale_item_position = element.offsetTop;
    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset + window.innerHeight - 180;
        if (scrollPosition >= scale_item_position) {
            element.classList.add("scrolled")
        }
    });
}

scroll_animation_handler(statistics_element)
scroll_animation_handler(challenges_element)
scroll_animation_handler(courses_element)
scroll_animation_handler(about_us)
scroll_animation_handler(why_us)

nav_item.forEach((item, index) => {
    item.addEventListener("click", ()=> {
        scrollIntroViewElements[index].scrollIntoView({
            behavior: "smooth"
        })
        nav_item.forEach(active_item => {
            if (active_item.classList.contains("active")) {
                active_item.classList.remove("active")
            }
        })
        item.classList.add("active")
    })
})

