const deck=[
// Major Arcana (22 cards)
["The Fool","00-TheFool","0","A beginning, freedom, curiosity, and a leap into possibility.","Recklessness, hesitation, or moving ahead without considering consequences."],
["The Magician","01-TheMagician","I","Manifestation, skill, focused action, and using the resources already available.","Scattered energy, manipulation, or abilities that are not being used well."],
["The High Priestess","02-TheHighPriestess","II","Intuition, mystery, inner knowledge, and allowing hidden information to surface.","Disconnection from intuition, secrecy, or ignoring an inner warning."],
["The Empress","03-TheEmpress","III","Abundance, creativity, nurture, growth, and creating conditions for things to flourish.","Neglect, creative block, overgiving, or forgetting your own needs."],
["The Emperor","04-TheEmperor","IV","Structure, authority, stability, boundaries, and responsible leadership.","Control, rigidity, domination, or a structure that has become restrictive."],
["The Hierophant","05-TheHierophant","V","Tradition, teaching, shared knowledge, guidance, and established systems.","Questioning tradition, rebellion, or finding an unconventional path."],
["The Lovers","06-TheLovers","VI","Connection, meaningful choice, alignment, and acting according to your values.","Disharmony, misalignment, difficult choices, or communication problems."],
["The Chariot","07-TheChariot","VII","Determination, direction, momentum, and victory through disciplined focus.","Loss of direction, frustration, scattered effort, or forcing progress."],
["Strength","08-Strength","VIII","Courage, compassion, patience, self-trust, and quiet inner power.","Self-doubt, insecurity, depleted confidence, or reacting from fear."],
["The Hermit","09-TheHermit","IX","Reflection, solitude, wisdom, and stepping away from noise to find your own answer.","Isolation, avoidance, withdrawal, or staying alone longer than necessary."],
["Wheel of Fortune","10-WheelOfFortune","X","Change, cycles, opportunity, and circumstances turning in a new direction.","Resistance, repeating patterns, or difficulty adapting to change."],
["Justice","11-Justice","XI","Truth, balance, accountability, clarity, and fair consequences.","Bias, imbalance, denial, or avoiding responsibility."],
["The Hanged Man","12-TheHangedMan","XII","Pause, surrender, perspective, and seeing a situation from a different angle.","Stagnation, resistance, or refusing the perspective change that is needed."],
["Death","13-Death","XIII","Transformation, endings, renewal, and making space for a new phase.","Resistance to change, attachment, or holding onto what has already ended."],
["Temperance","14-Temperance","XIV","Balance, healing, patience, moderation, and integrating different parts of life.","Excess, imbalance, impatience, or difficulty finding a sustainable middle path."],
["The Devil","15-TheDevil","XV","Attachment, desire, shadow patterns, and noticing what has gained too much power.","Release, liberation, awareness, and loosening the grip of an unhealthy pattern."],
["The Tower","16-TheTower","XVI","Disruption, revelation, sudden change, and clearing away an unstable foundation.","Avoidance, delayed change, or trying to preserve something already unstable."],
["The Star","17-TheStar","XVII","Hope, renewal, inspiration, authenticity, and a return of faith in the future.","Discouragement, doubt, low energy, or difficulty recognizing progress."],
["The Moon","18-TheMoon","XVIII","Uncertainty, dreams, subconscious material, intuition, and incomplete information.","Confusion clearing, revelation, or fears becoming easier to identify."],
["The Sun","19-TheSun","XIX","Joy, clarity, vitality, openness, confidence, and positive momentum.","Delayed joy, temporary clouds, or difficulty fully receiving something positive."],
["Judgement","20-Judgement","XX","Awakening, realization, renewal, and answering a call to grow.","Self-judgement, avoidance, or resisting an important realization."],
["The World","21-TheWorld","XXI","Completion, integration, achievement, and recognizing the end of a meaningful cycle.","Incomplete cycles, loose ends, or something almost—but not quite—finished."],

// Minor Arcana - Suit of Wands (14 cards)
["Ace of Wands","Wands01","A","Inspiration, creative spark, new passion, enthusiasm, and bold initiative.","Delays, lack of direction, creative block, burnout, or ungrounded energy."],
["Two of Wands","Wands02","2","Future planning, decisions, personal power, discovery, and looking beyond the horizon.","Fear of the unknown, bad planning, playing it too safe, or feeling restricted."],
["Three of Wands","Wands03","3","Expansion, foresight, momentum, waiting for ships to come in, and confident growth.","Obstacles, delays, disappointment, or frustration with slow progress."],
["Four of Wands","Wands04","4","Celebration, harmony, homecoming, community, and solid milestones.","Tension at home, cancelled celebrations, feeling unwelcome, or transient instability."],
["Five of Wands","Wands05","5","Competition, minor friction, conflict of ideas, banter, and creative rivalry.","Avoiding necessary confrontation, escalating conflict, or inner turbulence."],
["Six of Wands","Wands06","6","Success, public recognition, confidence, victory, and encouragement.","Egotism, fall from grace, lack of recognition, or seeking hollow validation."],
["Seven of Wands","Wands07","7","Perseverance, standing your ground, defending boundaries, and resilience against opposition.","Exhaustion, giving up, feeling overwhelmed, or stubborn overdefensiveness."],
["Eight of Wands","Wands08","8","Rapid movement, swift communications, sudden developments, travel, and clear alignment.","Panic, delays, miscommunication, scattered focus, or moving before you are ready."],
["Nine of Wands","Wands09","9","Resilience, stamina, near the finish line, guarding what matters, and grit.","Fatigue, paranoia, defensive exhaustion, or carrying burdens past their need."],
["Ten of Wands","Wands10","10","Heavy responsibility, overload, burning the candle at both ends, and carrying the weight.","Delegating, breaking down under strain, releasing unneeded burdens, or stubborn martyrdom."],
["Page of Wands","Wands11","P","Curiosity, fresh ideas, adventurous spirit, messages of excitement, and enthusiastic beginnings.","Impatience, self-doubt, unreliable enthusiasm, or starting without following through."],
["Knight of Wands","Wands12","Kn","Daring action, charismatic drive, pursuit of vision, adventure, and passionate energy.","Recklessness, volatility, impatience, scattered pursuits, or burning out quickly."],
["Queen of Wands","Wands13","Q","Radiant confidence, warmth, independence, vibrant leadership, and fierce creative vitality.","Insecurity, jealousy, demanding attitude, burnout, or dimmed self-belief."],
["King of Wands","Wands14","K","Visionary leadership, mastery, empowering others, high ambition, and inspiring integrity.","Tyranny, overbearing demands, ruthless impatience, or unrealistic expectations."],

// Minor Arcana - Suit of Cups (14 cards)
["Ace of Cups","Cups01","A","Emotional opening, love, intuition, compassion, and the pouring of heartfelt renewal.","Emotional drain, repressed feelings, blocked intuition, or guarded vulnerability."],
["Two of Cups","Cups02","2","Mutual respect, deep partnership, harmony, heartfelt reciprocity, and shared understanding.","Miscommunication, imbalance in giving, disconnection, or broken trust."],
["Three of Cups","Cups03","3","Friendship, celebration, sisterhood/brotherhood, creative collaboration, and joyful reunion.","Gossip, social fatigue, exclusion, overindulgence, or disconnected community."],
["Four of Cups","Cups04","4","Apathy, contemplation, withdrawal, emotional stagnation, and overlooking an offered gift.","Awakening from numbness, new perspective, renewed interest, and accepting support."],
["Five of Cups","Cups05","5","Grief, regret, focusing on what was lost, disappointment, and mourning an old chapter.","Acceptance, healing, forgiving the past, and noticing the two cups still standing."],
["Six of Cups","Cups06","6","Nostalgia, childhood innocence, gentle memories, rekindled ties, and pure generosity.","Living in the past, idealized memories, clinging to youth, or outgrowing childhood patterns."],
["Seven of Cups","Cups07","7","Choices, daydreaming, wishful thinking, boundless possibilities, and sorting illusion from reality.","Clarity, discernment, making a grounded decision, and dispelling mental fog."],
["Eight of Cups","Cups08","8","Walking away, seeking deeper meaning, leaving what no longer satisfies, and spiritual pilgrimage.","Fear of moving on, staying in stagnation, indecision, or running away prematurely."],
["Nine of Cups","Cups09","9","Contentment, emotional satisfaction, gratitude, comfort, and wishes fulfilled.","Smugness, superficial happiness, overindulgence, or longing for something deeper."],
["Ten of Cups","Cups10","10","Emotional fulfillment, lasting peace, harmonious family, shared joy, and heartfelt alignment.","Strained relationships, shattered ideals, family tension, or seeking an impossible perfection."],
["Page of Cups","Cups11","P","Sweet intuition, emotional curiosity, poetic messages, creative flow, and openhearted wonder.","Emotional insecurity, childish moodiness, creative blocks, or hypersensitivity."],
["Knight of Cups","Cups12","Kn","Romantic pursuit, following your heart, idealistic vision, empathy, and diplomatic grace.","Overly dramatic, moodiness, disillusionment, passive avoidance, or wearing rose-colored glasses."],
["Queen of Cups","Cups13","Q","Compassionate presence, psychic intuition, emotional depth, unconditional empathy, and calm wisdom.","Codependency, emotional overwhelm, neglected boundaries, or projecting inner insecurity."],
["King of Cups","Cups14","K","Emotional maturity, compassionate balance, diplomatic calm, wisdom in crisis, and grounded empathy.","Emotional manipulation, moodiness, suppressing feelings, or cold detachment."],

// Minor Arcana - Suit of Swords (14 cards)
["Ace of Swords","Swords01","A","Mental clarity, breakthrough insight, raw truth, cutting through illusion, and sharp focus.","Confusion, harsh words, clouded judgment, misdirected hostility, or paralysis of thought."],
["Two of Swords","Swords02","2","Difficult dilemma, stalemate, emotional truce, weighing options, and refusing to see the obvious.","Indecision reaching a breaking point, information overload, or forced confrontation."],
["Three of Swords","Swords03","3","Heartbreak, sorrow, painful truth, grieving a loss, and emotional release through honest clarity.","Recovery from grief, releasing old hurt, forgiveness, or dwelling endlessly on pain."],
["Four of Swords","Swords04","4","Rest, recuperation, sanctuary, mental reset, quiet contemplation, and intentional pause.","Burnout from resisting rest, renewed energy after recovery, or forced isolation."],
["Five of Swords","Swords05","5","Conflict, winning at any cost, hollow victory, friction, and realizing pride's steep price.","Reconciliation, ending a futile argument, walking away from toxic battles, or lingering resentment."],
["Six of Swords","Swords06","6","Transition, leaving stormy waters behind, moving toward calm, quiet journey, and steady recovery.","Emotional baggage, resisting necessary transition, delayed travel, or carrying old storms with you."],
["Seven of Swords","Swords07","7","Strategy, stealth, subtlety, independent maneuvering, and keeping your cards close to your chest.","Confession, revealed deception, imposter syndrome, or facing the consequences of evasion."],
["Eight of Swords","Swords08","8","Perceived helplessness, mental traps, limiting beliefs, self-imposed isolation, and fear of moving.","Stepping out of self-doubt, uncovering a way out, reclaimed agency, and mental liberation."],
["Nine of Swords","Swords09","9","Nighttime anxieties, insomnia, despair, catastrophic thinking, and the heavy burden of worry.","Reaching out for help, shadows receding in morning light, perspective shift, and releasing panic."],
["Ten of Swords","Swords10","10","Painful rock bottom, unavoidable ending, letting the curtain fall, and the dawn following a long night.","Recovery, surviving the worst, resisting the inevitable end, or slow healing beginning."],
["Page of Swords","Swords11","P","Inquisitive mind, mental agility, thirst for truth, candid communication, and vigilant observation.","Defensive chatter, gossip, hasty judgment, cynical sarcasm, or all talk with no action."],
["Knight of Swords","Swords12","Kn","Swift ambition, fierce determination, championing a cause, sharp intellect, and direct action.","Tactless bluntness, reckless haste, argumentative aggression, or racing in the wrong direction."],
["Queen of Swords","Swords13","Q","Clear discernment, unbiased honesty, astute intelligence, healthy boundaries, and perceptive humor.","Cold detachment, overly critical, bitter cynicism, or weaponizing truth without empathy."],
["King of Swords","Swords14","K","Intellectual authority, principled fairness, logical analysis, high ethical clarity, and decisive wisdom.","Dogmatic rigidity, tyranny, abusing intellect, manipulativeness, or emotional coldness."],

// Minor Arcana - Suit of Pentacles (14 cards)
["Ace of Pentacles","Pentacles01","A","Tangible opportunity, financial seed, grounding, practical abundance, and promising beginnings.","Missed financial chance, poor investment, lack of planning, or instability in material foundation."],
["Two of Pentacles","Pentacles02","2","Balance, juggling priorities, flexibility, navigating change, and graceful resource management.","Financial disorganization, overwhelmed by competing demands, dropping a ball, or overcommitment."],
["Three of Pentacles","Pentacles03","3","Craftsmanship, teamwork, master collaboration, building quality, and mutual appreciation of skills.","Lack of teamwork, poor workmanship, uncoordinated effort, or misaligned standards."],
["Four of Pentacles","Pentacles04","4","Security, frugality, guarding assets, maintaining control, and setting financial boundaries.","Greed, fear of scarcity, clinging tightly, or conversely, reckless expenditure."],
["Five of Pentacles","Pentacles05","5","Hardship, feeling left out in the cold, material loss, isolation, and missing available sanctuary.","Recovery from hardship, finding shelter, light at the end of the tunnel, and asking for support."],
["Six of Pentacles","Pentacles06","6","Generosity, charity, mutual aid, fair distribution of resources, and gratitude in giving and receiving.","Conditional generosity, strings attached, power imbalances, or unpayable debts."],
["Seven of Pentacles","Pentacles07","7","Patience, evaluating investment, long-term vision, pausing to assess harvest, and steady cultivation.","Impatience, questionable return on effort, wasted energy, or despair over slow returns."],
["Eight of Pentacles","Pentacles08","8","Apprenticeship, dedication, repetitive mastery, honing craft, and taking pride in detail.","Monotony, cutting corners, lack of ambition, perfectionism paralyzing progress, or burnout."],
["Nine of Pentacles","Pentacles09","9","Self-sufficiency, abundance, enjoying the fruits of labor, graceful independence, and refined leisure.","Overworking, superficial luxury, loneliness in success, or financial dependence."],
["Ten of Pentacles","Pentacles10","10","Legacy, long-term wealth, ancestral foundations, family stability, and lasting fulfillment.","Family disputes over inheritance, financial instability, breaking tradition, or loss of estate."],
["Page of Pentacles","Pentacles11","P","Studious curiosity, ambitious goals, practical grounding, learning new skills, and reliable beginnings.","Procrastination, lack of focus, neglecting practical matters, or unrealistic financial dreams."],
["Knight of Pentacles","Pentacles12","Kn","Methodical diligence, steadfast commitment, patient routine, reliability, and steady progress.","Stubborn inertia, boring routine, workaholism, or laziness and resistance to effort."],
["Queen of Pentacles","Pentacles13","Q","Nurturing abundance, practical warmth, domestic harmony, down-to-earth wisdom, and generous hospitality.","Material anxiety, suffocating control, work-life imbalance, or neglecting self-care."],
["King of Pentacles","Pentacles14","K","Financial mastery, worldly stability, generous provider, enduring success, and wise enterprise.","Greed, materialistic obsession, stubborn conservatism, or mismanagement of wealth."]
];

