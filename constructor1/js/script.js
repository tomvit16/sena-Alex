
  (function ($) {
      $(document).ready(function () {


  // Создаём холст

  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // Создаем объект изображения
  var img = new Image();

  //создаём переменную для фото майки

  var imgshirt = "./img/1.jpg"

  // Загружаем файл изображения
  img.src = imgshirt;

  // Прорисовываем изображение. 

  img.onload = function () {

      context.drawImage(img, 0, 0, 400, 400);

  };

          
          
          
          
          //убираем у ссылок поведение по умолчанию

          $('a').on('click', function (e) {
              e.preventDefault();
          });


          //      Выбор этапов

          $('.constructor__stages__ul li').click(function () {
              $('.stage path.active').css('fill', "#8B8B8B");
              $('.constructor__stages__ul li').removeClass('stage__active');


              $(this).addClass('stage__active');
              $('.stage path.active').removeClass('active');

              $("path", $(this)).addClass('active');
          });

          //Закрашиваем svg при наведении
          $('.stage').mouseenter(function () {
              $("path", $(this)).css('fill', "#000");

          });

          //убираем закрашивание     

          $(".stage").mouseleave(function () {
              var actClass = $("path", $(this)).hasClass('active');

              if (actClass) {
                  return
              } else {

                  $("path", $(this)).css('fill', "#8B8B8B");
              }
          });


          //     перекидываем класс active  в constructor__sex
          
          var valSex = 'Man';  //в этой переменной храним текущеее значение Sex
          
          $('.constructor__sex__ul li a').click(function () {
              $(".constructor__sex__ul li a.active").removeClass('active');
              $(this).addClass('active');
              
              valSex = $(this).text();

              
          });


          //     перекидываем класс active  в constructor__style    
          
          var valStyle = 'T-shirt';
          
          $('.constructor__style__ul li a').click(function () {
              $(".constructor__style__ul li a.active").removeClass('active');
              $(this).addClass('active');
              
              valStyle = $(this).text();
              
           
          });


          //      меняем фото в canvas

          $('.canvas__img img').click(function () { //по клику на изображение

              imgshirt = $(this).attr('src'); //достаю значение атрибута src и записываю 

              img.src = imgshirt; //загружаем новый путь изображения

              // Прорисовываем изображение. 

              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
          });


          
          
          
//          подведение кнопок stage
          
          $('.constructor__stage__1').click( function () {
              $('.constructor__sex__style').css('display', 'block');
              $('.constructor__type__color').css('display', 'none');
              $('li.stage__active').removeClass('stage__active');
              $('li.constructor__stage__1').addClass('stage__active');
              $('.stage path.active').removeClass('active');
              $('li.constructor__stage__1 a svg path').css('fill', "#000");
              $('.constructor__title h2').text('Выберите пол и стиль'); 
          });
          

//          stage 2
          
            $('.constructor__stage__2').click( function () {
              $('.constructor__sex__style').css('display', 'none');
              $('.constructor__type__color').css('display', 'block');
              $('li.stage__active').removeClass('stage__active');
              $('li.constructor__stage__2').addClass('stage__active');
              $('.stage path.active').removeClass('active');
              $('li.constructor__stage__2 a svg path').css('fill', "#000");
              $('.constructor__title h2').text('Определите тип и цвет модели'); 
          });
          
          
          
          
          
          
          
          
        
  //поведение кнопки woman
          //меняем в canvas одежду на женскую

          $(".constructor__sex__ul__li__woman").click(function () { // по клику на woman
          
              if (valStyle == 'T-shirt') {               
                  $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
    $(this).attr('src', function () {  
          var valSrc = 'img/woman/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;  
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.      
              //загружаем в canvas новые майки
              imgshirt = 'img/woman/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }        
              } else {   
              $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.  
    $(this).attr('src', function () { 
          var valSrc = 'img/woman/woman_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.    
              //загружаем в canvas новые майки
              imgshirt = 'img/woman/woman_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
              }
          });
          
          
            //поведение кнопки man
          //меняем одежду на мужскую
           $(".constructor__sex__ul__li__man").click(function () { // по клику на woman

  if (valStyle == 'T-shirt') {               
                  $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
    $(this).attr('src', function () {  
          var valSrc = 'img/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;  
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.      
              //загружаем в canvas новые майки
              imgshirt = 'img/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }        
              } else {   
              $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.  
    $(this).attr('src', function () { 
          var valSrc = 'img/man_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.    
              //загружаем в canvas новые майки
              imgshirt = 'img/man_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
              }
          });
          
          
          
          //поведение кнопки child
//          меняем одежду на десткую
          
           $(".constructor__sex__ul__li__child").click(function () { // по клику на woman

  if (valStyle == 'T-shirt') {               
                  $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
    $(this).attr('src', function () {  
          var valSrc = 'img/child/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;  
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.      
              //загружаем в canvas новые майки
              imgshirt = 'img/child/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }        
              } else {   
              $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.  
    $(this).attr('src', function () { 
          var valSrc = 'img/child/child_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.    
              //загружаем в canvas новые майки
              imgshirt = 'img/child/child_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
              }
          });
          
          
    
//                 перекидываем класс active  в canvas__img         
          $('.canvas__img img').click(function () {              
              $(".canvas__img img.active").removeClass('active');
              $(this).addClass('active');
          });
          
          
          
          
       
          //поведение кнопки sweatshirt при включённом man
          

           $(".constructor__style__sweatshirts").click(function () { // по клику на sweatshirts
               
               if (valSex == 'Man') {        //проверяем, что находится в valSex 
//                   а дальше по накатанной
                  $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/man_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/man_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
    
               } if (valSex == 'Woman') {
                   
                   $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/woman/woman_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/woman/woman_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
    
               } if (valSex == 'Child') {
                   
                         $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/child/child_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/child/child_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
      
               }
        
          });
          
          
//          поведение для кнопки t-shirt

          
          $(".constructor__style__tshirt").click(function () { // по клику на sweatshirts
               
               if (valSex == 'Man') {        //проверяем, что находится в valSex 
//                   а дальше по накатанной
                  $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
    
               } if (valSex == 'Woman') {
                   
                   $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/woman/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/woman/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
    
               } if (valSex == 'Child') {
                   
                         $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/child/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/child/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
      
               }
        
          });
          
          
//          перекидываем класс active  в cotout type

          
            //     перекидываем класс active  в constructor__style    
          
          var valCotoutType = 'Round';   // переменная содержит текующее значение Cotout type
          
          $('.constructor__cotout__type__ul li img').click(function () {
              $(".constructor__cotout__type__ul li img.active").removeClass('active');
              $(this).addClass('active');
              
              valCotoutType = $(this).attr('data-cotout-type');
 
          });
          
//поведение для кнопки v-shaped
          
           $("img.icon__v-shaped").click(function () { // по клику на sweatshirts
               if (valSex == 'Woman') { 
                   if (valStyle == 'T-shirt') {
                         $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/woman/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/woman/tee-shirt/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }              
                   } else {
                       
                             $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/woman/woman_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/woman/woman_sweat/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }  
      
                   }
               } 
               
               
             if (valSex == 'Man') { 
                   if (valStyle == 'T-shirt') {
                         $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/man/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/man/tee-shirt/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }              
                   } else {
                       
                             $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/man/man_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/man/man_sweat/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);  
               
              }
                   }
           }
               
            if (valSex == 'Child') { 
                   if (valStyle == 'T-shirt') {
                         $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/child/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/child/tee-shirt/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }              
                   } else {
                       
                             $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/child/child_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/child/child_sweat/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);  
               
              }
                   }
           }     
  
           }
                                        );
          
//          поведение для кнопки save stage 1
          
          $('.constructor__next__a__stage__1').click( function () {
              $('.constructor__sex__style').css('display', 'none');
              $('.constructor__type__color').css('display', 'block');
              $('li.stage__active').removeClass('stage__active');
              $('li.constructor__stage__2').addClass('stage__active');
              $('.stage path.active').removeClass('active');
              $('li.constructor__stage__2 a svg path').css('fill', "#000");
              $('.constructor__title h2').text('Определите тип и цвет модели'); 
          });
          
          
          
          
          
          
//          поведение для кнопки round
          
            $("img.icon__round").click(function () { // по клику на sweatshirts
               if (valSex == 'Woman') { 
                   if (valStyle == 'T-shirt') {
                         $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/woman/tee-shirt/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/woman/tee-shirt/round/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }              
                   } else {
                       
                             $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/woman/woman_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/woman/woman_sweat/round/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }  
      
                   }
               } 
               
               
             if (valSex == 'Man') { 
                   if (valStyle == 'T-shirt') {
                         $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/man/tee-shirt/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/man/tee-shirt/round/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }              
                   } else {
                       
                             $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/man/man_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/man/man_sweat/round/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);  
               
              }
                   }
           }
               
            if (valSex == 'Child') { 
                   if (valStyle == 'T-shirt') {
                         $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/child/tee-shirt/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/child/tee-shirt/round/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }              
                   } else {
                       
                             $('.canvas__img img').each(function () { 
    $(this).attr('src', function () {
          var valSrc = 'img/child/child_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
    });  
});
                      $('#img1').addClass('active');
              imgshirt = 'img/child/child_sweat/round/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);  
               
              }
                   }
           }     
  
           }
                                        );
          
          

         //          поведение для кнопки white-color

          
          $("li[data-color='1']").click(function () { 
               if (valSex == 'Woman') { 
                   if (valStyle == 'T-shirt') {
                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/woman/tee-shirt/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/woman/tee-shirt/round/white/1.jpg';
              img.src = imgshirt; 
            
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/woman/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/woman/tee-shirt/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
} else {

                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/woman/woman_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/woman/woman_sweat/round/white/1.jpg';
              img.src = imgshirt; 
            
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/woman/woman_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/woman/woman_sweat/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
    
}
               }

               if (valSex == 'Child') { 
                   if (valStyle == 'T-shirt') {
                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/child/tee-shirt/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/child/tee-shirt/round/white/1.jpg';
              img.src = imgshirt; 
            
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/child/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/child/tee-shirt/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
} else {

                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/child/child_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/child/child_sweat/round/white/1.jpg';
              img.src = imgshirt; 
            
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/child/child_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/child/child_sweat/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
    
}
               }             
               if (valSex == 'Man') { 
                   if (valStyle == 'T-shirt') {
                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/man/tee-shirt/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/man/tee-shirt/round/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/man/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/man/tee-shirt/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
} else {
                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/man/man_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/man/man_sweat/round/white/1.jpg';
              img.src = imgshirt;        
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/man/man_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/man/man_sweat/v-shaped/white/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
}
               }
          }); 
                       
//          конец описания кнопки белого цвета
                       
//          описание поведения кнопки бирюзового цвета
          
          
           $("li[data-color='2']").click(function () { 
               if (valSex == 'Woman') { 
                   if (valStyle == 'T-shirt') {
                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/woman/tee-shirt/round/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/woman/tee-shirt/round/turquoise/1.jpg';
              img.src = imgshirt; 
            
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/woman/tee-shirt/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/woman/tee-shirt/v-shaped/turquoise/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
} else {

                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/woman/woman_sweat/round/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/woman/woman_sweat/round/turquoise/1.jpg';
              img.src = imgshirt; 
            
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/woman/woman_sweat/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/woman/woman_sweat/v-shaped/turquoise/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
    
}
               }

               if (valSex == 'Child') { 
                   if (valStyle == 'T-shirt') {
                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/child/tee-shirt/round/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/child/tee-shirt/round/turquoise/1.jpg';
              img.src = imgshirt; 
            
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/child/tee-shirt/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/child/tee-shirt/v-shaped/turquoise/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
} else {

                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/child/child_sweat/round/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/child/child_sweat/round/turquoise/1.jpg';
              img.src = imgshirt; 
            
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/child/child_sweat/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/child/child_sweat/v-shaped/turquoise/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
    
}
               }             
               if (valSex == 'Man') { 
                   if (valStyle == 'T-shirt') {
                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/man/tee-shirt/round/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
                       
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/man/tee-shirt/round/turquoise/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/man/tee-shirt/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/man/tee-shirt/v-shaped/turquoise/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
} else {
                       if (valCotoutType == 'Round') {
                            $('.canvas__img img').each(function () { 
                           $(this).attr('src', function () {
          var valSrc = 'img/man/man_sweat/round/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;   
    });     
                                }); 
                          $('#img1').addClass('active'); 
              imgshirt = 'img/man/man_sweat/round/turquoise/1.jpg';
              img.src = imgshirt;        
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }           
                       } else {
                            $('.canvas__img img').each(function () { 
                          $(this).attr('src', function () {
          var valSrc = 'img/man/man_sweat/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;    
    });  
                                });  
                              $('#img1').addClass('active'); 
              imgshirt = 'img/man/man_sweat/v-shaped/turquoise/1.jpg';
              img.src = imgshirt; 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }   
                       }
}
               }
          }); 
                  
 
          
          
          
          

      });
  })(jQuery);
