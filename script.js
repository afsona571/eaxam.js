let wrapper = document.querySelector('.wrapper');
let birinchison = parseFloat(prompt('Birinchi sonni kiriting'));
let operant = prompt('Operantni kiriting');
let ikinchiSon = parseFloat(prompt('Ikkinchi sonni kiriting'));

let div = document.createElement('div');
div.className = 'flex justify-center items-center w-full h-screen gap-[50px]';
div.innerHTML = `
  <p class="text-2xl bg-red-400 text-white flex justify-center items-center w-[200px] h-[200px] text-center">${birinchison}</p>
  <p class="text-2xl bg-red-400 text-white flex justify-center items-center w-[200px] h-[200px] text-center">${operant}</p>
  <p class="text-2xl bg-red-400 text-white flex justify-center items-center w-[200px] h-[200px] text-center">${ikinchiSon}</p>
  <button class="btn text-white bg-black px-4 py-2">Ответ</button>
`;

let result;
switch (operant) {
    case '+':
        result = birinchison + ikinchiSon;
        break;
    case '-':
        result = birinchison - ikinchiSon;
        break;
    case '*':
        result = birinchison * ikinchiSon;
        break;
    case '/':
        result = ikinchiSon !== 0 ? birinchison / ikinchiSon : 'Ошибка: деление на ноль';
        break;
    default:
        result = 'Ошибка: неверный оператор';
}

let resultDiv = document.createElement('p');
resultDiv.className = 'text-2xl bg-green-400 text-white flex justify-center items-center w-[200px] h-[200px] text-center hidden';
resultDiv.textContent = result;
div.appendChild(resultDiv);

wrapper.appendChild(div);

// Добавляем обработчик события для кнопки
let button = div.querySelector('.btn');
button.addEventListener('click', () => {
  resultDiv.classList.remove('hidden');
});