const spreads={
 daily:{title:"Daily Draw",subtitle:"1 Card · Your theme for today",roman:"I",desc:"One card for the energy, lesson, or theme surrounding your day.",positions:["Today's Energy"],type:"daily"},
 three:{title:"Past · Present · Future",subtitle:"3 Cards · A journey through time",roman:"III",desc:"Explore where you have been, where you are, and where you may be going.",positions:["Past","Present","Future"],type:"three"},
 cross:{title:"Five-Card Cross",subtitle:"5 Cards · A focused reading",roman:"V",desc:"A compact cross exploring your situation, challenge, foundation, guidance, and outcome.",positions:["Present Situation","Challenge","Foundation","Guidance","Possible Outcome"],type:"cross"},
 horseshoe:{title:"Horseshoe Spread",subtitle:"7 Cards · A path toward clarity",roman:"VII",desc:"A seven-card journey through past, present, hidden influence, obstacles, advice, and outcome.",positions:["Past","Present","Hidden Influence","Obstacle","External Influence","Advice","Likely Outcome"],type:"horseshoe"},
 nine:{title:"Nine-Card Grid",subtitle:"9 Cards · The bigger picture",roman:"IX",desc:"A 3×3 reading for the past, present, future, inner and outer worlds, challenge, advice, and direction.",positions:["Past","Present","Future","Inner World","Outer World","Hidden Influence","Challenge","Advice","Overall Direction"],type:"nine"},
 celtic:{title:"Celtic Cross",subtitle:"10 Cards · A deep exploration",roman:"X",desc:"The classic ten-card spread for a detailed look at a situation and its influences.",positions:["Present Situation","The Challenge","Foundation","Recent Past","Possibility","Near Future","Your Approach","External Influence","Hopes & Fears","Outcome"],type:"celtic"},
 twelve:{title:"Year Wheel",subtitle:"12 Cards · The cycle ahead",roman:"XII",desc:"Twelve cards representing the twelve months of a symbolic year.",positions:["January","February","March","April","May","June","July","August","September","October","November","December"],type:"twelve"}
};
const monthNames=spreads.twelve.positions;

