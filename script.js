function number() {
  let min = 1 // минимальное значение
  let max = 100 // максимальное значение
  
  const FuzzBuzz = document.querySelector('.fuzzbuzz-wrapper') // взять элемент из HTML
  
  /**
   * Обработчик обертывания в тег span на каждой итерации, для возможности стилизации в css.
   * @param {*} valueData 
   * @param {*} styleSelector 
   */
  function pushValue(valueData, styleSelector) {
    const num = document.createElement('span')
    num.setAttribute('class', styleSelector)
    num.innerHTML = valueData
    FuzzBuzz.appendChild(num)
  }

  for (min; min<max+1; min++) { // генератор чисел
    if (min % 15 === 0) { // проверка на кратность к 3 и 5
      pushValue('FuzzBuzz', 'fuzzbuzz')
    } else if (min % 5 === 0) { // проверка на кратность к 5
      pushValue('Buzz', 'buzz')
    } else if (min % 3 === 0) { // проверка на кратность к 3
      pushValue('Fuzz', 'fuzz')
    } else {
      pushValue(min, 'span') // запись результата в массив
    }
  }
  
}



