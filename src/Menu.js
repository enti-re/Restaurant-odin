function Menu()
{
    const menu = document.createElement("div")
    const para = document.createElement("p")
    para.innerText = "This is The menu"
    menu.appendChild(para);
    return menu
}

export default Menu