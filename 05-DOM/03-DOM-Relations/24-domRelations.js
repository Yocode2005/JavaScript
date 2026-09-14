const div = document.createElement('div')
    console.log(div);
    // for properties
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
     // div.innerText = "Chai aur code"
    const addText = document.createTextNode("Chai aur code")
    div.appendChild(addText)

     document.body.appendChild(div) // web page se attach kren ke liye