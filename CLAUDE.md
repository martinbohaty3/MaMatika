# MaMatika – pokyny pro Claude Code

## Projekt

- MaMatika je veřejný web s cvičnými příklady z matematiky pro doučování na přijímačky na střední školy.
- Příklady jsou **inspirované** přijímacími zkouškami (CERMAT). Jsou vlastní a neoficiální.
- Autor: Martin Bohatý. Web běží na GitHub Pages.
- Technologie: čisté HTML a CSS, bez build kroku a bez frameworku. Vzorce se vykreslují knihovnou KaTeX z CDN.

## Jak se mnou komunikovat

- Piš česky. Krátké, faktické věty, bez zbytečných frází.
- Anglicky umím na úrovni B2. Když použiješ anglický termín, vysvětli ho.
- Když něco nejde určit z kontextu, zeptej se. Nic si nevymýšlej.
- Před složitějším úkolem (víc souborů, změna struktury) si vyžádej potvrzení.
- **Nikdy nemaž ani nepřejmenovávej soubory bez mého potvrzení.** Přejmenování rozbije odkazy.
- Koncepty a poznámky piš v `.md`. Finální dokumenty (mimo web) v `.pdf`.

## Citlivé informace

- Web je veřejný. Nepiš do souborů ani do commitů žádné osobní údaje o žákyni ani o klientech.
- Řešení (`*-reseni.html`, `*-postupy.html`) jsou veřejně dostupná všem, kdo znají odkaz. Počítej s tím.
- Název CERMAT používej jen popisně („inspirované…“). Žádné logo, žádné kopie oficiálních zadání.
- Nikdy nepřidávej do repozitáře hesla, tokeny ani klíče.

## Struktura souborů

Vše je v kořeni repozitáře (`index.html` musí zůstat v kořeni).

| Soubor | Obsah |
|---|---|
| `index.html` | rozcestník: část „Pro žákyni“ (zadání) a „Pro učitele“ (řešení) |
| `style.css` | společný vzhled a tisk |
| `check-katex.js` | kontrola, že se všechny vzorce vykreslí (viz „Kontrola před commitem“) |
| `zadani.html`, `reseni.html` | 26 úloh: rovnice, výrazy, slovní úlohy |
| `postupy.html` | podrobné postupy úloh 20 a 25 |
| `prace-zadani.html`, `prace-reseni.html`, `prace-postupy.html` | slovní úlohy o práci |
| `prace-rozsireni-zadani.html`, `prace-rozsireni-reseni.html` | rozšíření úloh o práci (14 úloh) |
| `geometrie-zadani.html`, `geometrie-reseni.html` | Pythagorova věta, prostor, grafy (24 úloh, SVG obrázky) |
| `rovnice-zlomky-zadani.html`, `rovnice-zlomky-reseni.html` | rovnice se zlomky (10 úloh) |

## Nová sada úloh: postup

1. Navrhni úlohy (typy a obtížnost viz níže).
2. **Každý výsledek ověř výpočtem** (Python, `fractions` nebo `sympy`), než ho zapíšeš.
3. Vytvoř `nazev-zadani.html` a `nazev-reseni.html` podle šablony níže.
4. Přidej odkazy do `index.html`: zadání do části „Pro žákyni“, řešení do části „Pro učitele“.
5. Spusť kontrolu vzorců (viz níže).
6. Ukaž mi změny a vyžádej potvrzení. Teprve potom commit a push.

## Konvence stránek

- Každá stránka má `<html lang="cs">`, `<title>Název – MaMatika</title>`, odkaz zpět na `index.html` a patičku.
- Na každé podstránce (ne na `index.html`) je odkaz zpět na přehled **nahoře i dole**:
  - nahoře `<div class="nav"><a href="index.html">← Přehled materiálů</a> <button class="print" type="button" onclick="window.print()">Vytisknout</button></div>`,
  - dole stejný `<div class="nav">` s odkazem, ale bez tlačítka, těsně před `<footer>`.
