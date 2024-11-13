const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
  
    function openModal() {
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('opacity-100');
        modalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
    }
    function closeModal() {
      modal.classList.remove('opacity-100');
      modalContent.classList.remove('scale-100', 'opacity-100');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }
    window.onclick = function (event) {
      if (event.target === modal) {
        closeModal();
      }
    };
    function createCard() {
      const container = document.getElementById('card-container');
      
      // Знаходимо елемент кнопки `+`
      const addButton = container.querySelector('.flex.w-48.p-4.h-auto.rounded-lg.border-4.border-b_color.cursor-pointer:last-child');
    
      // Створюємо нову картку
      const newCard = document.createElement('div');
      newCard.className = 'flex w-48 p-4 h-auto rounded-lg border-4 border-b_color cursor-pointer';
      newCard.onclick = openModal;
    
      // Додаємо вміст нової картки
      newCard.innerHTML = `
        <div>
          <div class="flex gap-4">
            <img class="size-20" src="/img/cat.png" alt="cat">
            <p class="pt-8 w-auto text-t_color">Tom</p>
          </div>
          <div class="flex pt-2 gap-14 justify-around text-t_color">
            <p>Time</p>
            <p>Location</p>
          </div>
          <div class="flex justify-between items-center">
            <ul class="text-t_color">
              <li>- 8:15</li>
              <li>- 8:15</li>
              <li>- 8:15</li>
              <li>- 8:15</li>
            </ul>
            <div>
              <img class="size-16" src="/img/House.png" alt="House">
              <img class="size-16" src="/img/tree.png" alt="tree">
            </div>
          </div>
        </div>
      `;
    
      // Вставляємо нову картку перед кнопкою `+`
      container.insertBefore(newCard, addButton);
    }
    