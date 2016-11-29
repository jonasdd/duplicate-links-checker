# duplicate-links-checker

# Pour qui ?

Pour ceux qui seraient ammenés à auditer l'accessibilité web en suivant la méthodologie https://github.com/DISIC/rgaa_methodologie, cette bookmarklet permettra de naviguer rapidement parmi les css cités (et fourni dans le référentiel) grâce à un sélecteur rapide en pied de page - (fig1).

# Générer la bookmarklet

Github ne permet pas de générer directement le lien à copier dans vos favoris. Vous devez donc suivre ces trois étapes :
0. Utilisez un générateur de bookmarklet pour générer le lien de favori. Utilisez par exemple : http://bookmarklets.org/maker/
0. Veuillez décocher :
 0.URL-encode
 0.jQuery
0. Copier/coller le code ci-dessous dans le générateur

```javascript
var inlineScript = "https://cdn.rawgit.com/jonasdd/duplicate-links-checker/master/links-checker-0.3.js";

var head = document.head
  , scriptLink = document.createElement('script')
  scriptLink.src = inlineScript
  head.appendChild(scriptLink)
```
Il ne vous reste ensuite qu'à glisser/déposer le lien généré dans vos favoris.

# Utilisation

Naviguez vers la page à auditer. Cliquez sur votre favori. C'est tout !
