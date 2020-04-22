$(document).ready(function() {
    let name ="Joe Favorito";
    let nameElement=$("<h1>");
    let row=$("<div>");
    row.addClass("row");
    nameElement.addClass("col-12 jumbo-name");
    nameElement.text(name);
    row.append($("<center>"),nameElement);
    $(".jumbo").append(row);

});