const positionDescriptions = {
  daily: [
    "The core theme, guiding energy, or spiritual lesson surrounding your day."
  ],
  three: [
    "Past influences, foundational events, and experiences that brought you to this moment.",
    "Your current state, active energies, and the reality of where you stand right now.",
    "Potential outcomes, emerging paths, and the direction your energy is moving toward."
  ],
  cross: [
    "Your present situation, mindset, and immediate environment.",
    "The core challenge, friction, or conflicting forces crossing your path.",
    "The underlying foundation, root cause, or subconscious beliefs at play.",
    "Actionable advice, wisdom, or the best posture to take moving forward.",
    "The projected culmination and likely outcome if current conditions persist."
  ],
  horseshoe: [
    "Past events and foundational habits shaping the current reality.",
    "The current atmosphere, immediate choices, and your current feelings.",
    "Unseen factors, subconscious motivations, or hidden dynamics at work.",
    "The primary challenge, barrier, or doubt that must be navigated.",
    "The people, environment, or outside forces affecting your path.",
    "The optimal course of action, mindset, or perspective to take.",
    "The anticipated outcome and resolution based on your current trajectory."
  ],
  nine: [
    "Past roots, memories, and historical momentum.",
    "Present reality and what is front-of-mind today.",
    "Imminent events and emerging trajectory.",
    "Inner emotions, hopes, doubts, and spiritual state.",
    "External circumstances, relationships, and tangible surroundings.",
    "Subconscious drivers and unseen variables at play.",
    "The central conflict, test, or friction to resolve.",
    "Actionable guidance and the best posture to adopt.",
    "The overarching path, synthesis, and long-term culmination."
  ],
  celtic: [
    "The central issue, core atmosphere, and primary theme of your reading.",
    "The crossing card: what blocks, tests, or complicates your progress.",
    "The root origin, deep subconscious factors, or distant past foundation.",
    "Recent events, departing energies, or influences that have just passed.",
    "The crowning potential, best outcome, or higher aspiration achievable.",
    "The near future: what is beginning to manifest on the immediate horizon.",
    "Your approach: your self-perception, mindset, and personal power.",
    "External influence: how others, social forces, or your environment affect you.",
    "Hopes and fears: your secret desires, anxieties, and vulnerabilities.",
    "The ultimate resolution and culmination of the overall journey."
  ],
  twelve: [
    "Theme, energy, and spiritual focus for January.",
    "Theme, energy, and spiritual focus for February.",
    "Theme, energy, and spiritual focus for March.",
    "Theme, energy, and spiritual focus for April.",
    "Theme, energy, and spiritual focus for May.",
    "Theme, energy, and spiritual focus for June.",
    "Theme, energy, and spiritual focus for July.",
    "Theme, energy, and spiritual focus for August.",
    "Theme, energy, and spiritual focus for September.",
    "Theme, energy, and spiritual focus for October.",
    "Theme, energy, and spiritual focus for November.",
    "Theme, energy, and spiritual focus for December."
  ]
};

