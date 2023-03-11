  const form = document.querySelector('.login-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const elements = form.elements;
    const data = {};
    for (let element of elements) {
      if (element.name) {
        if (!element.value) {
          alert('Todos los campos deben ser rellenados!');
          return;
        }
        data[element.name] = element.value;
      }
    }
    console.log(data);
    form.reset();
  });
