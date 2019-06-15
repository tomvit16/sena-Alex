(function ($) {
    $(document).ready(function () {

        
        $('.constructor__header__a').click(function () {
            $('.constructor__header__a.active').removeClass('active');
            $(this).addClass('active');
        });
        
        
        
        
        //  // Создаем объект изображения
        var img = new Image();
        //  //создаём переменную для фото майки
        var imgshirt = "./img/1.jpg";

        var canvas = new fabric.Canvas('c');

        fabric.Image.fromURL("img/1.jpg", function (img) {

            img.scale(0.85);
            img.set('selectable', false);
            canvas.add(img);

        });

        //        унопка удаления активного изображения из canvas
        $('#remove__image').on('click', function () {
            canvas.remove(canvas.getActiveObject());
        });

         $('#remove__text').on('click', function () {
            canvas.remove(canvas.getActiveObject());
        });
        


        //убираем у ссылок поведение по умолчанию

        $('a').on('click', function (e) {
            e.preventDefault();
        });


        //      Выбор этапов

        $('.constructor__stages__ul li').click(function () {
            $('.constructor__stages__ul li').removeClass('stage__active');
            $(this).addClass('stage__active');
        });

        //     перекидываем класс active  в constructor__sex

        var valSex = 'Man'; //в этой переменной храним текущеее значение Sex

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

            fabric.Image.fromURL(imgshirt, function (img) {

                img.scale(0.85);
                img.set('selectable', false);
                canvas.add(img);

            });
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
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });


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
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });
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
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });
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
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });
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
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });
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
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });
            }
        });



        //                 перекидываем класс active  в canvas__img         
        $('.canvas__img img').click(function () {
            $(".canvas__img img.active").removeClass('active');
            $(this).addClass('active');
        });





        //поведение кнопки sweatshirt при включённом man


        $(".constructor__style__sweatshirts").click(function () { // по клику на sweatshirts

            if (valSex == 'Man') { //проверяем, что находится в valSex 
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
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });

            }
            if (valSex == 'Woman') {

                $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.

                    $(this).attr('src', function () {

                        var valSrc = 'img/woman/woman_sweat/' + (($(this).index()) + 1) + '.jpg';
                        return valSrc;

                    });
                });
                $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.

                //загружаем в canvas новые майки
                imgshirt = 'img/woman/woman_sweat/1.jpg';
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });

            }
            if (valSex == 'Child') {

                $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.

                    $(this).attr('src', function () {

                        var valSrc = 'img/child/child_sweat/' + (($(this).index()) + 1) + '.jpg';
                        return valSrc;

                    });
                });
                $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.

                //загружаем в canvas новые майки
                imgshirt = 'img/child/child_sweat/1.jpg';
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });

            }

        });


        //          поведение для кнопки t-shirt


        $(".constructor__style__tshirt").click(function () { // по клику на sweatshirts

            if (valSex == 'Man') { //проверяем, что находится в valSex 
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
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });

            }
            if (valSex == 'Woman') {

                $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.

                    $(this).attr('src', function () {

                        var valSrc = 'img/woman/' + (($(this).index()) + 1) + '.jpg';
                        return valSrc;

                    });
                });
                $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.

                //загружаем в canvas новые майки
                imgshirt = 'img/woman/1.jpg';
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });

            }
            if (valSex == 'Child') {

                $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.

                    $(this).attr('src', function () {

                        var valSrc = 'img/child/' + (($(this).index()) + 1) + '.jpg';
                        return valSrc;

                    });
                });
                $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.

                //загружаем в canvas новые майки
                imgshirt = 'img/child/1.jpg';
                fabric.Image.fromURL(imgshirt, function (img) {

                    img.scale(0.85);
                    img.set('selectable', false);
                    canvas.add(img);

                });

            }

        });


        //          перекидываем класс active  в cotout type


        //     перекидываем класс active  в constructor__style    

        var valCotoutType = 'Round'; // переменная содержит текующее значение Cotout type

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
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
                } else {

                    $('.canvas__img img').each(function () {
                        $(this).attr('src', function () {
                            var valSrc = 'img/woman/woman_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                            return valSrc;
                        });
                    });
                    $('#img1').addClass('active');
                    imgshirt = 'img/woman/woman_sweat/v-shaped/white/1.jpg';
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
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
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
                } else {

                    $('.canvas__img img').each(function () {
                        $(this).attr('src', function () {
                            var valSrc = 'img/man/man_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                            return valSrc;
                        });
                    });
                    $('#img1').addClass('active');
                    imgshirt = 'img/man/man_sweat/v-shaped/white/1.jpg';
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
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
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
                } else {

                    $('.canvas__img img').each(function () {
                        $(this).attr('src', function () {
                            var valSrc = 'img/child/child_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                            return valSrc;
                        });
                    });
                    $('#img1').addClass('active');
                    imgshirt = 'img/child/child_sweat/v-shaped/white/1.jpg';
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
                }
            }

        });

        //          поведение для кнопки save stage 1

        $('.constructor__next__a__stage__1').click(function () {
            $('.constructor__sex__style').css('display', 'none');
            $('.constructor__type__color').css('display', 'block');
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__2').addClass('stage__active');
            $('.constructor__title h2').text('Определите тип и цвет модели');
        });
        //          поведение для кнопки save stage 2
        $('.constructor__next__a__stage__2').click(function () {
            $('.constructor__sex__style').css('display', 'none');
            $('.constructor__type__color').css('display', 'none');
            $('.constructor__image__application').css('display', 'block');
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__3').addClass('stage__active');
            $('.constructor__title h2').text('Добавьте изображение');
        });

        //          поведение для кнопки save stage 3
        $('.constructor__next__a__stage__3').click(function () {
            $('.constructor__sex__style').css('display', 'none');
            $('.constructor__type__color').css('display', 'none');
            $('.constructor__image__application').css('display', 'none');
            $('.constructor__text').css('display', 'block');
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__4').addClass('stage__active');
            $('.constructor__title h2').text('Добавьте текст и нанесение');
        });
        
        $('.constructor__next__a__stage__4').click(function () {
            $('.constructor__sex__style').css('display', 'none');
            $('.constructor__type__color').css('display', 'none');
            $('.constructor__image__application').css('display', 'none');
            $('.constructor__text').css('display', 'none');
            $('.constructor__size__amount').css('display', 'block');
            
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__5').addClass('stage__active');
            $('.constructor__title h2').text('Выберите размер и колличество');
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
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
                } else {

                    $('.canvas__img img').each(function () {
                        $(this).attr('src', function () {
                            var valSrc = 'img/woman/woman_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                            return valSrc;
                        });
                    });
                    $('#img1').addClass('active');
                    imgshirt = 'img/woman/woman_sweat/round/white/1.jpg';
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });

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
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
                } else {

                    $('.canvas__img img').each(function () {
                        $(this).attr('src', function () {
                            var valSrc = 'img/man/man_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                            return valSrc;
                        });
                    });
                    $('#img1').addClass('active');
                    imgshirt = 'img/man/man_sweat/round/white/1.jpg';
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
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
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
                } else {

                    $('.canvas__img img').each(function () {
                        $(this).attr('src', function () {
                            var valSrc = 'img/child/child_sweat/round/white/' + (($(this).index()) + 1) + '.jpg';
                            return valSrc;
                        });
                    });
                    $('#img1').addClass('active');
                    imgshirt = 'img/child/child_sweat/round/white/1.jpg';
                    fabric.Image.fromURL(imgshirt, function (img) {

                        img.scale(0.85);
                        img.set('selectable', false);
                        canvas.add(img);

                    });
                }
            }

        });


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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/woman/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/woman/tee-shirt/v-shaped/white/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/woman/woman_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/woman/woman_sweat/v-shaped/white/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/child/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/child/tee-shirt/v-shaped/white/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/child/child_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/child/child_sweat/v-shaped/white/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });

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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/man/tee-shirt/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/man/tee-shirt/v-shaped/white/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/man/man_sweat/v-shaped/white/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/man/man_sweat/v-shaped/white/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/woman/tee-shirt/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/woman/tee-shirt/v-shaped/turquoise/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/woman/woman_sweat/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/woman/woman_sweat/v-shaped/turquoise/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/child/tee-shirt/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/child/tee-shirt/v-shaped/turquoise/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/child/child_sweat/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/child/child_sweat/v-shaped/turquoise/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/man/tee-shirt/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/man/tee-shirt/v-shaped/turquoise/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
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
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    } else {
                        $('.canvas__img img').each(function () {
                            $(this).attr('src', function () {
                                var valSrc = 'img/man/man_sweat/v-shaped/turquoise/' + (($(this).index()) + 1) + '.jpg';
                                return valSrc;
                            });
                        });
                        $('#img1').addClass('active');
                        imgshirt = 'img/man/man_sweat/v-shaped/turquoise/1.jpg';
                        fabric.Image.fromURL(imgshirt, function (img) {

                            img.scale(0.85);
                            img.set('selectable', false);
                            canvas.add(img);

                        });
                    }
                }
            }
        });



        //          подведение кнопок stage

        $('.constructor__stage__1').click(function () {
            $('.constructor__sex__style').css('display', 'block');
            $('.constructor__type__color').css('display', 'none');
            $('.constructor__image__application').css('display', 'none');
            $('.constructor__text').css('display', 'none');
            $('.constructor__size__amount').css('display', 'none');
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__1').addClass('stage__active'); 
            $('.constructor__title h2').text('Выберите пол и стиль');
        });


        //          stage 2

        $('.constructor__stage__2').click(function () {
            $('.constructor__sex__style').css('display', 'none');
            $('.constructor__type__color').css('display', 'block');
            $('.constructor__image__application').css('display', 'none');
            $('.constructor__text').css('display', 'none');
            $('.constructor__size__amount').css('display', 'none');
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__2').addClass('stage__active');
            $('.constructor__title h2').text('Определите тип и цвет модели');
        });

        //            stage 3 

        $('.constructor__stage__3').click(function () {
            $('.constructor__sex__style').css('display', 'none');
            $('.constructor__type__color').css('display', 'none');
            $('.constructor__image__application').css('display', 'block');
            $('.constructor__text').css('display', 'none');
            $('.constructor__size__amount').css('display', 'none');
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__3').addClass('stage__active');
            $('.constructor__title h2').text('Добавьте изображение');
        });
