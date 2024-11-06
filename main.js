document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); // предотвращаем отправку формы

    const tovarSelect = document.getElementById('tovar');
    const quantityInput = document.querySelector('input[name="quantity"]');
    const resultLabel = document.querySelector('label[for="result"]');

    const selectedPrice = parseFloat(tovarSelect.value);
    const quantity = parseFloat(quantityInput.value);

    // Проверка, вводит ли пользователь дробное число
    if (!Number.isInteger(quantity)) {
        resultLabel.textContent = "Введите целое число для количества";
        return;
    }

    // Проверка, выбран ли товар
    if (isNaN(selectedPrice) || quantity < 1) {
        resultLabel.textContent = "Выберите товар и введите корректное количество";
        return;
    }

    const totalPrice = selectedPrice * quantity;
    resultLabel.textContent = `Стоимость: ${totalPrice} руб.`;
});
