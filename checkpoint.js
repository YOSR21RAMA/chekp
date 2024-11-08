var btnsPlus = document.querySelectorAll('.btnPlus')
var btnsMoins = document.querySelectorAll('.btnMoins')
console.log(btnsPlus)
for(let i = 0; i <btnsPlus.length; i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
        sometotal()
    })
}
for (let i = 0; i < btnsMoins.length; i++) {
    btnsMoins[i].addEventListener('click',function(){
        if (btnsMoins[i].nextElementSibling.innerText>0) {
            btnsMoins[i].nextElementSibling.innerText--
            sometotal()


        } 
    })
}
    
           var bitrash = document.querySelectorAll('.bi-trash')
            console.log(bitrash)
           for (let i = 0; i < bitrash.length; i++) {

            bitrash [i].addEventListener('click',function(){
                bitrash[i].parentElement.parentElement.parentElement.remove() 
                sometotal()             
            })            
           }


           var biheart =document.querySelectorAll('.bi-heart-fill')
           console.log(biheart)
           for (let i = 0; i < biheart.length; i++) {
            biheart[i].addEventListener('click',function(){           
            biheart[i].classList.toggle('layka')   
        })
           }

          
           function sometotal(){
            var price = document.querySelectorAll('.price')
            var qte = document.querySelectorAll('.qte')
            var total = document.querySelector('#title')
            var main = 0
            
            for (let i = 0; i < price.length; i++) {
                
                main = main + price[i].innerText * qte[i].innerText
                
            }
        
            total.innerText = main
           }
   
        
   
   
    
    



    
 