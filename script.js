const needs = [
  'Maybe a stretch, for a start.',
  'A snack. A really good one.',
  'Five minutes in the sun.',
  'A friend who gets your weird jokes.',
  'A little dance with no audience.',
  'Permission to rest without earning it.',
  'Some fresh air and a tiny adventure.'
];

const needButton = document.querySelector('#need-button');
const needAnswer = document.querySelector('#need-answer');
let currentNeed = 0;
needButton.addEventListener('click', () => {
  currentNeed = (currentNeed + 1) % needs.length;
  needAnswer.textContent = needs[currentNeed];
  needAnswer.classList.remove('pop');
  void needAnswer.offsetWidth;
  needAnswer.classList.add('pop');
});

const art = {
  1: ['many small lives', 'Flash sheet of figures, birds, a unicorn and small symbols'],
  2: ['room for two', 'Figure with a deer nestled against their body'],
  3: ['filthy little lover', 'Cat figures flowing into playful lettering'],
  5: ['body animal', 'Seated nude figure with birds'],
  6: ['hold on gently', 'Rabbit-eared figure holding a heart'],
  7: ['soft armour', 'Figure with rabbit ears among flowers and thorny vines']
};
const dialog = document.querySelector('#art-dialog');
const dialogImage = document.querySelector('#dialog-image');
const dialogCaption = document.querySelector('#dialog-caption');
document.querySelectorAll('[data-art]').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.art;
    dialogImage.src = `assets/${id}-Photo-${id}.jpg`;
    dialogImage.alt = art[id][1];
    dialogCaption.textContent = art[id][0];
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