//stage 4

        $('.constructor__stage__4').click(function () {
            $('.constructor__sex__style').css('display', 'none');
            $('.constructor__type__color').css('display', 'none');
            $('.constructor__image__application').css('display', 'none');
            $('.constructor__text').css('display', 'block');
$('.constructor__size__amount').css('display', 'none');
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__4').addClass('stage__active');
            $('.constructor__title h2').text('Добавьте текст и нанесение');
        });
        
//        stage 5
        
         $('.constructor__stage__5').click(function () {
            $('.constructor__sex__style').css('display', 'none');
            $('.constructor__type__color').css('display', 'none');
            $('.constructor__image__application').css('display', 'none');
            $('.constructor__text').css('display', 'none');
            $('.constructor__size__amount').css('display', 'block');
            $('li.stage__active').removeClass('stage__active');
            $('li.constructor__stage__5').addClass('stage__active');
            $('.constructor__title h2').text('Выберите размер и количество');
        });


        //          добавлялка фото

        var imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('change', handleImage, false);

        function handleImage(e) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var img = new Image();
                img.onload = function () {
                    var imgInstance = new fabric.Image(img, {


                        left: 100,
                        scaleX: 0.5,
                        scaleY: 0.5
                    });
                    canvas.add(imgInstance);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        }


        //            image перекидываем класс active


        $('.constructor__image__ul li a img').click(function () {
            $('.constructor__image__ul li a img.active').removeClass('active');
            $(this).addClass('active');
        });



        //            Application Method перекидываем класс актив

        $('.constructor__application__ul li a').click(function () {
            $('.constructor__application__ul li a.active').removeClass('active');
            $(this).addClass('active');
        });



        var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];

        var textTextbox = ''; //тут будет хранится текст для отображения на холсте

        var input__txt__constc = document.getElementById("input__text__constructor"); //тут хранится наш инпут           
        input__txt__constc.oninput = function () { //отслеживаем событие на любое изменение в символах      
            $('#input__text__constructor').css('border', "none");
            $('.text__warning').html('');
            textTextbox = input__txt__constc.value; //и записываем новое значение из инпута.
            var object = canvas.getActiveObject(); //сюда записываем активный объект
            if (object != undefined) { //проверяем есть ли активный объект
                object.set({ //в этот объект записываем новое значение
                    text: textTextbox //для свойства text ы записываем то, что сейчас находится в input
                });

                canvas.renderAll(); //рендерим всё это дело.
            }
        };

        $('#add_text').click(function () {
            $('#input__text__constructor').css('border', "none");
            $('.text__warning').html('');
            var textbox = new fabric.Textbox(textTextbox, {
                left: 50,
                top: 50,
                width: 150,
                fontSize: 20
            });

            canvas.add(textbox).setActiveObject(textbox);
        });


        fonts.unshift('Times New Roman');

        var select = document.getElementById("font-family");
        fonts.forEach(function (font) {
            var option = document.createElement('option');
            option.innerHTML = font;
            option.value = font;
            select.appendChild(option);
        });

        document.getElementById("font-family").onchange = function () {

            var object = canvas.getActiveObject();
            if (object !== undefined) {

                if (this.value !== 'Times New Roman') {
                    loadAndUse(this.value);
                } else {
                    canvas.getActiveObject().set("fontFamily", this.value);
                    canvas.requestRenderAll();
                }
            } else {
                $('#input__text__constructor').css('border', "2px solid #f00");
                $('.text__warning').html('<p>Add text on the shirt</p>');
            }
        };



        function loadAndUse(font) {
            var myfont = new FontFaceObserver(font)
            myfont.load()
                .then(function () {

                    canvas.getActiveObject().set("fontFamily", font);
                    canvas.requestRenderAll();
                }).catch(function (e) {
                    console.log(e)
                    alert('font loading failed ' + font);
                });
        };



        //        делаем текст жирным 

        var fwb = false;

        $('#font-weight-bold').click(function () {

            var object = canvas.getActiveObject();
            if (object !== undefined) {

                if (fwb == false) {
                    fwb = true;
                    canvas.getActiveObject().set("fontWeight", 'bold');
                    canvas.requestRenderAll();
                } else {
                    fwb = false;
                    canvas.getActiveObject().set("fontWeight", 'normal');
                    canvas.requestRenderAll();
                }
            } else {
                $('#input__text__constructor').css('border', "2px solid #f00");
                $('.text__warning').html('<p>Add text on the shirt</p>');
            }
        });

        //изменяем размер шрифта

        var font__sizes = [12, 20, 24, 32, 48];

        var select__font__sizes = document.getElementById("font-size");

        font__sizes.forEach(function (sizes) {
            var option = document.createElement('option');
            option.innerHTML = sizes;
            option.value = sizes;
            select__font__sizes.appendChild(option);
        });

        $('#font-size').change(function () {
            var object = canvas.getActiveObject();
            if (object !== undefined) {
                if (this.value !== 20) {
                    canvas.getActiveObject().set("fontSize", this.value);
                    canvas.requestRenderAll();
                }
            } else {
                $('#input__text__constructor').css('border', "2px solid #f00");
                $('.text__warning').html('<p>Add text on the shirt</p>');
            }
        });

        //изменение цвета текста
        $('.text__color').click(function () {
            var object = canvas.getActiveObject();
            if (object !== undefined) {
                var textName = $(this).attr('name');
                canvas.getActiveObject().set("fill", textName);
                canvas.requestRenderAll();
            } else {
                $('#input__text__constructor').css('border', "2px solid #f00");
                $('.text__warning').html('<p>Add text on the shirt</p>');
            }
        });


        //        управление кнопками выбора размера

      var valSize = [];  
