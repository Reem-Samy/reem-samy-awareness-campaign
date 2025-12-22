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


