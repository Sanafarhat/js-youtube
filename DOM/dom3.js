var MyCards = [
{
    "image" : "chandra.jpeg",
    "Name" : "Chandra",
    "Planet" : "Venus"
},
{
    "image" : "navya.jpeg",
    "Name" : "Navya",
    "Planet" : "Mars"
},
{
    "image" : "sana.jpeg",
    "Name" : "Sana",
    "Planet" : "Moon"
},
{
    "image" : "chandra.jpeg",
    "Name" : "Chandra",
    "Planet" : "Venus"
},
];

var cards = MyCards.map((ele) =>{
    return (`<div class="card">
        <div class="image-section">
            <img src= ${ele.image}/>
        </div>
        <div class="info-section">
            <div class="name">Name:${ele.Name}</div>
            <div class="age">Planet: ${ele.Planet}</div>
        </div>
    </div>`);
});



cards = cards.join(" ")

var parent = document.getElementsByClassName("card-parent")[0];
parent.innerHTML = cards;  //  This displays the cards dynamically

