console.log('Исходя из критерии оценки, задание выполнено по всем пунктам. Оценка - 110 баллов.')
console.log('Выполненные пункты:')

console.log(
'1.При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n .При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur,\n  выбранная услуга остается неизменной + 20\n' 
)
console.log(
   ' .Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и\n  карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки\n  услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней\n  позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають\n  быть в блюре если это была единственная нажатая кнопка). +20'
)
console.log(
   ' .Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10'
)
console.log(
'2.Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50'
)
console.log(
   ' .При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка\n  order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25\n  Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все\n  тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25'

)
console.log(
   '3.В разделе contacts реализован select с выбором городов +25\n .В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15\n .При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10'
)
console.log(
   'Итого: 125 Баллов.'
)

//-------------------------------------------------------------------------
//----------------------'Burger' menu--------------------------------------
//-------------------------------------------------------------------------

const header_burger_logo = document.querySelector('.header__burger-logo');
const burger_menu = document.querySelector('.header__burger');

//--------------'burger menu' apear & hide script---------------------------

header_burger_logo.addEventListener('click', function(e){
   header_burger_logo.classList.toggle('_active');
   burger_menu.classList.toggle('_active');
   e.stopPropagation();
});

//-------Script for 'burger' hiding when click out of 'burger menu' aria-----

burger_menu.addEventListener('click', function(e) {
   if ( e.target.matches('a') || e.currentTarget === burger_menu ) {
      burger_menu.classList.remove('_active');
      header_burger_logo.classList.remove('_active');
   }  
});

document.body.addEventListener('click', function(e){
   if( e.currentTarget !== '.header__burger'){
      burger_menu.classList.remove('_active');
      header_burger_logo.classList.remove('_active');
   }
});

//----------------------------------------------------------------------
//-----------------------'Service' section------------------------------
//----------------------------------------------------------------------

const btnGarden = document.querySelector('.service__menu-btn--garden');
const btnLawn = document.querySelector('.service__menu-btn--lawn');
const btnPlanting = document.querySelector('.service__menu-btn--planting');

const gardenItems = document.querySelectorAll('.service__item--garden');
const plantingItems = document.querySelectorAll('.service__item--planting');
const lawnItem = document.querySelector('.service__item--lawn');

const allButtuns = document.querySelectorAll('.service__menu-btn');
const allCards = document.querySelectorAll('.item');

const buttonWrapper = document.querySelector('.menu-btn__wrapper');

function bluredGardens(){
   gardenItems.forEach(item => {
      item.classList.add('_unactive');    
   });
};

function unbluredGardens(){
   gardenItems.forEach(item => {
      item.classList.remove('_unactive');
   });
};

function bluredPlantind(){
   plantingItems.forEach(item => {
      item.classList.add('_unactive'); 
   });
};

function unbluredPlantind(){
   plantingItems.forEach(item => {
      item.classList.remove('_unactive')
   });
};

function bluredLawn(){
   lawnItem.classList.add('_unactive');
};

function unbluredLawn(){
   lawnItem.classList.remove('_unactive');
};

function blurAllCards() {
   allCards.forEach(card => {
      card.classList.add('_unactive')
   });
};

function unblurAllCards() {
   allCards.forEach(card => {
      card.classList.remove('_unactive')
   });
};

function unactiveAllButtons() {
   allButtuns.forEach(button => {
      button.classList.remove('_active')
   });
};

