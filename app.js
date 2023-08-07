// Tabs
const tabs = document.querySelectorAll("section > div:first-of-type span")
const content = [
    {
        Image: "images/illustration-features-tab-1.svg",
        Title: "Bookmark in one click",
        Paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you completecontrol over how you manage your favourite sites."
    },
    {
        Image: "images/illustration-features-tab-2.svg",
        Title: "Intelligent search",
        Paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        Image: "images/illustration-features-tab-3.svg",
        Title: "Share your bookmarks",
        Paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
]

tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
        const Tab = event.target
        const tabIndex = Array.from(tabs).indexOf(Tab)
        const Image = document.querySelector("section > main > div img")
        const Title = document.querySelector("section > main > div div h3")
        const Paragraph = document.querySelector("section > main > div div p")

        tabs.forEach(Tab => Tab.classList.remove("active"))
        tabs[tabIndex].classList.add("active")

        Image.src = content[tabIndex].Image
        Title.textContent = content[tabIndex].Title
        Paragraph.textContent = content[tabIndex].Paragraph
    })
})

// FAQ
const FAQ = document.querySelectorAll("article main > div > div > h6");
const Arrow = document.querySelectorAll("article main > div > div > h6 img")
const Text = document.querySelectorAll("main > div > div > p");

FAQ.forEach((faq) => {
    faq.addEventListener("click", (event) => {
        const clicked = event.target.nextElementSibling
        const arrow = event.target.firstElementChild

        Text.forEach(text => {
            if (text !== clicked) {
                text.classList.remove("active")
            }
        })

        Arrow.forEach(image => {
            if (image !== arrow) {
                image.classList.remove("active")
            }
        })

        clicked.classList.toggle("active")
        arrow.classList.toggle("active")
    })
})

// Email Validator
const Email = document.querySelector("footer main > div > div .input input")
const ErrorMessage = document.querySelector("footer main > div > div .input")
const Submit = document.querySelector("footer main > div > div button")

function checkEmailAddress() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(Email.value)
}

function showErrorMessage() {
    ErrorMessage.classList.add("active")

    setTimeout(() => {
        ErrorMessage.classList.remove("active")
    }, 5000)
}

function checkEmail() {
    if (checkEmailAddress()){
        return
    } else {
        showErrorMessage()
    }
}

Submit.addEventListener("click", checkEmail)

// Navbar Menu
const navbar = document.querySelector("header nav")
const menu = document.querySelector(".menu")
const closeNav = document.querySelector(".close")

function openNavbar() {
    navbar.classList.add("active")
    document.body.style.overflow = "hidden"
}

function closeNavbar() {
    navbar.classList.remove("active")
    document.body.style.overflow = "visible"
}

menu.onclick = openNavbar
closeNav.onclick = closeNavbar
window.onresize = closeNavbar