import '../css/common.css';
import '../css/03-feedback.css';

import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput,500));

populateTextarea();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  // console.log(formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
 
};

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedSavedMessage = JSON.parse(savedMessage);
  if (parsedSavedMessage) {
      formData = parsedSavedMessage;
      refs.input.value = parsedSavedMessage.email || '';
      refs.textarea.value = parsedSavedMessage.message || '';
  }
};


