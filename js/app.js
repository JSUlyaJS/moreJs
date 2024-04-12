// var navbarContent = ["About Us", "Cataloge", "Our Works", "Contacts"]

// var navbar = document.querySelector(".navbar")

// navbarContent.forEach(function(item){
//     var linkEl = document.createElement("a")
//     linkEl.textContent = item
//     linkEl.setAttribute("href", `/${item}`)
//     navbar.append(linkEl)
// })
var navbarContent = [
    {
        title: "About Us",
        link: "about/",
    },
    {
        title: "Cataloge",
        link: "cataloge/",
    },
    {
        title: "Our Works",
        link: "works/",
    },
    {
        title: "Contacts",
        link: "contacts/",
    },
]
var navbar = document.querySelector(".navbar")

navbarContent.forEach(function(item){
    var linkEl = document.createElement("a")
    linkEl.textContent = item.title
    linkEl.setAttribute("href", `/${item.link}`)
    navbar.append(linkEl)
})