function getPosDesc(key, i) {
  const descs = positionDescriptions[key];
  if (descs && descs[i]) return descs[i];
  return "The symbolic energy and perspective of this spread position.";
}

let state = {
  key: null,
  cards: [],
  revealed: 0,
  selected: 0,
  tab: "meaning",
  viewMode: "single",
  allTab: "meaning"
};

const $ = id => document.getElementById(id);
const shuffle = a => {
  let x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
};

function pickCards(n) {
  return shuffle(deck).slice(0, n).map(c => ({
    name: c[0],
    file: c[1],
    roman: c[2],
    upright: c[3],
    reversed: c[4],
    orientation: Math.random() < 0.35 ? "Reversed" : "Upright",
    revealed: false
  }));
}

function buildSpreadChoices() {
  $("spreadGrid").innerHTML = Object.entries(spreads).map(([key, s]) => `
    <button class="spread" data-spread="${key}">
      <div class="roman">${s.roman}</div><h3>${s.title}</h3><p>${s.desc}</p><small>${s.positions.length} Cards</small>
    </button>`).join("");
  document.querySelectorAll(".spread").forEach(b => b.onclick = () => start(b.dataset.spread));
}
buildSpreadChoices();

function start(key) {
  state = {
    key,
    cards: pickCards(spreads[key].positions.length),
    revealed: 0,
    selected: 0,
    tab: "meaning",
    viewMode: "single",
    allTab: "meaning"
  };
  $("selection").classList.remove("active");
  $("reading").classList.add("active");
  setViewMode("single");
  render();
  window.scrollTo({top: 0, behavior: "smooth"});
}

