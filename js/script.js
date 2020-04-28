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
    var radio = document.getElementsByName("active");
    var select = document.getElementById("category").value;
    var count=0;
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
    else if(isNaN(price))
    {
        window.alert("Price has to be a number");
    }
    if(select=="")
    {
        window.alert("Select one category");
        return false;
    }
    for(var i=0;i<radio.length;i++)
    {
        if(radio[i].checked)
        {
            count++;
        }
    }
    if(count==0)
    {
        window.alert("Active?")
        return false;
    }
    else
    {
        return true;
    }
}