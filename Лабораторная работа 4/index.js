border.addEventListener('change', e => {
    document.querySelector('.image').src = e.target.value
})

greeting.addEventListener('change', e => {
    document.querySelectorAll('input[name="gender"]').forEach(item => {
        item.disabled = !item.disabled
    })
    person.disabled = !person.disabled
})

document.querySelectorAll('input[name="gender"]').forEach(item => {
    item.addEventListener('change', e => {
        person.placeholder = e.target.value == 'male' ? 'Вениамин Семенович':'Виолетта Евграфовна'
    })
})

reset.addEventListener('click', e => {
    document.querySelector('.image').src = 'img/1.png'
    document.querySelectorAll('input[name="gender"]').forEach(item => {
        item.disabled = false
    })
    person.disabled = false
    person.placeholder = 'Вениамин Семенович'
})

form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Запрос отправлен')
    reset.click()
})

