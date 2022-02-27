const beers = 
[
    {
        title: "Mango Bay",
        sub: "Mad Scientist Beer",
        text: "Pale Ale - American"
    },
    {
        title: "Távoli Galaxis",
        sub: "Rothbeer Brewery",
        text: "IPA - American"
    },
    {
        title: "Flying Rabbit AIPA",
        sub: "MONYO Brewing Co.",
        text: "IPA - American"
    },
    {
        title: "Liquid Cocaine",
        sub: "Mad Scientist Beer",
        text: "IPA - Imperial"
    },
    {
        title: "Organic Chocolate Stout",
        sub: "Samuel Smith Old Brewery",
        text: "Stout - English"
    },
    {
        title: "Bracia",
        sub: "Thornbridge Brewery",
        text: "Strong Ale - English"
    },
    {
        title: "Oatmeal Stout",
        sub: "Samuel Smith Old Brewery",
        text: "Stout - Oatmeal"
    },
    {
        title: "Black Tokyo Horizon",
        sub: "BrewDog",
        text: "Stout - American Imperial"
    },
    {
        title: "Vintage Ale",
        sub: "Fuler's",
        text: "Old Ale"
    },
    {
        title: "All the Leaves are Brown",
        sub: "Tempest Brewing Company",
        text: "Brown Ale - American"
    }
];

function loadEvent() {
    const rootElement = document.getElementById("root");

    for (let i = 0; i < beers.length; i++) {
        rootElement.insertAdjacentHTML("beforeend", `
            <div class="card">
                <i>${i+1}</i>
                <h2>${beers[i].title}</h2>
                <p>${beers[i].sub}</p>
                <h3>${beers[i].text}</h3>
                <button>details</button>
            </div>
        `);
    }
}

window.addEventListener("load", loadEvent);