buttonWrapper.addEventListener('click',(e)=> {
   if ( e.target == btnGarden && !btnGarden.classList.contains('_active') && !btnLawn.classList.contains('_active') && !btnPlanting.classList.contains('_active')){
      blurAllCards();
      unbluredGardens();
      btnGarden.classList.add('_active')
      
   } else if ( e.target == btnLawn &&  !btnLawn.classList.contains('_active') && !btnGarden.classList.contains('_active') && !btnPlanting.classList.contains('_active')){
      blurAllCards();
      unbluredLawn();
      btnLawn.classList.add('_active')
      
   } else if ( e.target == btnPlanting &&  !btnPlanting.classList.contains('_active') && !btnLawn.classList.contains('_active') && !btnGarden.classList.contains('_active')){
      blurAllCards();
      unbluredPlantind();
      btnPlanting.classList.add('_active');
      
   } else if (e.target == btnGarden && btnGarden.classList.contains('_active') && !btnLawn.classList.contains('_active') && !btnPlanting.classList.contains('_active')){ 
      unblurAllCards();
      btnGarden.classList.remove('_active');
      
   } else if ( e.target == btnLawn && btnLawn.classList.contains('_active') && !btnGarden.classList.contains('_active') && !btnPlanting.classList.contains('_active')){
      unblurAllCards();
      btnLawn.classList.remove('_active')
      
   } else if ( e.target == btnPlanting && btnPlanting.classList.contains('_active') && !btnLawn.classList.contains('_active') && !btnGarden.classList.contains('_active')){
      unblurAllCards();
      btnPlanting.classList.remove('_active');
      
   }  if ( e.target == btnGarden && btnLawn.classList.contains('_active') && !btnGarden.classList.contains('_active') && !btnPlanting.classList.contains('_active')){
      unbluredGardens();
      unbluredLawn();
      
      btnGarden.classList.add('_active');
   }  else if ( e.target == btnGarden && btnPlanting.classList.contains('_active') && !btnLawn.classList.contains('_active') && !btnGarden.classList.contains('_active')){
      unbluredGardens();
      unbluredPlantind();
      
      btnGarden.classList.add('_active');
   }  else if ( e.target == btnLawn && btnPlanting.classList.contains('_active') && !btnLawn.classList.contains('_active') && !btnGarden.classList.contains('_active')){
      unbluredLawn();
      unbluredPlantind();
      btnLawn.classList.add('_active');
      
   }  else if ( e.target == btnLawn && btnGarden.classList.contains('_active') && !btnLawn.classList.contains('_active') && !btnPlanting.classList.contains('_active')){
      unbluredLawn();
      unbluredGardens();
      btnLawn.classList.add('_active');
      
   }  else if ( e.target == btnPlanting && btnLawn.classList.contains('_active') && !btnPlanting.classList.contains('_active') && !btnGarden.classList.contains('_active')){
      unbluredLawn();
      unbluredPlantind();
      btnPlanting.classList.add('_active');
      
   }  else if ( e.target == btnPlanting && btnGarden.classList.contains('_active') && !btnLawn.classList.contains('_active') && !btnPlanting.classList.contains('_active')){
      unbluredPlantind();
      unbluredGardens();
      btnPlanting.classList.add('_active');
      
   }  else if (  e.target == btnPlanting && btnGarden.classList.contains('_active') && btnLawn.classList.contains('_active') && !btnPlanting.classList.contains('_active')) {
      unblurAllCards();
      unactiveAllButtons();
   }  else if ( e.target == btnPlanting && !btnGarden.classList.contains('_active') && btnLawn.classList.contains('_active') && btnPlanting.classList.contains('_active')) {
      bluredPlantind();
      btnPlanting.classList.remove('_active');
   }  else if ( e.target == btnPlanting && btnGarden.classList.contains('_active') && !btnLawn.classList.contains('_active') && btnPlanting.classList.contains('_active')) {
      bluredPlantind();
      btnPlanting.classList.remove('_active');
   }  else if ( e.target == btnGarden && btnPlanting.classList.contains('_active') && btnLawn.classList.contains('_active') && !btnGarden.classList.contains('_active')) {
      unblurAllCards();
      unactiveAllButtons();
   }  else if ( e.target == btnGarden && btnLawn.classList.contains('_active') && btnGarden.classList.contains('_active') && !btnPlanting.classList.contains('_active')) {
      bluredGardens();
      btnGarden.classList.remove('_active');
   }  else if ( e.target == btnGarden && !btnLawn.classList.contains('_active') && btnGarden.classList.contains('_active') && btnPlanting.classList.contains('_active')) {
      bluredGardens();
      btnGarden.classList.remove('_active');
   }  else if ( e.target == btnLawn && btnPlanting.classList.contains('_active') && btnGarden.classList.contains('_active') && !btnLawn.classList.contains('_active')) {
      unblurAllCards();
      unactiveAllButtons();
   }  else if ( e.target == btnLawn && btnGarden.classList.contains('_active') && !btnPlanting.classList.contains('_active') && btnLawn.classList.contains('_active')) {
      bluredLawn();
      btnLawn.classList.remove('_active');
   }  else if ( e.target == btnLawn && !btnGarden.classList.contains('_active') && btnPlanting.classList.contains('_active') && btnLawn.classList.contains('_active')) {
      bluredLawn();
      btnLawn.classList.remove('_active');
   }
});

