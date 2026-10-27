// Kontrola všech vzorců v HTML souborech ve složce, odkud se skript spouští.
// Použití: npm i katex@0.16.9   a pak   node check-katex.js
const katex = require('katex');
const fs = require('fs');
let bad = 0, n = 0;
for (const f of fs.readdirSync('.').filter(x => x.endsWith('.html'))) {
  const t = fs.readFileSync(f, 'utf8').split('<body>')[1] || '';
  const re = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
  let m;
  while ((m = re.exec(t))) {
    const s = m[1] ?? m[2];
    n++;
    try {
      katex.renderToString(s, { throwOnError: true, displayMode: m[1] !== undefined });
    } catch (e) {
      bad++;
      console.log(f, '->', s, '\n  ', e.message);
    }
  }
}
console.log('vzorců:', n, 'chyb:', bad);
process.exit(bad ? 1 : 0);
