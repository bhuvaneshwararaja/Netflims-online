
export const ScrollLeft = (e) => {
    const index = e.target.id
    
        document.querySelectorAll(".flex-row")[index].scrollLeft += 500;
  }

 export const ScrollRight = (e) => {
   
    const index = e.target.id
    
    document.querySelectorAll(".flex-row")[index].scrollLeft -= 500;
  }