//--------------short solution with 'Set'------------------------------------------------

// let allServiceButtons = document.querySelectorAll('.service__menu-btn');
// let allSrviceCards = document.querySelectorAll('.service__item');
// let maxCountClick = 3;
// let activeServiceButtons = new Set();

// allServiceButtons.forEach(el => el.addEventListener('click', e => buttonHandler(e)));

// function buttonHandler(e) {
//    if (activeServiceButtons.has(e.currentTarget.dataset.type)) {
//       activeServiceButtons.delete(e.currentTarget.dataset.type);
//       e.currentTarget.classList.remove('_active');
//    } else {
//       activeServiceButtons.add(e.currentTarget.dataset.type);
//       e.currentTarget.classList.add('_active');
//    }
//    if (activeServiceButtons.size === maxCountClick ) {
//       activeServiceButtons.clear();
//       allServiceButtons.forEach(button => button.classList.remove('_active'));
//    }

//    allSrviceCards.forEach(el => {
//       if (activeServiceButtons.size === 0 || activeServiceButtons.has(el.dataset.type)) {
//          el.classList.remove('_unactive');
//       } else {
//          el.classList.add('_unactive');
//       }
//    });
// };

//------------------------------------------------------------------------
//-------------------'Prices' section-------------------------------------
//------------------------------------------------------------------------

let pricesItems = document.querySelector('.prices__items');

let basicsWindow = document.querySelector('.basics');
let standardWindow = document.querySelector('.standard');
let proCareWindow = document.querySelector('.pro-care');

let basicsBtn = document.querySelector('.basics__accordion');
let standardBtn = document.querySelector('.standart__accordion');
let proCareBtn = document.querySelector('.pro-care__accordion');

let basicsBtnIco = document.querySelector('.basics-accordion-btn__open');
let standardBtnIco = document.querySelector('.standart-accordion-btn__open');
let proCareBtnIco = document.querySelector('.pro-care-accordion-btn__open');

let basicsBlock = document.querySelector('.prices-item__basics');
let standartBlock = document.querySelector('.prices-item__standard');
let proCareBlock = document.querySelector('.prices-item__pro-care');

let basicsParentTarget = document.querySelector('.basics-accordion-btn__open');
let standardParentTarget = document.querySelector('.standart-accordion-btn__open');
let proCareParentTarget = document.querySelector('.pro-care-accordion-btn__open');

pricesItems.addEventListener('click', function(e) {
   if ( e.target == basicsBtn || e.target == basicsParentTarget ) {
         basicsWindow.classList.toggle('_active');
         basicsBlock.classList.toggle('_active');
         basicsBtn.classList.toggle('_active');
         basicsBtnIco.classList.toggle('_active');
   } else if ( e.target == standardBtn || e.target == standardParentTarget ) {
         standardWindow.classList.toggle('_active');
         standartBlock.classList.toggle('_active');
         standardBtnIco.classList.toggle('_active');
         standardBtn.classList.toggle('_active');
   }  else if ( e.target == proCareBtn || e.target == proCareParentTarget ) {
         proCareWindow.classList.toggle('_active');
         proCareBlock.classList.toggle('_active');
         proCareBtnIco.classList.toggle('_active');
         proCareBtn.classList.toggle('_active');
   }  if ( e.target == standardBtn || e.target == standardParentTarget ) {
         basicsWindow.classList.remove('_active');
         basicsBlock.classList.remove('_active');
         basicsBtn.classList.remove('_active');
         basicsBtnIco.classList.remove('_active');
         proCareWindow.classList.remove('_active');
         proCareBlock.classList.remove('_active');
         proCareBtnIco.classList.remove('_active');
         proCareBtn.classList.remove('_active');
   }  if ( e.target == basicsBtn || e.target == basicsParentTarget ) {
         standardWindow.classList.remove('_active');
         standartBlock.classList.remove('_active');
         standardBtnIco.classList.remove('_active');
         standardBtn.classList.remove('_active');
         proCareWindow.classList.remove('_active');
         proCareBlock.classList.remove('_active');
         proCareBtnIco.classList.remove('_active');
         proCareBtn.classList.remove('_active');
   }  if ( e.target == proCareBtn || e.target == proCareParentTarget ) {
         standardWindow.classList.remove('_active');
         standartBlock.classList.remove('_active');
         standardBtnIco.classList.remove('_active');
         standardBtn.classList.remove('_active');
         basicsWindow.classList.remove('_active');
         basicsBlock.classList.remove('_active');
         basicsBtn.classList.remove('_active');
         basicsBtnIco.classList.remove('_active');
   }
   e.stopPropagation();
});

