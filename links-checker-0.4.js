var as = document.getElementsByTagName('a');
var links = {};
for (var i = 0; i < as.length; i++) {
  if (as[i].childNodes.length != 0){
    console.log(as[i].childNodes[0]);
    // on filtre par liens simple (pas de liens contenant d'autres info). Les liens vide ne sont pas remontés, ni les liens avec title identique, ni les liens avec le même href
    if ((as[i].childNodes[0].nodeName === '#text') && (as[i].offsetHeight != 0)){
      l = as[i].innerHTML;
      if(!links[l]){
        links[l] = [];
      }
      links[l].push(as[i]);
    }
  }
}
//var checkHidden = document.getElementById(id).offsetHeight;
var doublonCount = 0;
Object.keys(links).forEach(function(key){
  var autoColor = Math.floor(Math.random() *  210) + 1;
  doublonCount++;
  if (links[key].length > 1) {
      //console.log("Intitulé de lien dupliqué : "+key, links[key]);
      for (var i = 0; i < links[key].length; i++) {
        //if (links[key][i].offsetHeight != 0){
          var span = document.createElement('span');
          span.setAttribute("style","border:1px solid gray;color:black;font-size:0.875em;background:lightgray;position:absolute;left:-4px;bottom:100%;padding:2px");
          links[key][i].setAttribute('style','border: 4px solid hsl('+autoColor+', 100%, 50%);position:relative');
          links[key][i].appendChild(span);
          span.innerHTML= "#"+doublonCount;
        //}
      }
  }
})
