const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button_type_close');
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__button-edit');
const formElement = document.querySelector('.popup__container');
const saveButton = formElement.querySelector('.popup__button_type_save');
let inputName = formElement.querySelector('.popup__input_name');
let inputDescription = formElement.querySelector('.popup__input_description');
let profileTittle = profile.querySelector('.profile__tittle');
let profileSubtittle = profile.querySelector('.profile__subtittle');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
function edit() {
    popup.classList.remove('popup_closed');
    popup.classList.add('popup_opened');
    textAdd();
}
function close() {
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_closed');
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
    close();
}
editButton.addEventListener('click', edit);
closeButton.addEventListener('click', close);
formElement.addEventListener('submit', formSubmitHandler);