//------script for closing all when click out current aria------

document.body.addEventListener('click', (e) => {
      if (e.target.parentNode !== pricesItems)  {
         standardWindow.classList.remove('_active');
         standartBlock.classList.remove('_active');
         standardBtnIco.classList.remove('_active');
         standardBtn.classList.remove('_active');
         basicsWindow.classList.remove('_active');
         basicsBlock.classList.remove('_active');
         basicsBtn.classList.remove('_active');
         basicsBtnIco.classList.remove('_active');
         proCareWindow.classList.remove('_active');
         proCareBlock.classList.remove('_active');
         proCareBtnIco.classList.remove('_active');
         proCareBtn.classList.remove('_active');
      }
   });
//------------------------------------------------------------------------
//-----------------------'Contact us' section-----------------------------
//------------------------------------------------------------------------ 

//-----------'Script for "sity select" window ----------------------------

let cityButton = document.querySelector('.city__accordion-btn');
let contactedCity = document.querySelector('.contacts__city');
let citySelect = document.querySelector('.contacts__city-block');
let cityWrapper = document.querySelector('.contacts__city-wrapper');
let cityParentTarget = document.querySelector('.city-accordion-btn__open')
let contactImg = document.querySelector('.contacts__img');

cityWrapper.addEventListener('click', function(e) {
   if ( e.target == cityButton || e.target == cityParentTarget ) {
      citySelect.classList.toggle('_active');
      contactedCity.classList.add('_active');
      cityCanandaigua.classList.remove('_active');
      cityNewYork.classList.remove('_active');
      citySherrill.classList.remove('_active');
      cityYonkers.classList.remove('_active');
   } 
});

//-----------'Script for hiding "contacts img" in mobile size'-------



let mediaQuery = window.matchMedia('(max-width: 992px)')
cityWrapper.addEventListener('click',function(e) {
   if ( mediaQuery.matches && citySelect.classList.contains('_active') && 
   contactedCity.classList.contains('_active') ||
   cityCanandaigua.classList.contains('_active') ||
   cityNewYork.classList.contains('_active') ||
   citySherrill.classList.contains('_active')||
   cityYonkers.classList.contains('_active')) {
   cityWrapper.classList.add('_active'); 
   contactImg.classList.add('_active');
   } else if ( e.target == cityButton || e.target == cityParentTarget && mediaQuery.matches && 
   (citySelect.classList.contains('_active') || !citySelect.classList.contains('_active')) &&
   (contactedCity.classList.contains('_active') || !contactedCity.classList.contains('_active')) && 
   !cityCanandaigua.classList.contains('_active') && 
   !cityNewYork.classList.contains('_active') && 
   !citySherrill.classList.contains('_active') && 
   !cityYonkers.classList.contains('_active')) {
   cityWrapper.classList.remove('_active'); 
   contactImg.classList.remove('_active');
   } 
});

//-------'Script for removing all'---------------

cityWrapper.addEventListener('click', function(e) {
   if ( !cityCanandaigua.classList.contains('_active') && 
   !cityNewYork.classList.contains('_active') && 
   !citySherrill.classList.contains('_active') && 
   !cityYonkers.classList.contains('_active') && 
   !citySelect.classList.contains('_active') && 
   contactedCity.classList.contains('_active')) {
      citySelect.classList.remove('_active');
      contactedCity.classList.remove('_active');
      cityTitle.classList.remove('_active');
      cityTitle.textContent = 'City';
   }
});

