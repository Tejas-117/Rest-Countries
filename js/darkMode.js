/////////// function dark mode /////////

// adds class darkTheme and necessary changes for other elements

function darkMode () {   
   body.classList.toggle('darkTheme')

  const elements = document.querySelectorAll('.elements');
  let color;
   if(body.classList.contains('darkTheme')){
      color = 'hsl(209, 23%, 22%)'      
   } 
   else {
      color = 'hsl(0, 0%, 100%)'
   }

   elements.forEach(element => {
        element.style.backgroundColor = color;
   })
}