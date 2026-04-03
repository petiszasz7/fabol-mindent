# Fából Mindent – Projekt leírás

## A vállalkozásról
- **Név:** Fából Mindent (TUDOR E.V.)
- **Adószám:** 68709950-1-39
- **Profil:** Prémium kézműves fa játszóterek, kerti bútorok és kiülők gyártása
- **Tapasztalat:** Több mint 15 éve a piacon, erdélyi mesterek keze munkája
- **Szállítás:** Ingyenes országos szállítás

## Kapcsolat
- **Telefon:** +36 20 612 8116
- **Facebook:** https://www.facebook.com/profile.php?id=100089913262225

## Fájlok és oldalak
- `index.html` – Főoldal (hero, termék kártyák, előnyök, referenciák)
- `termekek.html` – Termékek listaoldal
- `termek-reszlet.html` – Egyedi termék részletes oldal
- `rolunk.html` – Rólunk és munkáink oldal
- `kapcsolat.html` – Kapcsolat és árajánlat kérő űrlap

## Termékek

### Játszóterek
- **Nagy Játszótér** — raktárról, gyors szállítás + helyszíni összeszerelés
- **Kis Játszótér** — kisebb kertekbe, fiatalabb gyerekeknek, raktárról

### Kerti bútorok
- **Kerti Kiülő – Nádtetős** — 225.000 Ft, fenyő 10x10-es oszlopok, 5cm ülőfelület, 2m-es padok, + 2db ajándék grill sütő-fatál szett
- **Kőrisfa Garnitúra 2+2+1** — kőrisfa, lazúrozott + lakkozott, 3 szín (cseresznye, tölgy, dió)
  - 8 személyes (150 cm-es asztal): 245.000 Ft
  - 10 személyes (200 cm-es asztal): 295.000 Ft
- **Összecsukható Garnitúra** — borovi fenyő, lazúrozott, 2 szín (cseresznye, tölgy)
  - 6 személyes (150 cm-es asztal): 185.000 Ft
  - 8 személyes (200 cm-es asztal): 215.000 Ft
- **5 Pozíciós Garnitúra** — borovi fenyő, lazúrozott, állítható háttámla, 2 szín (cseresznye, tölgy)
  - 6 személyes (150 cm-es asztal): 295.000 Ft
  - Párna: 5.500 Ft/db
- **Pillangó Csavaros Garnitúra** — borovi fenyő, lazúrozott, 2 szín (cseresznye, tölgy)
  - 8 személyes (150 cm-es asztal): 195.000 Ft
  - 10 személyes (200 cm-es asztal): 225.000 Ft
- **Zsindelytetős Hintaágy** — borovi fenyő, 3 személyes, 500 kg teherbírás, párna ajándék: 235.000 Ft

### Minden terméknél
- Ingyenes országos szállítás + összeszerelés
- Előleg nélkül, fizetés csak átvételkor

## Navigáció (minden oldalon)
- Főoldal → index.html
- Termékek → termekek.html
- Rólunk → rolunk.html
- Kapcsolat → kapcsolat.html
- Árajánlat gomb → kapcsolat.html

## Design és stílus
- **Háttérszín:** #F5F0EB (meleg törtfehér, fa hangulat)
- **Sötét barna szöveg:** #2C1810
- **Fő zöld szín:** #2D5016 (gombok, logó, kiemelések)
- **Akcent narancs:** #C4652A (kötelező mezők jelölése)
- **Betűtípusok:**
  - Szöveg: DM Sans (300, 400, 500, 600)
  - Címek/logó: DM Serif Display (egyes oldalakon Playfair Display)
- **Stílus:** natúr, prémium, rusztikus, kézműves hangulat
- **Ikonok:** Iconify Solar csomag (solar:...)
- **CSS framework:** Tailwind CSS (CDN)

## Technikai tudnivalók
- Tiszta HTML fájlok
- A weboldal Vercelen fut, GitHub repoval összekapcsolva (petiszasz7/fabol-mindent)
- Vercel automatikusan deployol minden git push után
- Email küldés: Resend API, a végpont: /api/send-email.js
- Resend API kulcs Vercelben van tárolva: RESEND_API_KEY environment variable
- Célzott email cím: fabolmindent.hu@gmail.com
- Szerkesztés után feltöltés:
  ```
  git add .
  git commit -m "mit változtattál"
  git push
  ```
- Változás 1-2 percen belül megjelenik az élő oldalon

## Szerkesztési irányelvek
- Minden oldalon azonos navigáció és footer legyen
- Ha a navigációt módosítod, azt MINDEN html fájlban egyszerre kell elvégezni: index.html, termekek.html, termek-reszlet.html, rolunk.html, kapcsolat.html
- Navigációt mindig desktop és mobil menüben egyaránt módosítani kell
- A zöld (#2D5016) szín következetesen használatos gombokhoz és kiemelésekhez
- Képek helyőrzőként egyelőre gradient-es div elemek
- Mobilbarát (responsive) kialakítás Tailwind segítségével
