const tabs = document.querySelectorAll('.tab-button');
const panels = document.querySelectorAll('.tab-panel');

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    tabs.forEach((button) => button.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
}

const adviceLibrary = {
  cash: {
    folded: {
      premium: {
        title: 'Open aggressively for value',
        summary: 'With a premium hand and unopened action, you should almost always raise rather than limp.',
        points: [
          ['Baseline', 'Use a standard open size and plan to continue versus 3-bets.'],
          ['Why it works', 'Premium hands dominate calling ranges and want to build the pot early.'],
          ['Adjustment', 'From early position, keep sizing consistent so you do not reveal hand strength.'],
        ],
      },
      strong: {
        title: 'Usually raise, but respect position',
        summary: 'Strong Broadway hands and medium pairs are profitable opens most often in middle and late position.',
        points: [
          ['Baseline', 'Open frequently from hijack, cutoff, and button; tighten slightly UTG.'],
          ['Why it works', 'These hands have high card strength and decent playability.'],
          ['Adjustment', 'Avoid over-opening dominated offsuit Broadways from the blinds.'],
        ],
      },
      speculative: {
        title: 'Open selectively when conditions help',
        summary: 'Speculative hands improve with position and deeper stacks because they realize implied odds better.',
        points: [
          ['Baseline', 'Favor these hands in cutoff/button more than early position.'],
          ['Why it works', 'They can flop strong disguised draws, two pair, and straights.'],
          ['Adjustment', 'Fold more often when stacks are shallow or rake is high.'],
        ],
      },
      weak: {
        title: 'Mostly fold and stay disciplined',
        summary: 'Weak offsuit hands are common leaks because they make second-best top pairs.',
        points: [
          ['Baseline', 'Pass and wait for better spots unless you have a strong exploit on very tight blinds.'],
          ['Why it works', 'Poor kickers and reverse implied odds hurt your win rate.'],
          ['Adjustment', 'Late-position steals can widen slightly, but dominated trash remains low EV.'],
        ],
      },
    },
    limp: {
      premium: {
        title: 'Isolate limpers with a value raise',
        summary: 'Punish passive action by raising bigger and taking the initiative.',
        points: [
          ['Baseline', 'Use a larger isolation size, especially out of position.'],
          ['Why it works', 'Limping ranges are usually weak and call too often.'],
          ['Adjustment', 'Against sticky players, prioritize pure value and reduce bluffs.'],
        ],
      },
      strong: {
        title: 'Raise often to isolate',
        summary: 'Strong hands perform well against limp-callers and can win the pot preflop or on the flop.',
        points: [
          ['Baseline', 'Attack limpers more in position than out of position.'],
          ['Why it works', 'You earn fold equity and keep the betting lead.'],
          ['Adjustment', 'If multiple limpers remain sticky, choose hands with better top-pair quality.'],
        ],
      },
      speculative: {
        title: 'Mix between overlimping and isolating',
        summary: 'Speculative hands prefer deep stacks and favorable position before building a bigger pot.',
        points: [
          ['Baseline', 'Overlimp more in multiway spots; isolate more on the button with fold equity.'],
          ['Why it works', 'These hands thrive when they can realize equity cheaply.'],
          ['Adjustment', 'Avoid bloating pots from the blinds with marginal suited connectors.'],
        ],
      },
      weak: {
        title: 'Do not join weak action with weaker hands',
        summary: 'Limped pots can tempt loose calls, but weak holdings still lose money long term.',
        points: [
          ['Baseline', 'Fold most weak offsuit hands even if the pot seems cheap.'],
          ['Why it works', 'Multiway reverse implied odds increase with dominated hands.'],
          ['Adjustment', 'Only deviate when you have a specific read and excellent position.'],
        ],
      },
    },
    open: {
      premium: {
        title: '3-bet for value and plan ahead',
        summary: 'Premium hands should usually continue strongly against an open raise.',
        points: [
          ['Baseline', '3-bet frequently, especially when stacks are deep enough to win large pots.'],
          ['Why it works', 'You are far ahead of a standard opening range.'],
          ['Adjustment', 'Flatting can be reasonable in position versus aggressive players who over-c-bet.'],
        ],
      },
      strong: {
        title: 'Decide between flatting and selective 3-bets',
        summary: 'Strong non-premium hands often call in position and 3-bet the top of the class.',
        points: [
          ['Baseline', 'Call more in position; fold more often out of position.'],
          ['Why it works', 'You preserve equity realization with hands that play well postflop.'],
          ['Adjustment', 'Against wide opens, expand 3-bets and blind defenses.'],
        ],
      },
      speculative: {
        title: 'Prefer position and depth before continuing',
        summary: 'Speculative hands can call opens when stacks are deep and implied odds justify it.',
        points: [
          ['Baseline', 'Continue more from the button and blinds versus late-position opens.'],
          ['Why it works', 'Deep stacks allow you to win big when you hit disguised value.'],
          ['Adjustment', 'Fold more often against early-position opens and short stacks.'],
        ],
      },
      weak: {
        title: 'Mostly fold to opens',
        summary: 'Facing aggression with a weak range is one of the fastest ways to leak chips.',
        points: [
          ['Baseline', 'Release dominated offsuit hands.'],
          ['Why it works', 'You lack equity and playability.'],
          ['Adjustment', 'Defend only if the opener is very wide and you close the action with the right price.'],
        ],
      },
    },
    threebet: {
      premium: {
        title: 'Continue confidently versus 3-bets',
        summary: 'Premium holdings should rarely fold to a 3-bet in cash games.',
        points: [
          ['Baseline', '4-bet for value with the strongest hands and call some in position.'],
          ['Why it works', 'You block the best continuance hands and dominate value regions.'],
          ['Adjustment', 'Versus extremely tight players, slow down the bottom of your continue range.'],
        ],
      },
      strong: {
        title: 'Continue selectively',
        summary: 'Strong but non-premium hands become more sensitive to position and player pool tendencies.',
        points: [
          ['Baseline', 'Call more in position and fold more out of position.'],
          ['Why it works', 'Realizing equity matters more once the pot is already bloated.'],
          ['Adjustment', 'Mix occasional 4-bet bluffs only with blockers and fold equity.'],
        ],
      },
      speculative: {
        title: 'Mostly fold speculative hands to 3-bets',
        summary: 'Once the pot gets large preflop, speculative hands often lose their implied-odds appeal.',
        points: [
          ['Baseline', 'Fold most suited connectors and small suited aces unless stacks are very deep and you are in position.'],
          ['Why it works', 'Low SPR reduces the value of disguised draws.'],
          ['Adjustment', 'Use suited wheel aces occasionally as 4-bet bluffs rather than flats.'],
        ],
      },
      weak: {
        title: 'Easy fold',
        summary: 'Do not defend weak ranges against strong preflop pressure.',
        points: [
          ['Baseline', 'Fold and preserve chips for higher EV spots.'],
          ['Why it works', 'You suffer from both poor equity and poor realization.'],
          ['Adjustment', 'None needed—discipline is the edge here.'],
        ],
      },
    },
  },
  tournament: {},
};

