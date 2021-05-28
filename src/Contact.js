function Contact()
{
    const div = document.createElement("div")
    const phone = document.createElement("h1")
    phone.innerText = "999999999"
    const address = document.createElement("h2")
    address.innerText = "This is my  physical address"
    div.innerHTML = phone.outerHTML + address.outerHTML
    return div
}

export default Contact