function reset() {
  if (state.key) start(state.key);
}

function goSelection() {
  state.key = null;
  $("reading").classList.remove("active");
  $("selection").classList.add("active");
  $("topTitle").textContent = "Choose a Spread";
  $("topSubtitle").textContent = "A quiet moment for reflection";
  window.scrollTo({top: 0, behavior: "smooth"});
}

function render() {
  const s = spreads[state.key];
  $("topTitle").textContent = s.title;
  $("topSubtitle").textContent = s.subtitle;
  $("readingTitle").textContent = s.title;
  $("readingSubtitle").textContent = s.subtitle;
  renderStage();
  updateProgress();
  renderInterpretation();
  renderLegend();
}

function renderStage() {
  const s = spreads[state.key], stage = $("spreadStage");
  stage.className = "spread-stage spread-" + s.type;
  if (s.type === "twelve") {
    stage.innerHTML = `<div class="year-wheel"><div class="sun">☾</div>${state.cards.map((c, i) => `
      <div class="wheel-slot" style="--angle:${i * 30}deg">
        <div class="wheel-card"><div class="month-number">${i + 1}</div><div class="month-name">${monthNames[i]}</div>${cardHTML(c, i, true)}</div>
      </div>`).join("")}</div>`;
  } else {
    stage.innerHTML = `<div class="cards-grid">${state.cards.map((c, i) => `
      <div class="card-slot"><div class="position">${s.positions[i]}</div>${cardHTML(c, i, false)}</div>`).join("")}</div>`;
  }
  stage.querySelectorAll(".card").forEach(el => {
    const i = +el.dataset.i;
    el.onclick = () => {
      if (!state.cards[i].revealed) {
        reveal(i);
      } else {
        selectPosition(i);
      }
    };
  });
  stage.querySelectorAll(".art img").forEach(img => {
    const span = img.nextElementSibling;
    const cardEl = img.closest(".card");
    const hideSpan = () => {
      img.style.display = "block";
      if (span) span.style.display = "none";
      if (cardEl) cardEl.classList.add("has-image");
    };
    const showSpan = () => {
      if (img.dataset.ext === "jpg") {
        img.dataset.ext = "jpeg";
        img.src = `cards/${img.dataset.base}.jpeg`;
      } else if (img.dataset.ext === "jpeg") {
        img.dataset.ext = "png";
        img.src = `cards/${img.dataset.base}.png`;
      } else {
        img.style.display = "none";
        if (span) span.style.display = "block";
        if (cardEl) cardEl.classList.remove("has-image");
      }
    };
    img.onload = hideSpan;
    img.onerror = showSpan;
    if (img.complete) {
      if (img.naturalWidth > 0) hideSpan();
      else showSpan();
    }
  });
}

