const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPrecents = [95, 85, 80, 75, 80, 85, 70, 65, 75, 78, 85, 70, 85, 90]

window.addEventListener('scroll', () => {
    mainFn()
})

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

const mainFn = () => {
    if (window.scrollY + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBarPrecents[i]}%`
            el.previousElementSibling.firstElementChild.textContent = progressBarPrecents[i]
        })
    }
}

mainFn()








