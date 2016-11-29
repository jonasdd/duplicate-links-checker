var as = document.getElementsByTagName('a');
var links = {};
for (var i = 0; i < as.length; i++) {
  if (as[i].childNodes.length != 0){
    // on filtre par liens simple (pas de liens contenant d'autres info ex: img). Les liens vides ne sont pas remontés
    if (as[i].childNodes[0].nodeName === '#text'){
      l = as[i].innerHTML;
      if(!links[l]){
        links[l] = [];
      }
      links[l].push(as[i]);
    }
  }
}
Object.keys(links).forEach(function(key){
  var autoColor = Math.floor(Math.random() *  210) + 1;
  if (links[key].length > 1) {
      console.log("Intitulé de lien dupliqué : "+key, links[key]);
      for (var i = 0; i < links[key].length; i++) {
        links[key][i].setAttribute('style','border: 4px solid hsl('+autoColor+', 100%, 50%);');
      }
  }
})
