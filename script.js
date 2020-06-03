$(document).ready(function () {
   let projectNumber = 5;
   let pName = ["Brewery Locator","Scheduler","Password Generator","Note Taker","Burger App"];
   let pDes = ["Usage of serverside APIs, jQuery and Pure framework","Usage of local storage, basic js, and third-party API","Usage of basic JavaScript","Usage of Node and Express","Full stack webpage connected to heroku using JAWS DB"];
   let pImage = ["mugs.jpg","iconfinder_calendar_285670.png","733219.jpg","#","Burger.jpg"];
   let pLink = ["https://j-favorito.github.io/Project-1/","https://j-favorito.github.io/Homework-5/","https://j-favorito.github.io/Homework-3/","https://favorite-note-taker.herokuapp.com/","https://burger-maker-5000.herokuapp.com/"]
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