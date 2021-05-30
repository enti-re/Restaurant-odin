function Home()
{
    const home = document.createElement("div")
    const head = document.createElement("h1") 
    const head2 = document.createElement("h2") 
    const para = document.createElement("h3")
    head.innerText = "Food Factory"
    head2.innerText = "Tasty and Spicy"
    para.innerText = "Come and try the best spicy chinese food you will ever taste"
    home.innerHTML = head.outerHTML + head2.outerHTML + para.outerHTML
    return home
}

export default Home