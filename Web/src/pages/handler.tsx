import React from "react";


const tableService = () => {
    
    const Handle = () =>document.getElementById('create-new')?.classList.add('active')
    
    const Close = () =>document.getElementById('create-new')?.classList.remove('active')
    
   
        
          document.getElementById('CreateClient')?.addEventListener('click',Handle)
        
          

          document.getElementById('icon-close')?.addEventListener('click',Close)
          
       
}


export default tableService;