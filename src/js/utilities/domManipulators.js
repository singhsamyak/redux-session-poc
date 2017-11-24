export const hideShow = hide => show => {
  const hideElem = document.querySelector(hide);
  const showElem = document.querySelector(show);

  if (hideElem && showElem) {
    hideElem.style.display = 'none';
    showElem.style.display = 'block';
  }
};

export const hide = hide => {
  const hideElem = document.querySelector(hide);

  if (hideElem) {
    hideElem.style.display = 'none';
  }
};

export const show = show => {
  const showElem = document.querySelector(show);

  if (showElem) {
    showElem.style.display = 'block';
  }
};
