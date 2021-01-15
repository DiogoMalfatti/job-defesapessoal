let $homeLogotipoBranco = document.querySelector('.homeLogotipoBranco');
let $homeLogotipoPreto = document.querySelector('.homeLogotipoPreto');

window.addEventListener('scroll', function() {
    if(scrollY > 100) {
        $homeLogotipoBranco.classList.remove('brancoLogotipoOpen')
        $homeLogotipoBranco.classList.add('brancoLogotipoClose')
        $homeLogotipoPreto.classList.remove('pretoLogotipoClose')
        $homeLogotipoPreto.classList.add('pretoLogotipoOpen')
    }else {
        $homeLogotipoBranco.classList.remove('brancoLogotipoClose')
        $homeLogotipoBranco.classList.add('brancoLogotipoOpen')
        $homeLogotipoPreto.classList.remove('pretoLogotipoOpen')
        $homeLogotipoPreto.classList.add('pretoLogotipoClose') 
    }         
})