function updateStageSelection() {
  document.querySelectorAll(".spread-stage .card").forEach(el => {
    const i = +el.dataset.i;
    el.classList.toggle("selected", state.selected === i);
  });
}

function cardHTML(c, i, small) {
  const isSelected = state.selected === i;
  const fileName = encodeURIComponent(c.file);
  return `<div class="card ${c.revealed ? "revealed" : ""} ${c.revealed && c.orientation === "Reversed" ? "reversed" : ""} ${isSelected ? "selected" : ""}" data-i="${i}" title="${c.revealed ? c.name + ' (' + c.orientation + ')' : 'Click to reveal'}">
    <div class="card-inner">
      <div class="face back"></div>
      <div class="face front">
        <div class="art"><img src="cards/${fileName}.jpg" alt="${c.name}" data-base="${fileName}" data-ext="jpg"><span>${c.name}</span></div>
        <div class="card-info">
          <div class="name">${c.name}</div>
          <div class="badge ${c.orientation === "Reversed" ? "rev" : ""}">${c.orientation}</div>
        </div>
      </div>
    </div>
  </div>`;
}

function reveal(i) {
  if (state.cards[i].revealed) return;
  state.cards[i].revealed = true;
  state.selected = i;
  state.revealed = state.cards.filter(c => c.revealed).length;
  const cardEl = document.querySelector(`.spread-stage .card[data-i="${i}"]`);
  if (cardEl) {
    cardEl.classList.add("revealed");
    if (state.cards[i].orientation === "Reversed") cardEl.classList.add("reversed");
  }
  updateStageSelection();
  updateProgress();
  renderInterpretation();
  renderLegend();
}

function revealAll() {
  let delay = 0;
  state.cards.forEach((c, i) => {
    if (!c.revealed) {
      setTimeout(() => {
        c.revealed = true;
        state.selected = i;
        state.revealed = state.cards.filter(card => card.revealed).length;
        const cardEl = document.querySelector(`.spread-stage .card[data-i="${i}"]`);
        if (cardEl) {
          cardEl.classList.add("revealed");
          if (c.orientation === "Reversed") cardEl.classList.add("reversed");
        }
        updateStageSelection();
        updateProgress();
        renderInterpretation();
        renderLegend();
      }, delay);
      delay += 120;
    }
  });
}

function selectPosition(i) {
  state.selected = i;
  updateStageSelection();
  if (state.viewMode === "all") {
    const targetEl = document.getElementById(`allCard-${i}`);
    if (targetEl) {
      if (typeof targetEl.scrollIntoView === "function") {
        targetEl.scrollIntoView({behavior: "smooth", block: "nearest"});
      }
      targetEl.classList.add("highlight-flash");
      setTimeout(() => targetEl.classList.remove("highlight-flash"), 1200);
    }
  }
  renderInterpretation();
  renderLegend();
}

function inspectSingleCard(i) {
  state.selected = i;
  setViewMode("single");
  renderStage();
  renderInterpretation();
  renderLegend();
  const panel = document.querySelector(".interpretation-panel");
  if (panel && typeof panel.scrollIntoView === "function") {
    panel.scrollIntoView({behavior: "smooth", block: "start"});
  }
}

function setViewMode(mode) {
  state.viewMode = mode;
  $("modeSingleBtn").classList.toggle("active", mode === "single");
  $("modeAllBtn").classList.toggle("active", mode === "all");
  $("singleView").style.display = mode === "single" ? "" : "none";
  $("allView").style.display = mode === "all" ? "" : "none";
  renderInterpretation();
}

