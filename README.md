# duplicate-links-checker

# Pour qui ?

Pour ceux qui seraient ammenés à passer les tests d'acceptations du critère 6.4 du [référentiel accessibilité RGAA v3](https://disic.github.io/rgaa_referentiel_3-2016/criteres.html).

# Pourquoi ?

Parce que vérifier la présence d'intitulés de liens dupliqués dans la page (vérification du contexte) est laborieux. Ce script vous entourera tous les liens dupliqués et leurs donnera un identifiant afin de faciliter la recherche et leurs comparaisons. Des logs sont également remontés dans la console. Ils permettent de faire le focus directement sur le noeud à vérifier.

Le script ne tient pas compte :
* des liens vides
* des liens riches (contenant autre chose que du texte)

Il ne tient pas non plus compte (pour l'instant) :
* de la présence de `title` différent sur des liens ayant le même intitulé
* de la présence d'un `href` différent sur des liens ayant le même intitulé

# Générer la bookmarklet

Github ne permet pas de générer directement le lien à copier dans vos favoris. Vous devez donc suivre ces trois étapes :

0. Utilisez un générateur de bookmarklet pour générer le lien de favori. Utilisez par exemple : http://bookmarklets.org/maker/
0. Veuillez décocher :
 0. URL-encode
 0. jQuery
0. Copier/coller le code ci-dessous dans le générateur

```javascript
var inlineScript = "https://cdn.rawgit.com/jonasdd/duplicate-links-checker/master/links-checker-0.4.js";

var head = document.head
  , scriptLink = document.createElement('script')
  scriptLink.src = inlineScript
  head.appendChild(scriptLink)
```
Il ne vous reste ensuite qu'à glisser/déposer le lien généré dans vos favoris.

# Utilisation

Naviguez vers la page à auditer. Cliquez sur votre favori. C'est tout !

# TODO

Le script devrait pouvoir exclure les liens qui ont des attributs `href` identiques ou des attributs
 `title` différent puisque dans ce cas ils ne sont pas considéré comme problématiques.
 

**TODO > Attention : les intitulés de liens peuvent être dupliqués et cachés. Le script ne gère que le cas des liens non visibles par contre il faudrait tester le cas Aria-hidden > à tester**
