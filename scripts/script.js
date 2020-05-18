const popupEdit = document.querySelector('#popup_edit');
const popupAdd = document.querySelector('#popup-add')
const closeEdit = document.querySelector('#editClose');
const closeAdd = document.querySelector('#addClose');
const closeImg = document.querySelector('#imgClose');
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const formElement = document.querySelector('.popup__container');
const newElem = document.querySelector('#newElem');
const inputName = formElement.querySelector('.popup__input_name');
const inputDescription = formElement.querySelector('.popup__input_description');
const profileTittle = profile.querySelector('.profile__tittle');
const profileSubtittle = profile.querySelector('.profile__subtittle');
const cardListContainer = document.querySelector('#elementCard').content;
const element = document.querySelector('.element');
const popupCardPlace = document.querySelector('.popup__input_place');
const popupCardLink = document.querySelector('.popup__input_link');
const popupImg = document.querySelector('#image');
const popupImgFull = document.querySelector('.popup__image_fullscreen');
const popupImgText = document.querySelector('.popup__image_text');

function openClosePopup(popup) {
  popup.classList.toggle('popup_opened')
}

function textAdd() {
  const textTittle = profileTittle.textContent;
  const textSubtittle = profileSubtittle.textContent;
  inputName.value = `${textTittle}`;
  inputDescription.value = `${textSubtittle}`;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  const inputNameAdd = inputName.value;
  const inputDescriptionAdd = inputDescription.value;
  profileTittle.textContent = `${inputNameAdd}`;
  profileSubtittle.textContent = `${inputDescriptionAdd}`;
  openClosePopup(popupEdit);
}
const openImage = (event) => {
  popupImgFull.src = event.target.src;
  popupImgText.textContent = event.target.alt;
  openClosePopup(popupImg);
};

const like = (evt) => {
  evt.target.classList.toggle('card__button-like_active');
};

const deleteCard = function (cardCopy) {
  // cardLike.removeEventListener('click', cardLike);
  // cardImage.removeEventListener('click', cardImage);
  cardCopy.remove();
};

function getNewCard(name, image) {
  const cardCopy = cardListContainer.firstElementChild.cloneNode(true);
  const cardImage = cardCopy.querySelector('.card__image');
  const cardTitle = cardCopy.querySelector('.card__title');
  const cardLike = cardCopy.querySelector('.card__button-like');
  const cardDelete = cardCopy.querySelector('.card__delete');
  cardImage.src = image;
  cardImage.alt = name;
  cardTitle.textContent = name;
  cardLike.addEventListener('click', like);
  cardImage.addEventListener('click', openImage);
  cardDelete.addEventListener('click', () => deleteCard(cardCopy), {
    once: true
  });
  return cardCopy;
}

const addCards = function (item) {
  element.append(getNewCard(item.name, item.link));
};
// Ув. ревьюер, я не могу тут поставить prepend так как согласно ТЗ на эту работу, карточки должны
// начинаться с первой в масииве, а так последняя карточка массива будет первой, что несоответствует заданию

function newAddForm(event) {
  event.preventDefault();
  openClosePopup(popupAdd);
  element.prepend(getNewCard(popupCardPlace.value, popupCardLink.value));
  popupCardPlace.value = '';
  popupCardLink.value = '';
};
function editPopup(){
  openClosePopup(popupEdit);
  textAdd();
}

initialCards.forEach(addCards);
editButton.addEventListener('click', editPopup);
addButton.addEventListener('click', () => openClosePopup(popupAdd));
newElem.addEventListener('submit', newAddForm)
closeEdit.addEventListener('click', () => openClosePopup(popupEdit));
closeAdd.addEventListener('click', () => openClosePopup(popupAdd));
closeImg.addEventListener('click', () => openClosePopup(popupImg));
formElement.addEventListener('submit', formSubmitHandler);