var as = document.getElementsByTagName('a');
var links = {};
for (var i = 0; i < as.length; i++) {
  if ((as[i].childNodes) && (as[i].childNodes[0].nodeName === '#text')){
    l = as[i].innerHTML;
    if(!links[l]){
      links[l] = [];
    }
    links[l].push(as[i]);
  }
}
Object.keys(links).forEach(function(key){
  if (links[key].length > 1) {
      console.log("Intitulé de lien dupliqué : "+key, links[key]);
  }
})