function updateProgress() {
  const total = state.cards.length, n = state.revealed;
  $("progressText").textContent = `${n} of ${total} Revealed`;
  $("progressStatus").textContent = n === total ? "Reading Complete" : n === 0 ? "Choose any card to reveal" : "Reveal the next card";
  $("progressFill").style.width = (n / total * 100) + "%";
  $("newBtn").disabled = n !== total;
  $("revealAllBtn").disabled = n === total;
  if ($("revealAllInAllBtn")) {
    $("revealAllInAllBtn").disabled = n === total;
    $("revealAllInAllBtn").textContent = n === total ? "All Cards Revealed ✓" : "✦ Reveal All Cards";
  }
}

function renderInterpretation() {
  if (state.viewMode === "single") {
    renderSingleInterpretation();
  } else {
    renderAllInterpretation();
  }
}

function renderSingleInterpretation() {
  const i = state.selected, s = spreads[state.key];
  const total = state.cards.length;
  const c = i == null ? null : state.cards[i];
  const posName = s.positions[i] || "Position";
  const posDesc = getPosDesc(state.key, i);

  $("positionText").innerHTML = `<strong>${posName} (Position ${i + 1} of ${total}):</strong> ${posDesc}`;

  // Update nav buttons
  $("prevCardBtn").disabled = i <= 0;
  $("nextCardBtn").disabled = i >= total - 1;
  $("cardNavCount").textContent = `Position ${i + 1} of ${total}`;

  if (!c || !c.revealed) {
    $("selectedCard").innerHTML = `
      <div class="symbol">✦</div>
      <div>
        <div class="eyebrow">${posName} · Card ${i + 1}</div>
        <h3>${posName}</h3>
        <span class="badge">Face Down</span>
        <p>This card is awaiting to be revealed.</p>
      </div>
    `;
    $("detail").innerHTML = `
      <div class="all-card-unrevealed" style="flex-direction:column;align-items:flex-start;gap:10px;padding:8px 0">
        <span>Card #${i + 1} for <strong>${posName}</strong> has not been revealed yet.</span>
        <button class="ghost-sm" onclick="reveal(${i})">✦ Reveal This Card</button>
      </div>
    `;
    return;
  }

  const meaning = c.orientation === "Reversed" ? c.reversed : c.upright;
  const fileName = encodeURIComponent(c.file);
  $("selectedCard").innerHTML = `
    <div class="symbol card-preview ${c.orientation === "Reversed" ? "reversed" : ""}">
      <img src="cards/${fileName}.jpg" alt="${c.name}" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='block'" onload="if(this.nextElementSibling)this.nextElementSibling.style.display='none'">
      <span style="display:block">${c.roman}</span>
    </div>
    <div>
      <div class="eyebrow">${posName} · Position ${i + 1}</div>
      <h3>${c.name} · ${c.orientation}</h3>
      <strong>${c.orientation === "Reversed" ? "Reversed meaning" : "Upright meaning"}</strong>
      <p>${meaning}</p>
    </div>
  `;

  const tab = state.tab;
  $("detail").innerHTML = tab === "meaning"
    ? `This card reveals the energy surrounding <strong>${posName}</strong> in your spread.<br><br><strong>${c.orientation} Reading:</strong> ${meaning}`
    : tab === "reflect"
    ? `Reflect on how <strong>${c.name}</strong> (${c.orientation}) shows up in your life through the lens of <strong>${posName}</strong>.<br><br>What feels immediately true? What feels uncomfortable or unexpectedly useful?`
    : `Journal prompt: <strong>What does ${c.name} ask me to notice about ${posName}?</strong><br><br>Write freely about the current influences without trying to predict the future.`;
}

