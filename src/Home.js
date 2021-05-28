function Home()
{
    const home = document.createElement("div")
    const head = document.createElement("h1") 
    const para = document.createElement("h3")
    head.innerText = "Food Factory"
    para.innerText = "Best Chinese Food You will ever taste"
    home.innerHTML = head.outerHTML + para.outerHTML
    return home
}

export default Home