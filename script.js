function number() {
  let min = 1 // минимальное значение
  let max = 100 // максимальное значение
  const num = []
  for (min; min<max+1; min++) { // генератор чисел
    if (min % 15 === 0) { // проверка на кратность к 3 и 5
      num.push('FuzzBuzz')
    } else if (min % 5 === 0) { // проверка на кратность к 5
      num.push('Buzz')
    } else if (min % 3 === 0) { // проверка на кратность к 3
      num.push('Fuzz')
    } else {
      num.push(min) // запись результата в массив
    }
  }
  formatArray = num.join(", ") // форматирование массива, для HTML
  const FuzzBuzz = document.querySelector('.fuzzbuzz p') // взять элемент из HTML
  FuzzBuzz.innerHTML = formatArray // вывести числа на страницу
  console.log(num)
}