$('.constructor__size__ul li span').click(function () {

            var valClass = $(this).attr('class');
            var valProp = $(this).text();


            if (valClass == 'active') {
                $(this).removeClass('active');
                if (valProp == 'XL') {
                    $('.amount__xl').attr('disabled', "");
                }
                if (valProp == 'S') {
                    $('.amount__s').attr('disabled', "");
                }
                if (valProp == 'M') {
                    $('.amount__m').attr('disabled', "");
                }
                if (valProp == 'L') {
                    $('.amount__l').attr('disabled', "");
                }
                if (valProp == 'XXL') {
                    $('.amount__xxl').attr('disabled', "");
                }
            } else {
                $(this).addClass('active');

                if (valProp == 'XL') {
                    $('.amount__xl').removeAttr('disabled');
                }
                if (valProp == 'S') {
                    $('.amount__s').removeAttr('disabled');
                }
                if (valProp == 'M') {
                    $('.amount__m').removeAttr('disabled');
                }
                if (valProp == 'L') {
                    $('.amount__l').removeAttr('disabled');
                }
                if (valProp == 'XXL') {
                    $('.amount__xxl').removeAttr('disabled');
                }

            };

        });


//      всплывающие окна
         $('#save_and_calculation').magnificPopup({
            type: 'inline'
        });

        
          $('#popup1').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: '.save_and_calculation',
            fbTheme: false
        });

        