- Tlačítko **Vytisknout** je jen v horním `.nav` a je vpravo (`.nav` je `display:flex` s `justify-content:space-between` ve `style.css`). Při tisku se skrývá spolu s `.nav` a `footer`.
- Název webu je vždy **MaMatika**. V nadpisech a titulcích nepoužívej slovo CERMAT.
- Hlavička každé stránky:

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css">
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false});"></script>
```

- Verzi KaTeX neměň bez domluvy (je připnutá na 0.16.9).
- **Zadání** (pro žákyni): bez výsledků, `<ol start="N">` pro číslování, na konci tabulka výsledků s třídou `answers` (dva páry sloupců „Č. / Výsledek“, prázdná políčka). Nadpis „Tabulka výsledků“ i tabulka jsou obalené v `<div class="print-only">`: na obrazovce se **neukazují**, zobrazí se jen při tisku (`.print-only` je ve `style.css` `display:none`, v `@media print` `display:block`). Tabulky v řešeních (klíč) se neskrývají.
- **Řešení** (klíč): tabulka `Č. | Výsledek | Klíčový krok`. Výsledek má třídu `result`. U delších úloh rozepsané kroky a zkouška.
- Těžší úloha má před zadáním `<span class="star">★</span>`. Hvězdičku dávej jen na zhruba každou pátou úlohu.
- Mezera mezi příklady je **22 px** (`ol li { margin:22px 0 }` ve `style.css`). Nezvětšuj ji bez domluvy.
- Stránky musí jít vytisknout (pravidla `@media print` už ve `style.css` jsou).

## Zápis vzorců

- Inline `\( ... \)`, samostatný řádek `\[ ... \]`. Zlomky `\dfrac{a}{b}`.
- Desetinná čárka: `0{,}25`. Jednotky: `\text{cm}`, `\text{cm}^2`, `\text{cm}^3`.
- Zarovnané kroky rovnic: `\begin{aligned} ... &&|\cdot12 \\ ... \end{aligned}`.
- V textu dávej mezi číslo a jednotku nezlomitelnou mezeru: `9&nbsp;cm`, `25&nbsp;%`.

## Zásady pro příklady

- Úroveň: 9. třída, přijímací zkoušky na střední školu.
- **Výsledky mají vycházet hezky**: celá čísla nebo jednoduché zlomky. Používej pythagorejské trojice (3-4-5, 5-12-13, 8-15-17, 7-24-25, 9-12-15, 20-21-29).
- U válce a kužele zadávej výsledek jako násobek π.
- Složitější úlohy: proces může být delší, výsledek musí zůstat jednoduchý.
- U slovních úloh o práci počítej práci za jednotku času (zlomky nebo „díly“). Ukaž aspoň dva způsoby řešení.
- Typické formy: otevřená úloha, ANO/NE blok, výběr z možností, čtení z grafu nebo tabulky.
- U každé úlohy přidej zkoušku nebo kontrolu smyslu výsledku.

## Obrázky (SVG)

- Pouze inline SVG přímo v HTML. Žádné externí obrázky.
- Každý `<svg>` má `viewBox`, `width` a `height`. Písmo se nastavuje atributy `font-family` a `font-size`, **ne** přes `style` (atribut `style` dělá problémy při převodu na obrázek).
- Obalový `<div class="fig">` (ve `style.css`: `.fig svg { max-width:100%; height:auto; }`).
- Barvy: čáry `#1a1a1a`, pomocné čáry `#1f4e8c`, mřížka `#d9d9d9`.
- Skryté hrany těles čárkovaně. Hledaná veličina se popisuje „?“. Pravý úhel se značí čtverečkem.
- U obrázků ze zadání neuváděj hodnoty, které si má žák zjistit sám. Pod obrázek dej poznámku, že není v měřítku.
- Kontrola vzhledu: převeď SVG na PNG (`pip install cairosvg`) a obrázek si prohlédni.

## Kontrola před commitem

1. Všechny výsledky jsou ověřené výpočtem.
2. Všechny vzorce se vykreslí bez chyby. Spusť kontrolu ve složce s webem (skript `check-katex.js` leží v kořeni repozitáře):

```bash
npm i katex@0.16.9
node check-katex.js
```

   Výstup musí končit `chyb: 0`.
3. Všechny nové stránky jsou v `index.html` a odkazy fungují.
4. V nadpisech a titulcích není CERMAT. Každý titulek končí „– MaMatika“.
5. Do repozitáře se nedostaly `node_modules`, `package.json` ani dočasné soubory. Přidej je do `.gitignore`.

## Git

- Commit zprávy česky, krátké a věcné: `Přidána sada: rovnice se zlomky`, `Oprava mezery mezi příklady`.
- Jeden commit = jedna logická změna.
- Před `git push` mi ukaž `git status` a `git diff --stat` a počkej na potvrzení.
- Po pushi se web aktualizuje za 1–2 minuty (GitHub Pages, větev `main`, složka `/ (root)`).
