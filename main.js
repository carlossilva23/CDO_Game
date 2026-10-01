const $ = id => document.getElementById(id);
const num = v => /^\d+$/.test(v);
const str = v => /^(["']).+\1$/.test(v);
const is = (...o) => v => o.includes(v.replace(/\s+/g, ''));
const save = k => ({ ok: is(k), hints: ['The constructor receives values as parameters. Where should each one be stored?', 'You are copying a parameter onto the object. Which parameter belongs with the property on the left?', 'The parameter you need has the same name as the property on the left of the = sign.'] });

// ---------- TEACHERS: lessons and answers live here ----------
const LESSONS = [
{ title: 'Basic types',
  intro: 'Variables store information. A string is text in quotes, a number has no quotes, and a boolean is true or false. Health + attack + defense must equal 100.',
  code: `let playerName = {{0}};
let health = {{1}};
let attack = {{2}};
let defense = {{3}};
let hasKey = {{4}};   // true or false
console.log(playerName, health, attack, defense, hasKey);`,
  blanks: [
    { ok: str, hints: ['This holds text. What does JavaScript need around text?', 'Text values are called strings. Think about what marks where a string begins and ends.'] },
    { ok: num, hints: ['Is this a number? Should a number have anything around it?', 'Use digits only: no quotes, no letters, no decimals.'] },
    { ok: num, hints: ['Is this a number? Should a number have anything around it?', 'Use digits only: no quotes, no letters, no decimals.'] },
    { ok: (v, a) => num(v) && +a[1] + +a[2] + +v === 100, hints: ['Is it a whole number? Then check the total of your three stats.', 'Add your health and attack first. How much is left to reach 100?', 'Defense = 100 minus health minus attack.'] },
    { ok: is('true', 'false'), hints: ['Does the hero have the key yet? A boolean can only be one of two values.', 'Both boolean values are lowercase words, with no quotes.'] } ] },
{ title: 'Classes',
  intro: 'A class is a blueprint for making objects. Inside it, "this" means the object being made. The keyword new builds one.',
  code: `class Hero {
  constructor(name, health, attack, defense) {
    this.name = {{0}};
    this.health = {{1}};
    this.attack = {{2}};
    this.defense = {{3}};
    this.hasKey = false;
    this.gear = [];
  }
}
let hero = {{4}} Hero(playerName, health, attack, defense);
console.log(hero.name, 'has', hero.health, 'health');`,
  blanks: [save('name'), save('health'), save('attack'), save('defense'),
    { ok: is('new'), hints: ['How do you make an object from a blueprint? Look for a special word before the class name.', 'It is a short, three-letter keyword.'] }] },
{ title: 'Statements',
  intro: 'if / else if / else lets your code choose a path. The game sends the choice as text: 1 = Forest, 2 = Cave, anything else = Castle.',
  code: `let choice = '2';
if (choice == {{0}}) {
  hero.gear.push('Wooden Sword');
} else if (choice == {{1}}) {
  hero.gear.push('Iron Shield');
} else {
  hero.gear.push('Potion');
}
console.log(hero.gear);`,
  blanks: [
    { ok: is("'1'", '"1"', '1'), hints: ['Re-read the intro: which number means Forest?', 'Look at how choice is written on the first line. The value you compare it to should look the same.'] },
    { ok: is("'2'", '"2"', '2'), hints: ['Re-read the intro: which number means Cave?', 'Look at how choice is written on the first line. The value you compare it to should look the same.'] } ] },
{ title: 'Arrays',
  intro: 'An array is a list. .push() adds an item to the end, and .length tells you how many items it holds.',
  code: `hero.gear.{{0}}('Shield');
hero.gear.push({{1}});   // add a Spear
console.log(hero.gear);
console.log('Items:', hero.gear.{{2}});`,
  blanks: [
    { ok: is('push'), hints: ['Which array method adds an item to the end of a list?', 'Think of pushing something onto a pile.'] },
    { ok: is("'Spear'", '"Spear"'), hints: ['Read the comment: which item is being added?', 'Items in this list are text. Check the quotes, spelling and capital letters.'] },
    { ok: is('length'), hints: ['You want a count of the items. Arrays have a built-in property for that.', 'It is a property, not a method, so there are no parentheses. Think about how long the list is.'] } ] },
{ title: 'While loops',
  intro: 'A while loop repeats as long as its condition is true. Keep hitting the goblin until its health is gone.',
  code: `let goblinHealth = 45;
while (goblinHealth {{0}} 0) {
  goblinHealth {{1}} hero.attack;
  console.log('Goblin health:', goblinHealth);
}
console.log('Goblin defeated!');`,
  blanks: [
    { ok: is('>'), hints: ['Read the intro: keep looping while the goblin still has health. Which comparison means more than?', 'One symbol points left, one points right. Which way does the bigger side open?'] },
    { ok: is('-='), hints: ['Each round should lower the goblin health by your attack. Which operator subtracts and saves in one step?', 'It combines two symbols: the one that subtracts and the one that assigns.'] } ] }
];

// ---------- lesson runner ----------
const vals = LESSONS.map(() => []), tries = LESSONS.map(() => []);
let cur = 0, doneCount = 0;
const asm = i => LESSONS[i].code.replace(/\{\{(\d)\}\}/g, (m, k) => vals[i][k]);
const quiet = i => asm(i).split('\n').filter(l => !l.includes('console.log')).join('\n');
const buildHero = () => new Function(LESSONS.map((l, i) => quiet(i)).join('\n') + '\nreturn hero;')();

function renderNav() {
  $('nav').innerHTML = '';
  [...LESSONS.map((l, i) => (i + 1) + '. ' + l.title), 'Play!'].forEach((t, i) => {
    const b = document.createElement('button');
    b.textContent = t;
    b.disabled = i > doneCount;
    b.className = (i < doneCount ? 'done ' : '') + (i === cur ? 'current' : '');
    b.onclick = () => show(i);
    $('nav').appendChild(b);
  });
}

function show(i) {
  cur = i;
  renderNav();
  $('lesson').hidden = i === 5;
  $('game').hidden = $('stats').hidden = i !== 5;
  if (i === 5) return play();
  const L = LESSONS[i];
  $('intro').textContent = L.intro;
  $('fb').textContent = ''; $('out').textContent = ''; $('next').hidden = true;
  $('code').innerHTML = '';
  L.code.split(/\{\{(\d)\}\}/).forEach((part, j) => {
    if (j % 2 === 0) return $('code').append(part);
    const inp = document.createElement('input');
    inp.value = vals[i][part] || '';
    inp.placeholder = '___';
    inp.dataset.k = part;
    inp.oninput = () => { inp.className = ''; };
    $('code').append(inp);
  });
}

$('check').onclick = () => {
  const L = LESSONS[cur], v = vals[cur], inputs = [...$('code').querySelectorAll('input')];
  inputs.forEach(inp => v[inp.dataset.k] = inp.value.trim());
  const hints = [];
  inputs.forEach(inp => {
    const k = +inp.dataset.k, good = v[k] && L.blanks[k].ok(v[k], v);
    inp.className = good ? 'ok' : 'bad';
    if (!good) {
      const hs = L.blanks[k].hints, t = tries[cur][k] = (tries[cur][k] || 0) + 1, n = Math.min(t, hs.length);
      hints.push(`Blank ${k + 1} (hint ${n} of ${hs.length}): ${hs[n - 1]}`);
    }
  });
  $('fb').className = 'fb warn';
  if (hints.length) { $('fb').textContent = hints.join('\n'); $('out').textContent = ''; return; }
  try {
    const logs = [], c = { log: (...a) => logs.push(a.map(x => Array.isArray(x) ? '[' + x.join(', ') + ']' : x).join(' ')) };
    new Function('console', LESSONS.slice(0, cur).map((l, i) => quiet(i)).join('\n') + '\n' + asm(cur))(c);
    $('out').textContent = 'Your code printed:\n' + logs.join('\n');
  } catch (e) { $('fb').textContent = 'Error: ' + e.message; return; }
  $('fb').className = 'fb good';
  $('fb').textContent = 'Correct! Lesson ' + (cur + 1) + ' complete.';
  doneCount = Math.max(doneCount, cur + 1);
  $('next').hidden = false;
  $('next').textContent = cur === 4 ? 'Play the game!' : 'Next lesson';
  renderNav();
};
$('next').onclick = () => show(cur + 1);

// ---------- the game (built from YOUR hero) ----------
function ask(opts) {
  return new Promise(res => {
    $('gact').innerHTML = '';
    opts.forEach(([label, v]) => {
      const b = document.createElement('button');
      b.textContent = label;
      b.onclick = () => { $('gact').innerHTML = ''; res(v); };
      $('gact').appendChild(b);
    });
  });
}
const glog = t => { $('gout').textContent += t + '\n'; $('gout').scrollTop = 1e6; };

async function play() {
  $('gout').textContent = ''; $('enemy').hidden = true;
  const hero = buildHero(), max = hero.health;
  const stats = () => {
    hero.health = Math.floor(hero.health);
    $('s-name').textContent = hero.name;
    $('s-health').textContent = Math.max(hero.health, 0);
    $('s-attack').textContent = hero.attack;
    $('s-defense').textContent = hero.defense;
    $('s-gear').textContent = hero.gear.join(', ');
    $('hero-bar').style.width = Math.min(100, Math.max(0, hero.health) / max * 100) + '%';
  };
  async function fight(e) {
    e.max = e.health;
    $('enemy').hidden = false; $('enemy-name').textContent = e.name;
    while (e.health > 0 && hero.health > 0) {
      $('enemy-bar').style.width = e.health / e.max * 100 + '%';
      const m = await ask([['Attack', 1], ['Use Potion', 2]]);
      if (m === 1) {
        e.health = Math.floor(e.health - hero.attack * (1 - 0.01 * e.defense));
        glog(`You attack the ${e.name}. It has ${Math.max(e.health, 0)} health.\n`);
      } else { hero.health += 25; glog('You use a potion.\n'); }
      $('enemy-bar').style.width = Math.max(0, e.health / e.max * 100) + '%';
      if (e.health > 0) {
        hero.health -= e.attack * (1 - 0.01 * hero.defense);
        glog(`${e.text} You have ${Math.max(Math.floor(hero.health), 0)} health.\n`);
      }
      stats();
    }
    return hero.health > 0;
  }
  const end = async msg => { glog(msg); if (await ask([['Play again', 1]])) play(); };
  stats();
  glog(`${hero.name} the hero heads out with: ${hero.gear.join(', ')}\nA goblin blocks the road!\n`);
  if (!await fight({ name: 'goblin', health: 45, defense: 10, attack: 8, text: 'The goblin hits you.' })) return end('You died.');
  glog('You defeated the goblin! It drops a key.\n');
  const path = await ask([['Fire Castle', 1], ['Ice Tower', 2]]);
  const boss = path === 1
    ? { name: 'dragon', health: 120, defense: 25, attack: 14, text: 'The dragon breathes fire.' }
    : { name: 'ice wizard', health: 90, defense: 0, attack: 18, text: 'The wizard casts an ice storm.' };
  glog(`A ${boss.name} appears!\n`);
  end(await fight(boss) ? `You destroyed the ${boss.name}. You win!` : 'You died.');
}

show(0);
