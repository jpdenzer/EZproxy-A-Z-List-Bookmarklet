javascript:(function(){
  for(var i = 0, l=document.links.length; i<l; i++) {
    if(document.links[i].href.startsWith("http://ezproxy.oswego.edu:2048/login?url=")){
      var str = document.links[i].href;
      document.links[i].setAttribute('href', str.split("http://ezproxy.oswego.edu:2048/login?url=")[1]);
      }
    }
    document.getElementById"s-lib-public-header-title").innerHTML  ="A-Z Databases - EZproxy stripped from URLS (temporary)";
  })(); 
