const hero = document.getElementById("hero");

hero.addEventListener("mouseenter", () => {
  hero.classList.add("active");
});


const activitySection = document.getElementById("activitySection");

activitySection.addEventListener("mouseenter", () => {
  activitySection.classList.add("active");
});


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



const cardsContainer = document.getElementById("cardsContainer");
const benefitsSection = document.getElementById("benefits");

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


benefitsSection.addEventListener("mouseenter", () => {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.add("show");
  });
});


const statsData = [
  {
    icon: "imgs/risk.png",
    value: 50,
    suffix: "%",
    title: "Reduced Risk",
    subtitle: "Lower risk of cardiovascular disease with regular activity"
  },
  {
    icon: "imgs/adults.png",
    value: 80,
    suffix: "%",
    title: "Adults Inactive",
    subtitle: "Of adults worldwide don't meet minimum activity guidelines"
  },
  {
    icon: "imgs/min.png",
    value: 150,
    suffix: "min",
    title: "Weekly Goal",
    subtitle: "Recommended moderate-intensity exercise per week"
  },
  {
    icon: "imgs/mood.png",
    value: 30,
    suffix: "%",
    title: "Better Mood",
    subtitle: "Improvement in mental health symptoms with exercise"
  }
];

const statsContainer = document.getElementById("statsContainer");
const section = document.getElementById("evidence");
let animated = false;

statsData.forEach((stat, index) => {
  const div = document.createElement("div");
  div.className = "stat";
  div.style.transitionDelay = `${index * 0.15}s`;

  div.innerHTML = `
    <div class="stat-icon">
      <img src="${stat.icon}" alt="${stat.title}">
    </div>

    <div class="stat-value" data-target="${stat.value}">
      0${stat.suffix}
    </div>

    <h4 class="stat-title">${stat.title}</h4>
    <p class="stat-subtitle">${stat.subtitle}</p>
  `;

  statsContainer.appendChild(div);
});

section.addEventListener("mouseenter", () => {
  if (animated) return;
  animated = true;

  section.classList.add("show");
  startCounters();
});

function startCounters() {
  document.querySelectorAll(".stat-value").forEach(el => {
    const target = +el.dataset.target;
    const suffix = el.textContent.replace(/\d/g, "");
    let count = 0;

    const interval = setInterval(() => {
      count++;
      el.textContent = `${count}${suffix}`;

      if (count >= target) {
        el.textContent = `${target}${suffix}`;
        clearInterval(interval);
      }
    }, 15);
  });
}


const journeyFeaturesData = [
  {
    title: "Make It Social",
    description:
      "Exercise with friends, join classes, or participate in community events to stay motivated"
  },
  {
    title: "Track Your Progress",
    description:
      "Monitor improvements in energy, mood, and physical abilities to see your growth"
  },
  {
    title: "Celebrate Consistency",
    description:
      "Focus on building sustainable habits rather than pursuing perfection"
  }
];

const journeyFeaturesContainer = document.getElementById("journey-features");

journeyFeaturesData.forEach(feature => {
  const div = document.createElement("div");
  div.className = "journey-feature";

  div.innerHTML = `
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  `;

  journeyFeaturesContainer.appendChild(div);
});


