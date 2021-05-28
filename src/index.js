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
        
        function setUnactive(mainData)
        {
            if(mainData.hasChildNodes())
            {
                const child = mainData.childNodes[0]
                child.classList.remove(".active")                               // reset on clicking button
                mainData.removeChild(mainData.childNodes[0])
            }
        }
        
        const displayWebsite = function()
        {
            const content = defaultElement().content
            const header = Header()        
            const navbar = header.navbar      
            const mainData = document.createElement("div");             
            content.appendChild(header.navbar)
            const buttons = document.querySelectorAll(".btn")
            const home = Home()

            home.classList.add(".active")
            mainData.appendChild(home)                      //initializing initial load 
            content.appendChild(mainData)

            const menu = Menu()
            const contact = Contact()
            buttons.forEach((btn)=>{
                btn.addEventListener("click",()=>{
                    if(btn.textContent=="Home")
                    {
                        if(home.classList.contains(".active")) return
                        home.classList.add(".active")
                        setUnactive(mainData)
                        mainData.appendChild(home)
                    }
                    else if(btn.textContent=="Menu")
                    {
                        if(menu.classList.contains(".active")) return                   //tab button functionality
                        menu.classList.add(".active")
                        setUnactive(mainData)
                        mainData.appendChild(menu)
                    }
                    else if(btn.textContent == "Contact")
                    {
                        if(contact.classList.contains(".active")) return
                        contact.classList.add(".active")
                        setUnactive(mainData)
                        mainData.appendChild(contact)
                    }
                    content.appendChild(mainData)
                })
            })
        }

        displayWebsite();

})()

