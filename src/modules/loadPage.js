function welcome(){
    const modal = document.getElementById('welcome');
    modal.style.display = 'block'

   const close =  document.getElementById('close');
   close.addEventListener('click', function(){
       event.preventDefault();
       modal.style.display = 'none'
   })

//    window.onload('load', welcome())

}

// window.onload('load', welcome())

export default welcome

