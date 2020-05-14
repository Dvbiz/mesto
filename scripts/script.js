const popupEdit = document.querySelector('#popup_edit');
const popupAdd = document.querySelector('#popup-add')
const closeEdit = document.querySelector('#editClose');
const closeAdd = document.querySelector('#addClose')
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
const elem = document.querySelector('.element');
const initialCards = [{
    name: 'Колизей в Риме',
    link: 'https://images.unsplash.com/photo-1571207563769-343a4092c586?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Мачу-Пикчу',
    link: 'https://images.unsplash.com/photo-1567597243073-2d274aabecec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Куала-Лумпур, Малайзия',
    link: 'https://images.unsplash.com/photo-1589260097587-942004ad2b3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Оперный театр в Чжухае',
    link: 'https://images.unsplash.com/photo-1568001731724-c868c383b0c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
  },
  {
    name: 'Чжанцзяцзе, Китай',
    link: 'https://images.unsplash.com/photo-1546881963-ac8d67aee789?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Сидней',
    link: 'https://images.unsplash.com/photo-1548565494-3621affe632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }
];
const card = document.querySelector('#elementCard').content;
initialCards.forEach(function (el) {
  const cardElement = card.cloneNode(true);
  cardElement.querySelector('.card__image').src = el.link;
  cardElement.querySelector('.card__title').textContent = el.name;
  elem.append(cardElement);
});

function openPopup(popup){
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

function newCardHandler(evt){ 
  evt.preventDefault();
  const newCardElement = card.cloneNode(true);
  let inputPlaceAdd = document.querySelector('.popup__input_place');
  let inputLinkAdd = document.querySelector('.popup__input_link');
  newCardElement.querySelector('.card__image').src = inputLinkAdd.value;
  newCardElement.querySelector('.card__title').textContent = inputPlaceAdd.value;
  elem.prepend(newCardElement);
  openPopup(popupAdd);
}

editButton.addEventListener('click',() => openPopup(popupEdit) & textAdd());
addButton.addEventListener('click', () => openPopup(popupAdd));
closeEdit.addEventListener('click', () => openPopup(popupEdit));
closeAdd.addEventListener('click', () => openPopup(popupAdd));
formElement.addEventListener('submit', formSubmitHandler);
newElem.addEventListener('submit', newCardHandler);

