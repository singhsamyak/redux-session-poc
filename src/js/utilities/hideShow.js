export const hideShow = hide => show => {
  const hideElem = document.querySelector(hide);
  const showElem = document.querySelector(show);

  if (hideElem && showElem) {
    hideElem.style.display = 'none';
    showElem.style.display = 'block';
  }
};
