function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
};
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

function formsubmit()
{
    var item = document.getElementById("itemname").value;
    var price = document.getElementById("price").value;
    if(item=="")
    {
        window.alert("Item name is required");
        return false;
    }
    else if(item.length>200)
    {
        window.alert("Item name cannot exceed 200 characters.");
        return false;
    }
    if(price=="")
    {
        window.alert("Price is required");
        return false;
    }
}