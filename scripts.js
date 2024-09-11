document.addEventListener('DOMContentLoaded', () => {
    const numberGrid = document.getElementById('numberGrid');
    const selectedNumbersList = [];

    for (let i = 0; i < 1000; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = String(i).padStart(3, '0');
        numberDiv.addEventListener('click', () => toggleSelection(i, numberDiv));
        numberGrid.appendChild(numberDiv);
    }

    function toggleSelection(number, element) {
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
            selectedNumbersList.splice(selectedNumbersList.indexOf(number), 1);
        } else {
            element.classList.add('selected');
            selectedNumbersList.push(number);
        }
    }

    document.getElementById('whatsappButton').addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        if (!name || selectedNumbersList.length === 0) {
            alert("Complete todos los campos");
            return;
        }
        window.open(`https://api.whatsapp.com/send?phone=5213324096209&text=Hola%20me%20gustaría%20apartar%20los%20boletos:${selectedNumbersList.join(', ')}`);
    });
});
