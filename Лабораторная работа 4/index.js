/* Актуальный справочник по CSS: https://developer.mozilla.org/ru/docs/Web/JavaScript */

// создание обработчика события изменения элемента выпадающего списка с id border
border.addEventListener('change', e => {
    // сменить атрибут src у всех элементов класса image в документе на значение выпадающего списка
    document.querySelector('.image').src = e.target.value
})

// создание обработчика события изменения чекбокса с id greeting
greeting.addEventListener('change', e => {
    // выбрать все радиокнопкии с именем gender и для кажой
    document.querySelectorAll('input[name="gender"]').forEach(item => {
        // сменить состояние атрибута disabled на противоположное
        item.disabled = !item.disabled
    })
    // сменить состояние атрибута disabled у поля ввода с id person на противоположное
    person.disabled = !person.disabled
})

// выбрать все радиокнопки с именем gender и для каждой 
document.querySelectorAll('input[name="gender"]').forEach(item => {
    // создать обработчик события изменения эллемента
    item.addEventListener('change', e => {
        // поменять плейсхолдер у поля с id person в зависимости от пола
        person.placeholder = e.target.value == 'male' ? 'Вениамин Семенович':'Виолетта Евграфовна'
    })
})

// создать обработчик события поднятия клавиши у поля с id message
message.addEventListener('keyup', e => {
    // поменять значение в поле с id count на длину введенного текста в message
    count.value = `Введено символов: ${e.target.value.length}/150`
})

// создать обработчик события изменения значения у поля с id message
message.addEventListener('change', e => {
    // поменять значение в поле с id count на длину введенного текста в message
    count.value = `Введено символов: ${e.target.value.length}/150`
})

// создать обработчик события нажатия на кнопку обнуления формы
reset.addEventListener('click', e => {
    // сменить атрибут src у всех элементов класса image в документе на img/1.png
    document.querySelector('.image').src = 'img/1.png'
    // выбрать все радиокнопкии с именем gender и для кажой
    document.querySelectorAll('input[name="gender"]').forEach(item => {
        // сменить состояние атрибута disabled на false
        item.disabled = false
    })
    // сменить состояние атрибута disabled на false у поля с id person
    person.disabled = false
    // поменять плейсхолдер у поля с id person на стандартный
    person.placeholder = 'Вениамин Семенович'
    // поменять значение в поле с id count на 0
    count.value = 'Введено символов: 0/150'
})

// создать обработчик события отправки формы у формы с id form
form.addEventListener('submit', e => {
    // отменить стандартное поведение
    e.preventDefault()
    // вывести уведомление об отправке формы
    alert('Запрос отправлен')
    // выполнить нажатие на кнопку reset
    reset.click()
})

