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
const saveButton = formElement.querySelector('.popup__button_type_save');
let inputName = formElement.querySelector('.popup__input_name');
let inputDescription = formElement.querySelector('.popup__input_description');
let profileTittle = profile.querySelector('.profile__tittle');
let profileSubtittle = profile.querySelector('.profile__subtittle');
const elem = document.querySelector('#elementCard').content;
const element = document.querySelector('.element');
const popupCardPlace = document.querySelector('.popup__input_place');
const popupCardLink = document.querySelector('.popup__input_link');
const popupImg = document.querySelector('#image');
const popupImgFull = document.querySelector('.popup__image_fullscreen');
const popupImgText = document.querySelector('.popup__image_text');

function openPopup(popup) {
  popup.classList.toggle('popup_opened')
}

function textAdd() {
  let textTittle = profileTittle.textContent;
  let textSubtittle = profileSubtittle.textContent;
  inputName.value = `${textTittle}`;
  inputDescription.value = `${textSubtittle}`;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  let inputNameAdd = inputName.value;
  let inputDescriptionAdd = inputDescription.value;
  profileTittle.textContent = `${inputNameAdd}`;
  profileSubtittle.textContent = `${inputDescriptionAdd}`;
  openPopup(popupEdit);
}
const openImage = (event) => {
  popupImgFull.src = event.target.src;
  popupImgText.textContent = event.target.alt;
  openPopup(popupImg);
};

const like = (evt) => {
  evt.target.classList.toggle('card__button-like_active');
};

const deleteCard = function (cardCopy, cardLike, cardImage) {
  cardLike.removeEventListener('click', cardLike);
  cardImage.removeEventListener('click', cardImage);
  cardCopy.remove();
};

function newCard(name, image) {
  const cardCopy = elem.firstElementChild.cloneNode(true);
  const cardImage = cardCopy.querySelector('.card__image');
  const cardTitle = cardCopy.querySelector('.card__title');
  const cardLike = cardCopy.querySelector('.card__button-like');
  const cardDelete = cardCopy.querySelector('.card__delete');
  cardImage.src = image;
  cardImage.alt = name;
  cardTitle.textContent = name;
  cardLike.addEventListener('click', like);
  cardImage.addEventListener('click', openImage);
  cardDelete.addEventListener('click', () => deleteCard(cardCopy, cardLike, cardImage), {
    once: true
  });
  return cardCopy;
}

const AddCards = function (item) {
  element.append(newCard(item.name, item.link));
};

function NewAddForm(event) {
  event.preventDefault();
  openPopup(popupAdd);
  element.prepend(newCard(popupCardPlace.value, popupCardLink.value));
  popupCardPlace.value = '';
  popupCardLink.value = '';
};

initialCards.forEach(AddCards);
editButton.addEventListener('click', () => openPopup(popupEdit) & textAdd());
addButton.addEventListener('click', () => openPopup(popupAdd));
newElem.addEventListener('submit', NewAddForm)
closeEdit.addEventListener('click', () => openPopup(popupEdit));
closeAdd.addEventListener('click', () => openPopup(popupAdd));
closeImg.addEventListener('click', () => openPopup(popupImg));
formElement.addEventListener('submit', formSubmitHandler);