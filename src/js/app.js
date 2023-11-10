class Tasks {
  constructor(container) {
    this.container = container;
  }

  // Создаем основу и подписываемся на все элементы
  startInnerHtml() {
    this.container.innerHTML = `
      <div class="container">
        <div class="collapse task">
          <div class="collapse-container">
            <button class="collapse-button">Показать</button>
            <div class="collapse-text">
            <p>В рамках реализации большого портала вам необходимо сделать виджет "collapsible"-контейнеров, который может разворачиваться и сворачиваться.</p>
            <hr>
            <p>Подобный виджет есть в рамках Bootstrap, но как мы с вами "знаем": "jQuery не нужен", поэтому вам нужно реализовать такой же виджет на чистом JS.</p>
              </div>
            <div class="collapse-copy">Скопировать</div>
          </div>
        </div>
    `;
    this.collapseBtn = this.container.querySelector('.collapse-button');
    this.collapseText = this.container.querySelector('.collapse-text');
    this.collapseCopy = this.container.querySelector('.collapse-copy');
    this.collapseBtn.addEventListener('click', (e) => this.onCollapseBtn(e));
    this.collapseCopy.addEventListener('click', (e) => this.onCollapseCopy(e));
  }

  // Мучаем кнопку
  onCollapseBtn(e) {
    e.preventDefault();
    // Скрытие текста
    this.collapseText.classList.toggle('collapse-transition');
    // Изменение надписи кнопки
    if (this.collapseBtn.textContent === 'Скрыть') {
      this.collapseBtn.textContent = 'Показать';
    } else {
      this.collapseBtn.textContent = 'Скрыть';
    }
  }

  // Копируем в буфер обмена по кнопке
  onCollapseCopy(e) {
    e.preventDefault();
    const textCopy = this.collapseText.textContent;
    navigator.clipboard.writeText(textCopy);
  }
}

// Запускаем.....
new Tasks(document.getElementById('animation')).startInnerHtml();
