# Samuel Hult – artisthemsida

Responsiv, statisk artisthemsida på svenska. Webbplatsen publiceras från `main` via GitHub Pages utan byggsteg.

## Ändra webbplatsen

- Ändra sidans texter och metadata i `index.html`.
- Lägg YouTube-klipp i karusellen i `script.js` genom att lägga till ett objekt med videons ID och titel i `youtubeClips`. ID:t finns efter `v=` i en YouTube-länk.
- Lägg till bilder och bildtexter i `galleryImages` i `script.js` och placera bildfilerna i `assets/`.
- Byt porträttet genom att ersätta `assets/samuel-hult-dragspel.jpg` och behålla samma filnamn, eller ändra bildsökvägen i `index.html`.
- Uppdatera e-postadressen i bokningssektionen om kontaktadressen ändras.

Karusellen visar YouTubes inbäddade spelare direkt på sidan; besökaren startar klippet med YouTubes egna kontroller. Videon strömmas från YouTube och laddas inte ner eller lagras lokalt.

## Publicera ändringar

Spara filerna, granska ändringarna och skicka dem till GitHub:

```powershell
git add index.html styles.css script.js README.md assets/
git commit -m "Update artist website"
git push
```

GitHub Pages bygger om webbplatsen från `main` efter push. Den publicerade sidan finns på <https://samuelhult.github.io/Portfolio/>.

## Egen domän

Ange domänen under **Settings → Pages → Custom domain** och ställ in DNS-posterna hos domänleverantören enligt GitHubs aktuella dokumentation: <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>.

## Sökmotoroptimering

Sidan har svensk språkdeklaration, sidtitel, beskrivning, Open Graph-metadata och strukturerade personuppgifter. Google behöver hitta och indexera den publicerade sidan; sökresultat kan dröja och en viss placering kan inte garanteras.