//-----Script for "cities contacts window" to apear----------------

let selectCity = document.querySelectorAll('.city-block__item');
let cityCanandaigua = document.querySelector('.city-window--canandaigua');
let cityNewYork = document.querySelector('.city-window--new-york');
let cityYonkers = document.querySelector('.city-window--yonkers');
let citySherrill = document.querySelector('.city-window--sherrill');
let canandaigua = document.querySelector('.canandaigua');
let newYork = document.querySelector('.new-york');
let yonkers = document.querySelector('.yonkers');
let sherrill = document.querySelector('.sherrill');
let contacts = document.querySelector('.contacts');
let cityTitle = document.querySelector('.contacts__city-title');

   selectCity.forEach( element => {
      citySelect.addEventListener('click',function(e) {
      if ( element == canandaigua && e.target == canandaigua ) {
         cityCanandaigua.classList.toggle('_active');
         cityNewYork.classList.remove('_active');
         citySherrill.classList.remove('_active');
         cityYonkers.classList.remove('_active');
         citySelect.classList.remove('_active');
         cityTitle.textContent = 'Canandaigua, NY';
         cityTitle.classList.add('_active');
      } else if ( element == newYork && e.target == newYork ) {
         cityNewYork.classList.toggle('_active');
         cityCanandaigua.classList.remove('_active');
         cityYonkers.classList.remove('_active');
         citySherrill.classList.remove('_active');
         citySelect.classList.remove('_active');
         cityTitle.textContent = 'New York City';
         cityTitle.classList.add('_active');
      } else if ( element == yonkers && e.target == yonkers ) {
         cityYonkers.classList.toggle('_active');
         cityNewYork.classList.remove('_active');
         citySherrill.classList.remove('_active');
         cityCanandaigua.classList.remove('_active');
         citySelect.classList.remove('_active');
         cityTitle.textContent = 'Yonkers, NY';
         cityTitle.classList.add('_active');
      }  else if ( element == sherrill && e.target == sherrill ) {
         citySherrill.classList.toggle('_active');
         cityNewYork.classList.remove('_active');
         cityYonkers.classList.remove('_active');
         cityCanandaigua.classList.remove('_active');
         citySelect.classList.remove('_active');
         cityTitle.textContent = 'Sherrill, NY';
         cityTitle.classList.add('_active');
      } 
   })
});

//------script for closing all when click out current aria------

// cityWrapper.addEventListener('click',function(e){
//       e.stopPropagation();
// });
// citySelect.addEventListener('click',function(e){
//    e.stopPropagation();
// });

// cityWrapper.addEventListener('click',function(e) {
//    if ( e.currentTarget !== contactedCity || e.currentTarget == cityWrapper ) {
//       citySherrill.classList.remove('_active');
//       cityNewYork.classList.remove('_active');
//       cityYonkers.classList.remove('_active');
//       cityCanandaigua.classList.remove('_active');
//       citySelect.classList.remove('_active');
//       contactedCity.classList.remove('_active');
//    }
// });

// selectCity.forEach( element => {
//    citySelect.addEventListener('click',function(e) {
//       if ( element ==  newYork && e.target == newYork ) {
//          cityNewYork.classList.toggle('_active');
//          cityCanandaigua.classList.remove('_active');
//          cityYonkers.classList.remove('_active');
//          citySherrill.classList.remove('_active');
//          citySelect.classList.remove('_active');
//       } 
//    })
// });

// const contacts_wrapper = document.querySelector('.contacts__city-wrapper');
// const contact_city = document.querySelector('.contacts__city');
// const contact_city_block = document.querySelector('.contacts__city-block');

// contact_city.addEventListener('click', (e) => {
//    if (contact_city_block.classList.contains('_active')) {
//       contact_city_block.classList.remove('_active');
//    } else {
//       contact_city_block.classList.add('_active');
//    }

//    e.stopPropagation();
// })

// document.body.addEventListener('click', (e) => {
//    if (e.target.parentNode !== contact_city_block)  {
//       contact_city_block.classList.remove('_active');
//    }
// })