adviceLibrary.tournament = JSON.parse(JSON.stringify(adviceLibrary.cash));
adviceLibrary.tournament.folded.speculative.summary =
  'Speculative opens lose value as stacks shorten, so late position matters even more in tournaments.';
adviceLibrary.tournament.folded.speculative.points[2][1] =
  'Under 20bb, many speculative opens turn into folds unless you are stealing from late position.';
adviceLibrary.tournament.open.strong.summary =
  'Tournament pressure increases the value of hands that can 3-bet shove or realize equity cleanly.';
adviceLibrary.tournament.threebet.strong.points[2][1] =
  'Near pay jumps, tighten calls versus large 3-bets unless villain is clearly attacking too wide.';
adviceLibrary.tournament.limp.weak.summary =
  'In tournaments, chips lost are often more costly than chips won, so do not defend weak ego spots.';

const positionAdjustments = {
  utg: 'Because you are first in early position, stay near the top of your range and avoid marginal bluffs.',
  hj: 'Middle position lets you widen slightly, but hands still need solid postflop playability.',
  co: 'The cutoff can attack more aggressively because only the button and blinds remain.',
  btn: 'On the button, open widest and lean into pressure because position boosts equity realization.',
  sb: 'From the small blind, beware playing bloated pots out of position after the flop.',
  bb: 'In the big blind, pot odds improve your defense, but weak dominated calls are still costly.',
};

