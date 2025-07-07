// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn")
  const nav = document.querySelector(".nav")

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open")
      nav.classList.toggle("open")
    })
  }

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("open")
      nav.classList.remove("open")
    })
  })

  // Active Navigation Link based on scroll position
  function setActiveNavLink() {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")

    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  }

  // Back to Top Button
  const backToTopBtn = document.querySelector(".back-to-top")

  function toggleBackToTopBtn() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show")
    } else {
      backToTopBtn.classList.remove("show")
    }
  }

  // Scroll Animations
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  function checkScroll() {
    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.classList.add("show")
      }
    })
  }

  // Initialize Skill Progress Bars
  function initSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress-bar")

    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width")
      bar.style.width = width + "%"
    })
  }

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block"
        } else if (card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Event Listeners
  window.addEventListener("scroll", () => {
    setActiveNavLink()
    toggleBackToTopBtn()
    checkScroll()
  })

  // Initialize functions
  setActiveNavLink()
  toggleBackToTopBtn()
  checkScroll()
  initSkillBars()
})
