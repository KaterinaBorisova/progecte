const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');

buttonOne.addEventListener('click',leisure);
buttonTwo.addEventListener('click',plage);

function leisure(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2020/02/11/12/05/livigno-4839351__340.jpg");
    text.textContent="Что предпочитаешь?";
    buttonOne.textContent="Только горы";
    buttonTwo.textContent="Пешие прогулки";

    buttonOne.addEventListener("click",montagne);
    buttonTwo.addEventListener("click",pieds);
}

function montagne (){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2020/12/13/16/22/snow-5828736__340.jpg");
    text.textContent="Твой выбор?";
    buttonOne.textContent="Горные лыжи "
    buttonTwo.textContent="Альпинизм";

    buttonOne.addEventListener("click",europe);
    buttonTwo.addEventListener("click",alpinism);
}


function europe (){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2015/09/09/17/57/ski-932188__340.jpg");
    text.textContent="Выбери направление.";
    buttonOne.textContent=" Европа";
    buttonTwo.textContent=" Америка";

    buttonOne.addEventListener("click",swiss);
    buttonTwo.addEventListener("click",vermont);

}

function alpinism (){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/26/18/54/zipline-168019__340.jpg");
    text.textContent="Твой выбор?";
    buttonOne.textContent="Россия";
    buttonTwo.textContent="Азия";

    buttonOne.addEventListener("click",russia);
    buttonTwo.addEventListener("click",asia);
}


function swiss(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2021/02/21/08/27/skiing-6035709__340.jpg");
    text.textContent="Думаю Швейцария Вам подойдет!"
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function vermont(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2018/04/09/16/16/skiers-3304525__340.jpg");
    text.textContent="Рассмотри курорты Вермонта"
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function russia(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2019/12/30/11/47/grecja-4729488__340.jpg");
    text.textContent="Приглядись к Домбаю!"
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function asia(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2019/04/07/11/38/nepal-4109496__340.jpg");
    text.textContent="А слабо покорить Гималаи?"
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}


function pieds(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2021/11/08/11/19/buildings-6778915__340.jpg");
    text.textContent="Давайте погуляем."
    buttonOne.textContent='Историческая программа';
    buttonTwo.textContent='Гастрономическая программа';

    buttonOne.addEventListener("click",historique);
    buttonTwo.addEventListener("click",gastro);
}

function historique(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2021/10/02/18/49/square-6676128__340.jpg");
    text.textContent="Что интересует?";
    buttonOne.textContent="Восток";
    buttonTwo.textContent="Запад";

    buttonOne.addEventListener("click",maghrib);
    buttonTwo.addEventListener("click",est);

}
function maghrib(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2021/09/26/11/54/architecture-6657475__340.jpg");
    text.textContent="Рекомендую страны Магриба"
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function est(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2020/12/09/21/23/praha-5818649__340.jpg");
    text.textContent="Вы бывали в Праге?"
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function gastro(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2014/12/15/14/05/salad-569156__340.jpg");
    text.textContent="Ваш вкус?";
    buttonOne.textContent="Сыр и вино";
    buttonTwo.textContent="Паста и пицца";

    buttonOne.addEventListener("click",chees);
    buttonTwo.addEventListener("click",pasta);
}
function chees(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2017/10/31/17/00/still-life-2905834__340.jpg");
    text.textContent="Вам однозначно во Францию!"
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function pasta(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg");
    text.textContent="Италия Вас ждёт!"
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function plage(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2017/09/21/18/47/beach-2772913__340.jpg");
    text.textContent="Нужно выбрать."
    buttonOne.textContent="Пассивный отдых";
    buttonTwo.textContent="Активный отдых";

    buttonOne.addEventListener("click",pasific);
    buttonTwo.addEventListener("click",atlantic);
}

function pasific(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2020/07/08/08/04/sunset-5383043__340.jpg");
    text.textContent="Сделай выбор";
    buttonOne.textContent="Пляжи Тихого океана";
    buttonTwo.textContent="Пляжи Атлантики";

    buttonOne.addEventListener("click",blank);
    buttonTwo.addEventListener("click",noir);
}

function blank(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2021/08/01/13/10/zakynthos-6514351__340.jpg");
    text.textContent="Что же предпочитаете?";
    buttonOne.textContent="Беленький песочек";
    buttonTwo.textContent="Вулканический песок";

    buttonOne.addEventListener("click",maldive)
    buttonTwo.addEventListener("click",kamchatka)
}

function maldive(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2021/05/29/03/00/beach-6292382__340.jpg");
    text.textContent="Ну конечно же,Мальдивы";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function kamchatka(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2021/04/24/05/41/beach-6203278__340.jpg");
    text.textContent="Настоятельно рекомендую пляжи Камчатки";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function noir(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2020/09/14/17/19/beach-5571545__340.jpg");
    text.textContent="Надо сделать выбор";
    buttonOne.textContent="Острова";
    buttonTwo.textContent="Береговая линия";

    buttonOne.addEventListener("click",canars)
    buttonTwo.addEventListener("click",maroc)
}

function canars(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2020/11/28/02/17/island-5783440__340.jpg");
    text.textContent="Канарские острова-отличный вариант!";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}
function maroc(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2020/10/02/21/42/beach-5622187__340.jpg");
    text.textContent="Марокканские пляжи- восток и экзотика!";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function atlantic(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659__340.jpg");
    text.textContent="Определитесь с выбором";
    buttonOne.textContent="Побережье Индийского океана";
    buttonTwo.textContent="Тихоокеанское побережье";

    buttonOne.addEventListener("click",indien);
    buttonTwo.addEventListener("click",tihiy);
}

function indien(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2021/07/30/16/51/beach-6510275__340.jpg");
    text.textContent="Ваши предпочтения";
    buttonOne.textContent="Сёрфинг";
    buttonTwo.textContent="Дайвинг";

    buttonOne.addEventListener("click",serf);
    buttonTwo.addEventListener("click",aqualang);
}

function serf(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2017/04/01/00/39/surfing-2192675__340.jpg")
    text.textContent="Лучшие волны на побережье Австралии";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function aqualang(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2014/11/28/22/43/diver-549380__340.jpg")
    text.textContent="Красивейшие рифы Мальдив ждут Вас";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function tihiy(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2017/12/28/09/20/groynes-3044711__340.jpg");
    text.textContent="Ваши предпочтения";
    buttonOne.textContent="Ветер и волны";
    buttonTwo.textContent="Пляж и мяч";

    buttonOne.addEventListener("click",vent);
    buttonTwo.addEventListener("click",ball);
}

function vent(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2016/05/07/23/47/kite-1378445__340.jpg");
    text.textContent="Попробуй кайтсёрфинг на побережье Камчатки";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}

function ball(){
    image.setAttribute("src","https://cdn.pixabay.com/photo/2020/09/10/15/23/sunset-5560658__340.jpg");
    text.textContent="Пляжный волейбол на побережье Мексики";
    buttonOne.style="display:none";
    buttonTwo.style="display:none";
}