const stackAdjustments = {
  deep: 'Deep stacks reward suited hands, implied odds, and thoughtful postflop planning.',
  medium: 'At medium stacks, balance fold equity with commitment thresholds and SPR awareness.',
  short: 'Short stacks reduce maneuvering room, so prioritize hands with direct all-in equity.',
};

const title = document.getElementById('plan-title');
const summary = document.getElementById('plan-summary');
const points = document.getElementById('plan-points');

function renderAdvice(event) {
  event.preventDefault();

  const format = document.getElementById('format').value;
  const priorAction = document.getElementById('prior-action').value;
  const handCategory = document.getElementById('hand-category').value;
  const position = document.getElementById('position-select').value;
  const stack = document.getElementById('stack-depth').value;

  const advice = adviceLibrary[format][priorAction][handCategory];
  title.textContent = advice.title;
  summary.textContent = `${advice.summary} ${positionAdjustments[position]} ${stackAdjustments[stack]}`;
  points.innerHTML = advice.points
    .map(
      ([heading, text]) => `
        <div class="callout">
          <strong>${heading}</strong>
          <span>${text}</span>
        </div>
      `,
    )
    .join('');
}

document.getElementById('trainer-form').addEventListener('submit', renderAdvice);

const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const premiumHands = new Set(['AA', 'KK', 'QQ', 'JJ', 'AKs', 'AQs', 'AKo']);
const playableHands = new Set([
  'TT', '99', '88', '77', '66', '55', '44', '33', '22',
  'AJs', 'ATs', 'KQs', 'KJs', 'QJs', 'JTs', 'T9s', '98s', '87s', '76s', '65s',
  'AQo', 'AJo', 'KQo', 'KJo', 'QJo', 'A5s', 'A4s', 'A3s', 'A2s',
]);

const grid = document.getElementById('range-grid');

for (let row = 0; row < ranks.length; row += 1) {
  for (let col = 0; col < ranks.length; col += 1) {
    const high = ranks[row];
    const low = ranks[col];
    let label = `${high}${low}`;

    if (row < col) {
      label = `${high}${low}s`;
    } else if (row > col) {
      label = `${low}${high}o`;
    }

    let category = 'fold';
    if (premiumHands.has(label)) {
      category = 'premium';
    } else if (playableHands.has(label)) {
      category = 'playable';
    }

    const cell = document.createElement('div');
    cell.className = `range-cell ${category}`;
    cell.textContent = label;
    cell.title = `${label}: ${category === 'premium' ? 'raise / 3-bet' : category === 'playable' ? 'open selectively' : 'usually fold'}`;
    grid.appendChild(cell);
  }
}

const questions = [
  {
    prompt: 'You are on the button in a cash game with 100bb and A♠5♠. Everyone folds to you. Best default?',
    options: ['Fold', 'Open raise', 'Open limp'],
    answer: 'Open raise',
    feedback: 'Correct: suited wheel aces are strong late-position opens because they have blocker value and play well postflop.',
  },
  {
    prompt: 'A tight UTG player opens and you hold K♦J♣ in the small blind with 30bb. Best default?',
    options: ['Call', 'Fold', '3-bet bluff'],
    answer: 'Fold',
    feedback: 'Correct: KJo is dominated too often and performs poorly out of position against a strong early range.',
  },
  {
    prompt: 'You flop a flush draw with two overcards and face a half-pot bet. What matters most first?',
    options: ['Your pot odds and estimated equity', 'Your table image only', 'How many hands you lost recently'],
    answer: 'Your pot odds and estimated equity',
    feedback: 'Correct: start with the math, then layer in implied odds, fold equity, and opponent tendencies.',
  },
];

let currentQuestion = 0;
const questionEl = document.getElementById('quiz-question');
const optionsEl = document.getElementById('quiz-options');
const feedbackEl = document.getElementById('quiz-feedback');

function renderQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.prompt;
  feedbackEl.textContent = '';
  optionsEl.innerHTML = '';

  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => {
      document.querySelectorAll('.quiz-option').forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
      if (option === question.answer) {
        feedbackEl.textContent = question.feedback;
        feedbackEl.style.color = '#56f0b7';
      } else {
        feedbackEl.textContent = `Not quite. Best default: ${question.answer}. ${question.feedback}`;
        feedbackEl.style.color = '#f8c35f';
      }
    });
    optionsEl.appendChild(button);
  });
}

document.getElementById('next-question').addEventListener('click', () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  renderQuestion();
});

renderQuestion();
