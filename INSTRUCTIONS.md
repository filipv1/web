# Návod na Úpravu Webové Stránky Zámecké Kavárny

Tato webová stránka je vytvořena pomocí HTML a Tailwind CSS. Zde je návod, jak můžete jednoduše upravit její obsah.

## 1. Celková Struktura Souborů

Web se skládá z následujících hlavních souborů:
- `index.html`: Domovská stránka.
- `menu.html`: Stránka s jídelním lístkem.
- `gallery.html`: Stránka galerie.
- `contact.html`: Stránka s kontaktními informacemi.
- `script.js`: Soubor pro interaktivitu (např. mobilní menu).
- `INSTRUCTIONS.md`: Tento návod.

Styly jsou definovány přímo v HTML souborech pomocí tříd Tailwind CSS.

## 2. Úprava Obsahu

Pro úpravu textů na stránce otevřete příslušný `.html` soubor v textovém editoru (např. Poznámkový blok, VS Code, Sublime Text).

### A. Běžné Texty
Texty jako nadpisy, odstavce na domovské stránce (`index.html`) nebo kontaktní údaje (`contact.html`) můžete přímo přepsat. Najděte text, který chcete změnit, a upravte ho.

**Příklad (změna telefonu v `contact.html`):**
Najděte řádek obsahující:
`<p class="text-lg text-gray-700 mb-6"><a href="tel:+420123456789" class="text-amber-600 hover:text-amber-700">+420 123 456 789</a></p>`
A změňte telefonní číslo jak v textu, tak v `href` odkazu.

### B. Jídelní Lístek (`menu.html`)
Otevřete soubor `menu.html`. Menu je rozděleno do sekcí (např. Káva, Dezerty).

**Úprava existující položky:**
Najděte položku, kterou chcete upravit. Změňte její název nebo cenu.
Příklad:
```html
<div class="border-b pb-2">
  <h3 class="text-xl font-medium text-gray-800">Espresso</h3> <!-- Zde změňte název -->
  <p class="text-gray-600">55 Kč</p> <!-- Zde změňte cenu -->
</div>
```

**Přidání nové položky:**
Nejjednodušší je zkopírovat HTML blok existující položky a vložit ho na nové místo v rámci dané kategorie. Poté upravte název a cenu.
Příklad bloku ke zkopírování:
```html
<div class="border-b pb-2">
  <h3 class="text-xl font-medium text-gray-800">Nová Položka</h3>
  <p class="text-gray-600">Cena</p>
</div>
```

**Odebrání položky:**
Smažte celý HTML blok (`<div>...</div>`) dané položky.

**Úprava názvu kategorie:**
Najděte nadpis kategorie, např.:
`<h2 class="text-3xl font-semibold text-amber-800 mb-6">Káva</h2>`
A přepište text "Káva".

### C. Galerie (`gallery.html`)
Otevřete soubor `gallery.html`. Obrázky jsou vloženy pomocí `<img>` tagů.

**Změna obrázku:**
Najděte `<img>` tag, jehož obrázek chcete změnit. Upravte atribut `src`:
```html
<img src="https://placekitten.com/400/300" alt="Popisek obrázku" class="max-h-full max-w-full">
```
Nahraďte `https://placekitten.com/400/300` URL adresou vašeho nového obrázku. Můžete použít obrázky nahrané na váš hosting nebo na externí službu. Pro nejlepší vzhled se snažte používat obrázky s podobným poměrem stran.

**Přidání nového obrázku:**
Zkopírujte celý `<div>` blok obsahující `<img>` tag a vložte ho do mřížky (gridu). Poté změňte `src` a `alt` atribut.
Příklad bloku ke zkopírování:
```html
<div class="bg-gray-200 aspect-square flex items-center justify-center">
  <img src="URL_VASEHO_OBRAZKU" alt="Popisek vašeho obrázku" class="max-h-full max-w-full">
</div>
```

## 3. Úprava Vzhledu (Pro Pokročilejší)

Vzhled webu je řízen pomocí [Tailwind CSS](https://tailwindcss.com/docs). Jedná se o utility-first CSS framework, kde styly přidáváte pomocí tříd přímo do HTML elementů (např. `text-xl`, `bg-amber-800`, `p-4`).

Pokud chcete provádět větší designové změny, doporučujeme se seznámit se základy Tailwind CSS. Pro jednoduché změny barev nebo velikostí textu můžete zkusit najít odpovídající třídu v HTML a upravit ji podle dokumentace Tailwind CSS.

Například, `bg-amber-800` nastavuje tmavě jantarové pozadí. Změnou na `bg-sky-800` byste změnili barvu na tmavě modrou.

## 4. Nasazení Webové Stránky

Tato webová stránka se skládá ze statických souborů (HTML, CSS, JavaScript). Můžete ji nahrát na jakýkoliv hosting, který podporuje statické stránky (např. GitHub Pages, Netlify, Vercel, nebo váš běžný webhosting). Stačí nahrát všechny soubory (`.html`, `script.js`, `INSTRUCTIONS.md` a případné obrázky) do kořenového adresáře vašeho hostingu.

---

Doufáme, že vám tento návod pomůže s údržbou vaší nové webové stránky!
```
