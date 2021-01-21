
 var scroll_list = document.querySelector('.scroll_list'),
     list_items = document.querySelectorAll('.scroll_list li'),
     currentIdx = 0,
     slideCount =list_items.length,
     slideWidth = 330,
     slideMargin = 16,
     prevBtn = document.querySelector('.prev'),
     nextBtn = document.querySelector('.next');

 function moveSlide(num){

     scroll_list.style.left = -num * 330 + 'px';
     currentIdx = num;
 }

 nextBtn.addEventListener('click',function(){
     if(currentIdx<slideCount-3){
     moveSlide(currentIdx+3);
     
     }else{
         moveSlide(0);
     }
 });

 prevBtn.addEventListener('click',function(){
    if(currentIdx > 0){
    moveSlide(currentIdx-3);
    }else{
        moveSlide(0);
    }
});
//////////////////////////////////////
var scroll_list2 = document.querySelector('.scroll_list2'),
     list_items2 = document.querySelectorAll('.scroll_list2 li'),
     currentIdx2 = 0,
     slideCount2 =list_items2.length,
     slideWidth2 = 330,
     slideMargin2 = 16,
     prevBtn2 = document.querySelector('.prev2'),
     nextBtn2 = document.querySelector('.next2');

 function moveSlide2(num){

     scroll_list2.style.left = -num * 330 + 'px';
     currentIdx2 = num;
 }

 nextBtn2.addEventListener('click',function(){
     if(currentIdx2<slideCount2-3){
     moveSlide2(currentIdx2+3);
     
     }else{
         moveSlide2(0);
     }
 });

 prevBtn2.addEventListener('click',function(){
    if(currentIdx2 > 0){
    moveSlide2(currentIdx2-3);
    }else{
        moveSlide2(0);
    }
});

////////////////////////////////////////
var scroll_list3 = document.querySelector('.scroll_list3'),
     list_items3 = document.querySelectorAll('.scroll_list3 li'),
     currentIdx3 = 0,
     slideCount3 =list_items3.length,
     slideWidth3 = 330,
     slideMargin3 = 16,
     prevBtn3 = document.querySelector('.prev3'),
     nextBtn3 = document.querySelector('.next3');

 function moveSlide3(num){

     scroll_list3.style.left = -num * 330 + 'px';
     currentIdx3 = num;
 }

 nextBtn3.addEventListener('click',function(){
     if(currentIdx3<slideCount3-3){
     moveSlide3(currentIdx3+3);
     
     }else{
         moveSlide3(0);
     }
 });

 prevBtn3.addEventListener('click',function(){
    if(currentIdx3 > 0){
    moveSlide3(currentIdx3-3);
    }else{
        moveSlide3(0);
    }
});

//////////////////////////////////////////////////////


     
    