const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.querySelector("body");
let isMenuOpen = false;

function open() {
  isMenuOpen = true;
  mobileMenu.classList.toggle("open");
}

function close(e) {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove("open");
    setTimeout(() => {
      header.classList.add("overflow-x-hidden");
    }, 300);
    isMenuOpen = false;
  }
}

menuBtn.addEventListener("click", () => {
  open();
  console.log(isMenuOpen);
});

document.addEventListener("click", (e) => {
  if (isMenuOpen === false) {
    return;
  } else {
    close(e);
    console.log(isMenuOpen);
  }
});

const projectArray = [
  {
    title: "Recipe App",
    tech: ["HTML", "JavaScript", "Tailwind CSS", "Fetch API"],
    image: "image/recipe-app.png",
    github: "https://github.com/eelkrammm/recipe_app",
    website: "https://eelkrammm.github.io/recipe_app/",
  },
  {
    title: "Pomdoro Converter",
    tech: ["HTML", "CSS", "React Js"],
    image: "image/pomodoro-timer.png",
    github: "https://github.com/eelkrammm/pomodoro-timer",
    website: "https://pomodoro-timer-eelkrammm.vercel.app/",
  },
  {
    title:
      "[freeCodeCamp Front End Libraries Certification] One Time Password Generator",
    tech: ["HTML", "CSS", "React Js"],
    image: "image/one-time-password-generator.png",
    github: "https://github.com/eelkrammm/one-time-password-generator",
    website: "https://one-time-password-generator.vercel.app/",
  },
  {
    title:
      "[freeCodeCamp JavaScript Certification Project V9] Build A Weather App",
    tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
    image: "image/weather-app.png",
    github: "https://github.com/eelkrammm/weather-app",
    website: "https://eelkrammm.github.io/weather-app/",
  },
  {
    title:
      "[freeCodeCamp JavaScript Certification Project V8]  RPG Creature Search App",
    tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
    image: "image/rpg-creature-search-app.png",
    github: "https://github.com/eelkrammm/rpg-creature-search-app",
    website: "https://eelkrammm.github.io/rpg-creature-search-app/",
  },
  {
    title:
      "[freeCodeCamp JavaScript Certification Project V8] Roman Numeral Converter",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/roman-numeral-converter.png",
    github: "https://github.com/eelkrammm/roman-numeral-converter",
    website: "https://eelkrammm.github.io/roman-numeral-converter/",
  },
  {
    title:
      "[freeCodeCamp JavaScript Certification Project V8] Cash Register App",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/cash-register-app.png",
    github: "https://github.com/eelkrammm/cash-register",
    website: "https://eelkrammm.github.io/cash-register/",
  },
  {
    title:
      "[freeCodeCamp JavaScript Certification Project V8] Telephone Number Validator",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/telephone-number-validator.png",
    github: "https://github.com/eelkrammm/telephone-number-validator",
    website: "https://eelkrammm.github.io/telephone-number-validator/",
  },
  {
    title:
      "[freeCodeCamp JavaScript Certification Project V9] Build a Drum Machine",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    image: "image/drum-machine.png",
    github: "https://github.com/eelkrammm/drum-machine-fcc",
    website: "https://eelkrammm.github.io/drum-machine-fcc/",
  },
  {
    title:
      "[freeCodeCamp JavaScript Certification V9 Build a Bookmark Manager App",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/boorkmark-manager.png",
    github:
      "https://github.com/eelkrammm/freecodecamp-build-a-bookmark-manager-app",
    website:
      "https://eelkrammm.github.io/freecodecamp-build-a-bookmark-manager-app/",
  },
  {
    title: "[freeCodeCamp JavaScript Certification V9] Customer Complain Form",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/customer-complaint-form.png",
    github: "https://github.com/eelkrammm/customer-complaint-form",
    website: "https://eelkrammm.github.io/customer-complaint-form/",
  },
  {
    title:
      "[freeCodeCamp JavaScript Certification V9] Markdown to HTML Converter",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/markdown-to-html-converter.png",
    github: "https://github.com/eelkrammm/markdown-to-html-converter",
    website: "https://eelkrammm.github.io/markdown-to-html-converter/",
  },
  {
    title: "[freeCodeCamp JavaScript Certification V9] Regex Sandbox",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/regex-sandbox.png",
    github: "https://github.com/eelkrammm/regex-sandbox",
    website: "https://eelkrammm.github.io/regex-sandbox/",
  },
  {
    title: "[freeCodeCamp JavaScript Certification V9] Palindrome Checker",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/palindrome-checker.png",
    github: "https://github.com/eelkrammm/palindrome-checker",
    website: "https://eelkrammm.github.io/palindrome-checker/",
  },
  {
    title: "[freeCodeCamp JavaScript Certification V9] Light Box Viewer",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/lightbox-viewer.png",
    github: "https://github.com/eelkrammm/lightbox-viewer",
    website: "https://eelkrammm.github.io/lightbox-viewer/",
  },
  {
    title: "[freeCodeCamp JavaScript Certification V9] Real Time Counter",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "image/real-time-counter.png",
    github: "https://github.com/eelkrammm/real-time-counter",
    website: "https://eelkrammm.github.io/real-time-counter/",
  },
];