//        записываем готове изображеие в попап      
  
        var valAmount = [];
        
$('.save_and_calculation').click(function () { //по клику на save
    var object = canvas.toObject();  //достаём содержимое canvas и конверитруем в объект 
     var canvas2 = new fabric.StaticCanvas('popup__canvas'); //создаём новый canvas
    canvas2.loadFromJSON(object); // переписываем содержимое canvas в canvas 2
 
    //в это же время забераем значения для попапа и выводим их в попап
    $('.result__sex').text(valSex);   //записываем выбранный пол
    $('.result__style').text(valStyle); //записываем выбранный стиль
    //перебираем выбранные размеры и записываем значение тех,, у которых класс active в массив valSize
    $('.constructor__size__ul li span').each(function () {
       if(this.className == 'active')  {valSize.push(this.textContent)};
    });
    $('.constructor__amount__ul li select').each(function() {
        if($(this).val() > 0) { valAmount.push($(this).val()) }
//        var q = $(this).val();
        
       
        
    });
    
     console.log(valAmount);
    
    
    
    
    
   $('.result__size').text(valSize);
    
    
    
    
    console.log(valSize);
    
});


//    скачиваем готовое изображение
        
        $('#download__pdf').click(function () {
            $('#c').get(0).toBlob(function(blob) {
                saveAs(blob, 'myIMG.png');
            })
        });

        
        
        


    });
})(jQuery);
