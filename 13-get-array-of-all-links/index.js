let links = document.links;

for (var i = 0; i < links.length; i++) {
  var linkHref = links[i].href;
  console.log(linkHref); // https://google.com/, https://bing.com/, https://yahoo.com/
}