const projectContainer = document.getElementById("projects-container");

const generateProjects = () => {
  const htmlContent = projectArray
    .map((project) => {
      const techStack = project.tech
        .map(
          (t) =>
            `<span class="bg-pink-300 backdrop-blur-md rounded-3xl p-1">${t}</span>`,
        )
        .join("");
      return `
      <div class="project">
        <img
          src="${project.image}"
          class="rounded-sm shadow-sm h-1/2 object-cover w-full"
        />
        <p class="title-project text-sm font-semibold text-justify mt-3 cursor-pointer">
          ${project.title}
        </p>
        <div class="text-[10px] flex flex-row flex-wrap gap-2 items-center">
          ${techStack}
        </div>
        <p class="text-sm cursor-pointer font-semibold text-blue-800 hover:underline hover:underline-offset-4 mt-2">
          <a href="${project.github}" target="_blank">Read More</a>
        </p>
        <p class="text-sm cursor-pointer font-semibold text-blue-800 hover:underline hover:underline-offset-4">
          <a href="${project.website}" target="_blank">Visit The Website</a>
        </p>
      </div>
    `;
    })
    .join("");

  projectContainer.innerHTML = htmlContent;
};

generateProjects();

const certArray = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    image: "image/responsive-web-design.jpg",
    link: "https://www.freecodecamp.org/certification/ppadinda/responsive-web-design-v9",
    achievements: [
      "Mastered HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.",
      "Built various web projects, including landing pages, survey forms, and personal portfolio websites.",
      "Completed 5 certification projects.",
    ],
  },
  {
    title: "Legacy JavaScript Algorithms dan Data Structures V8",
    issuer: "freeCodeCamp",
    image: "image/javascript.jpg",
    link: "https://www.freecodecamp.org/certification/ppadinda/javascript-algorithms-and-data-structures-v8",
    achievements: [
      "Learned JavaScript programming fundamentals, including variables, functions, arrays, objects, and conditional logic.",
      "Developed interactive website features through DOM manipulation and event handling.",
      "Implemented form validation, basic calculations, and dynamic content rendering.",
      "Completed JavaScript-based projects as practical implementation exercises.",
    ],
  },
];

const certContainer = document.getElementById("certifications-wrapper");

const generateCerts = () => {
  const htmlContent = certArray
    .map((cert) => {
      const achievementList = cert.achievements
        .map((item) => `<li>-${item}</li>`)
        .join("");

      return `
      <div class="cert-card">
      <div class="cert-title-wrapper">
       <a href="${cert.image}" target="_blank">
          <img 
            src="${cert.image}" 
            alt="${cert.title}" 
            class="certification-image"
          />
        </a>

          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
      </div>
       
        
        <div class="cert-description flex flex-col gap-5">

          <div >
            <p class="key-learning">Key Learning:</p>
            <ul class="flex flex-col gap-2">
              ${achievementList}
            </ul>
          </div>

          <a 
            href="${cert.link}" 
            target="_blank"
            class="credential"
          >
            Verify Credential
          </a>
       
        </div>
        
      </div>
    `;
    })
    .join("");

  certContainer.innerHTML = htmlContent;
};

generateCerts();
