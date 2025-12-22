// HERO SECTION
const hero = document.getElementById("hero");

hero.addEventListener("mouseenter", () => {
  hero.classList.add("active");
});


// ACTIVITY SECTION
const activitySection = document.getElementById("activitySection");

activitySection.addEventListener("mouseenter", () => {
  activitySection.classList.add("active");
});


// BENEFITS CARDS DATA
const cardsData = [
  {
    icon: "imgs/card1.png",
    cardClass: "physical",
    title: "Physical Health",
    text:
      "Strengthens heart and lungs, improves circulation, builds muscle and bone density, and maintains healthy weight."
  },
  {
    icon: "imgs/card2.png",
    cardClass: "mental",
    title: "Mental Well-being",
    text:
      "Reduces stress and anxiety, improves mood, enhances cognitive function, and promotes better sleep quality."
  },
  {
    icon: "imgs/card3.png",
    cardClass: "energy",
    title: "Energy & Productivity",
    text:
      "Boosts daily energy levels, increases focus and concentration, enhances work performance, and improves stamina."
  },
  {
    icon: "imgs/card4.png",
    cardClass: "disease",
    title: "Disease Prevention",
    text:
      "Reduces risk of chronic diseases, strengthens immune system, lowers blood pressure, and improves longevity."
  }
];



// BENEFITS SECTION
const cardsContainer = document.getElementById("cardsContainer");
const benefitsSection = document.getElementById("benefits");

// CREATE CARDS
cardsData.forEach((card, index) => {
  const div = document.createElement("div");
div.className = `card ${card.cardClass}`;
  div.style.transitionDelay = `${index * 0.15}s`;

div.innerHTML = `
  <div class="icon">
    <img src="${card.icon}" alt="${card.title}">
  </div>
  <h3>${card.title}</h3>
  <p>${card.text}</p>
`;


  cardsContainer.appendChild(div);
});


// ANIMATION ON MOUSE ENTER
benefitsSection.addEventListener("mouseenter", () => {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.add("show");
  });
});


// section4
const statsData = [
  {
    icon: "📈",
    value: 50,
    suffix: "%",
    title: "Reduced Risk",
    subtitle: "Lower risk of cardiovascular disease"
  },
  {
    icon: "👥",
    value: 80,
    suffix: "%",
    title: "Adults Inactive",
    subtitle: "Do not meet minimum activity guidelines"
  },
  {
    icon: "⏱",
    value: 150,
    suffix: "min",
    title: "Weekly Goal",
    subtitle: "Moderate-intensity exercise"
  },
  {
    icon: "🏅",
    value: 30,
    suffix: "%",
    title: "Better Mood",
    subtitle: "Mental health improvement"
  }
];

const statsContainer = document.getElementById("statsContainer");
const section = document.getElementById("evidence");
let animated = false;

/* CREATE STATS */
statsData.forEach(stat => {
  const div = document.createElement("div");
  div.className = "stat";

  div.innerHTML = `
    <div class="stat-icon">${stat.icon}</div>
    <h3><span class="number">0</span>${stat.suffix}</h3>
    <h4>${stat.title}</h4>
    <p>${stat.subtitle}</p>
  `;

  div.dataset.value = stat.value;
  statsContainer.appendChild(div);
});

/* ANIMATION TRIGGER */
section.addEventListener("mouseenter", () => {
  if (animated) return;
  animated = true;

  section.classList.add("show");
  startCounters();
});

/* COUNTER */
function startCounters() {
  document.querySelectorAll(".stat").forEach(stat => {
    const target = +stat.dataset.value;
    const numberEl = stat.querySelector(".number");
    let count = 0;

    const interval = setInterval(() => {
      count++;
      numberEl.textContent = count;
      if (count >= target) clearInterval(interval);
    }, 15);
  });
}



