const FIND_BTN = document.querySelector('.selector-find');
const NEXT_BTN = document.querySelector('.selector-next');
const PREV_BTN = document.querySelector('.selector-prev');
const PRNT_BTN = document.querySelector('.nav-top');
const FRST_CHLD_BTN = document.querySelector('.nav-bottom');
const PRV_SBL_BTN = document.querySelector('.nav-left');
const NEXT_SBL_BTN = document.querySelector('.nav-right');

const INPUT = document.querySelector('.selector');
let current = 0;
let resultNodes = [];
let currentElement;

FIND_BTN.addEventListener('click', find);
NEXT_BTN.addEventListener('click', next);
PREV_BTN.addEventListener('click', prev);
PRNT_BTN.addEventListener('click', getParrent);
FRST_CHLD_BTN.addEventListener('click', getFirstChild);
PRV_SBL_BTN.addEventListener('click', getPrevSibling);
NEXT_SBL_BTN.addEventListener('click', getNextSibling);

function find() {
  if (currentElement) {
    unsetStyles(currentElement);
  }
  current = 0;
  resultNodes = document.querySelectorAll(`${INPUT.value}`);
  currentElement = resultNodes[current];
  setStyles(currentElement);
  resultNodes.length > 1 ? (NEXT_BTN.disabled = false) : 0;
  treeNavButtons();
}

function next() {
  unsetStyles(currentElement);
  currentElement = resultNodes[current];
  current++;
  setStyles(currentElement);
  changeButtonsActivity();
  treeNavButtons();
}

function prev() {
  unsetStyles(currentElement);
  currentElement = resultNodes[current];
  current--;
  setStyles(currentElement);
  changeButtonsActivity();
  treeNavButtons();
}

function setStyles(el) {
  if (!el.style) return;
  el.style.outline = 'solid red 5px';
  el.style.backgroundColor = 'lightblue';
}

function unsetStyles(el) {
  if (!el.style) return;
  el.style.outline = '';
  el.style.backgroundColor = '';
}

function changeButtonsActivity(cond = true) {
  NEXT_BTN.disabled = !resultNodes[current + 1];
  PREV_BTN.disabled = !resultNodes[current - 1];
  if (!cond) {
    NEXT_BTN.disabled = true;
    PREV_BTN.disabled = true;
  }
}

function getParrent() {
  unsetStyles(currentElement);
  currentElement = currentElement.parentElement;
  changeButtonsActivity(false);
  treeNavButtons();
  setStyles(currentElement);
}

function getFirstChild() {
  unsetStyles(currentElement);
  currentElement = currentElement.firstElementChild;
  changeButtonsActivity(false);
  treeNavButtons();
  setStyles(currentElement);
}

function getPrevSibling() {
  unsetStyles(currentElement);
  currentElement = currentElement.previousElementSibling;
  changeButtonsActivity(false);
  treeNavButtons();
  setStyles(currentElement);
}

function getNextSibling() {
  unsetStyles(currentElement);
  currentElement = currentElement.nextElementSibling;
  changeButtonsActivity(false);
  treeNavButtons();
  setStyles(currentElement);
}

function treeNavButtons() {
  PRNT_BTN.disabled = currentElement.parentElement === null;
  FRST_CHLD_BTN.disabled = currentElement.firstElementChild === null;
  PRV_SBL_BTN.disabled = currentElement.previousElementSibling === null;
  NEXT_SBL_BTN.disabled = currentElement.nextElementSibling === null;
}
