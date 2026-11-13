# Samuel Hult – artisthemsida

En responsiv, statisk artisthemsida på svenska. Den fungerar på GitHub Pages utan byggsteg.

## Innan publicering

Uppdatera `index.html` med:

- Samuels YouTube-kanal och länkar till de låtar eller klipp som ska visas.
- En fungerande bokningsadress eller annan kontaktväg i bokningssektionen.
- Sidans `description` och Open Graph-texter om presentationen ändras.
- En `og:image` med en egen, optimerad pressbild om en sådan finns.

Sidan innehåller just nu tydligt markerade platshållare för låtar och bokningskontakt. Publicera inte innan kontaktväg och önskade musiklänkar har lagts till.

## Publicera via GitHub Pages

1. Skapa ett GitHub-repository och lägg `index.html`, `styles.css` och `script.js` i repositoryts rot.
2. Öppna repositoryts **Settings → Pages**.
3. Under **Build and deployment**, välj **Deploy from a branch**, välj `main` och `/ (root)`, och spara.
4. När GitHub Pages visar att publiceringen är klar får du en `github.io`-adress. Kontrollera sidan där och testa även mobilmenyn.
5. För en egen domän: ange domänen i **Settings → Pages → Custom domain**. Lägg till den `CNAME`-fil som GitHub skapar i repositoryts rot.
6. Lägg in DNS-posterna hos domänleverantören enligt GitHub Pages-anvisningarna. En `www`-underdomän brukar använda en CNAME-post till din `github.io`-adress; en rotdomän använder GitHubs A-poster. Följ alltid de aktuella värdena i GitHubs dokumentation.
7. När DNS har hunnit uppdateras, aktivera **Enforce HTTPS** i Pages-inställningarna.

Inställningar och DNS-värden kan ändras. Följ GitHubs aktuella guide: <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>.

## Sökmotoroptimering

Sidan har svensk språkdeklaration, sidtitel, beskrivning, Open Graph-metadata och strukturerade personuppgifter. Lägg till en egen domän och en sidbild när de finns, och länka till webbplatsen från artistprofiler. Google behöver hitta och indexera den publicerade sidan; sökresultat kan dröja och en viss placering kan inte garanteras.
