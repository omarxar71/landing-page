let links = document.querySelectorAll('.sections ul li a')
links.forEach(link=>{
    link.addEventListener('click' , function(){
        document.querySelector('.sections ul li a.active')?.classList.remove('active')
        this.classList.add('active')
    })
})
