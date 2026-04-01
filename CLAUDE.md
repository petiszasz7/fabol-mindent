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
- Nagy Játszótér
- Kis Játszótér
- Kerti Kiülő – Nádtetős
- Kőrisfa Garnitúra 2+2+1
- Összecsukható Garnitúra
- 5 Pozíciós Garnitúra
- Pillangó Csavaros Garnitúra
- Zsindelytetős Hintaágy

## Navigáció (minden oldalon)
- Játszóterek → termekek.html
- Kerti bútorok → termekek.html
- Kiülők → termekek.html
- Munkáink → rolunk.html
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
- Tiszta HTML fájlok, nincs külső backend
- A weboldal GitHub Pages-en fut
- Szerkesztés után feltöltés:
  ```
  git add .
  git commit -m "mit változtattál"
  git push
  ```
- Változás 1-2 percen belül megjelenik az élő oldalon

## Szerkesztési irányelvek
- Minden oldalon azonos navigáció és footer legyen
- A zöld (#2D5016) szín következetesen használatos gombokhoz és kiemelésekhez
- Képek helyőrzőként egyelőre gradient-es div elemek
- Mobilbarát (responsive) kialakítás Tailwind segítségével