function renderAllInterpretation() {
  const s = spreads[state.key];
  const allTab = state.allTab;
  const listEl = $("allCardsList");

  listEl.innerHTML = state.cards.map((c, i) => {
    const posName = s.positions[i];
    const posDesc = getPosDesc(state.key, i);
    const isSelected = state.selected === i;
    const meaning = c.orientation === "Reversed" ? c.reversed : c.upright;
    const fileName = encodeURIComponent(c.file);

    let tabContent = "";
    if (c.revealed) {
      if (allTab === "meaning") {
        tabContent = `<p class="all-card-meaning"><strong>${c.orientation} Meaning:</strong> ${meaning}</p>`;
      } else if (allTab === "reflect") {
        tabContent = `<p class="all-card-meaning">Reflect on how <strong>${c.name}</strong> (${c.orientation}) influences <strong>${posName}</strong>. What insights arise when observing this interaction?</p>`;
      } else {
        tabContent = `<p class="all-card-meaning"><strong>Prompt:</strong> How can you apply the wisdom of <strong>${c.name}</strong> to align with the energy of <strong>${posName}</strong>?</p>`;
      }
    }

    return `
      <div class="all-card-row ${c.revealed ? "revealed" : "unrevealed"} ${isSelected ? "selected" : ""}" id="allCard-${i}">
        <div class="all-card-head">
          <div>
            <div class="all-pos-badge">${i + 1}. ${posName}</div>
            <div class="all-pos-desc">${posDesc}</div>
          </div>
          ${c.revealed ? `<button class="ghost-sm" onclick="inspectSingleCard(${i})">Inspect 🔍</button>` : ''}
        </div>
        ${c.revealed ? `
          <div class="all-card-body">
            <div class="all-card-sym card-preview ${c.orientation === "Reversed" ? "reversed" : ""}">
              <img src="cards/${fileName}.jpg" alt="${c.name}" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='block'" onload="if(this.nextElementSibling)this.nextElementSibling.style.display='none'">
              <span style="display:block">${c.roman}</span>
            </div>
            <div class="all-card-text">
              <div class="all-card-title-line">
                <span class="all-card-name">${c.name}</span>
                <span class="badge ${c.orientation === "Reversed" ? "rev" : ""}">${c.orientation}</span>
              </div>
              ${tabContent}
            </div>
          </div>
        ` : `
          <div class="all-card-unrevealed">
            <span>✦ Card face down — not yet revealed</span>
            <button class="ghost-sm" onclick="reveal(${i})">✦ Reveal Card</button>
          </div>
        `}
      </div>
    `;
  }).join("");
}

function renderLegend() {
  const s = spreads[state.key];
  $("legend").innerHTML = `
    <div class="legend-head">
      <h3>Spread Legend</h3>
      <p>Click any position to view its explanation</p>
    </div>
    <div class="legend-list">
      ${s.positions.map((p, i) => {
        const c = state.cards[i];
        const isRevealed = c && c.revealed;
        const isActive = state.selected === i;
        return `
          <button class="legend-item ${isActive ? "active" : ""} ${isRevealed ? "revealed" : "unrevealed"}" data-i="${i}" type="button" title="View explanation for ${p}">
            <span class="pos-left">
              <span class="dot"></span>
              <span class="pos-name">${i + 1}. ${p}</span>
            </span>
            <span class="card-tag">${isRevealed ? c.name : "Face down"}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;

  $("legend").querySelectorAll(".legend-item").forEach(btn => {
    btn.onclick = () => selectPosition(+btn.dataset.i);
  });
}

// Single card tabs
document.querySelectorAll(".single-view .tab").forEach(b => {
  b.onclick = () => {
    state.tab = b.dataset.tab;
    document.querySelectorAll(".single-view .tab").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    renderInterpretation();
  };
});

// All cards tabs
document.querySelectorAll(".all-tab").forEach(b => {
  b.onclick = () => {
    state.allTab = b.dataset.alltab;
    document.querySelectorAll(".all-tab").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    renderInterpretation();
  };
});

// Mode switcher
$("modeSingleBtn").onclick = () => setViewMode("single");
$("modeAllBtn").onclick = () => setViewMode("all");

// Card navigation
$("prevCardBtn").onclick = () => {
  if (state.selected > 0) selectPosition(state.selected - 1);
};
$("nextCardBtn").onclick = () => {
  if (state.selected < state.cards.length - 1) selectPosition(state.selected + 1);
};

// Reveal All buttons
$("revealAllBtn").onclick = revealAll;
const revealAllInAll = $("revealAllInAllBtn");
if (revealAllInAll) revealAllInAll.onclick = revealAll;

// Header / Navigation buttons
$("backBtn").onclick = goSelection;
$("changeBtn").onclick = goSelection;
$("resetBtn").onclick = reset;
$("newBtn").onclick = goSelection;

// Theme toggle
$("themeBtn").onclick = () => {
  document.body.classList.toggle("dark");
  $("themeBtn").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  localStorage.setItem("arcana-theme", document.body.classList.contains("dark") ? "dark" : "light");
};
if (localStorage.getItem("arcana-theme") === "dark") {
  document.body.classList.add("dark");
  $("themeBtn").textContent = "☀";
}

// Keyboard navigation
document.addEventListener("keydown", e => {
  if (!$("reading").classList.contains("active")) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    const nextUnrevealed = state.cards.findIndex(c => !c.revealed);
    if (nextUnrevealed !== -1) reveal(nextUnrevealed);
  } else if (e.key === "ArrowLeft") {
    if (state.selected > 0) selectPosition(state.selected - 1);
  } else if (e.key === "ArrowRight") {
    if (state.selected < state.cards.length - 1) selectPosition(state.selected + 1);
  }
});

