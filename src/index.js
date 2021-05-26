import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'

(function(){


        const defaultElement = function()
        {
            const content = document.querySelector("#content")                  // content div (already created)
            return {content}
            
        }

        const tabButton = function(name)
        {
            const button = document.createElement("button")                     // button creation
            button.innerText = name
            button.classList.add("btn")
            return {button}
        }
        
        const Header = function()
        {
            const navbar = document.createElement("nav")
            navbar.classList.add("navbar")
            
            const homeButton = tabButton("Home").button
            const MenuButton = tabButton("Menu").button                         // creating Navbar
            const ContactButton = tabButton("Contact").button
            navbar.innerHTML = homeButton.outerHTML + MenuButton.outerHTML + ContactButton.outerHTML
            
            return {navbar,homeButton,MenuButton,ContactButton}
        }
        
        
        const displayWebsite = function()
        {
            const content = defaultElement().content
            const header = Header()                           
            content.appendChild(header.navbar)

            const buttons = document.querySelectorAll(".btn")
            buttons.forEach((btn)=>{
                btn.addEventListener("click",()=>{
                    if(btn.textContent=="Home")
                        Home()
                    else if(btn.textContent=="Menu")
                        Menu()
                    else if(btn.textContent == "Contact")
                        Contact()
                })
            })
        }

        displayWebsite();

})()

