$(document).ready(function () {
   let projectNumber = 1;
   let pName = ["Brewery Locator"];
   let pDes = ["Usage of serverside APIs, jQuery and Pure framework"];
   let pImage = ["mugs.jpg"];
   let pLink = ["https://j-favorito.github.io/Project-1/"]
   console.log("script is working");
   for (let i = 0; i < projectNumber; i++) {
      let listElement = $("<a>");
      listElement.attr("href",pLink[i]);
      listElement.addClass("p-list");
      listElement.addClass("index_" + i)
      let nameElement = $("<h3>");
      nameElement.text(pName[i]);
      let desElement = $("<p>");
      desElement.text(pDes[i]);
      let imgElement = $("<img>");
      imgElement.attr("src", pImage[i]);
      imgElement.addClass("p-image");
      listElement.append(imgElement, nameElement, desElement);
      $(".project-list").append(listElement);
   }
});