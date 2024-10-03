const allCartBtn = document.getElementsByClassName('cart-btn');
let count = 0;

for (const btn of allCartBtn) {
    btn.addEventListener('click', (e) => {
        count += 1;
        const placeName = e.target.parentNode.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

        const myTours = document.getElementById('my-tours');
        const myTour = document.createElement('div');
        const tours = document.createElement('p');
        const hr = document.createElement('hr');

        myTour.classList.add('my-tour');
        tours.innerHTML = `${placeName} $ <span>${price}`;
        hr.classList.add('border-red-200')

        myTours.appendChild(myTour);
        myTour.appendChild(tours);
        myTour.appendChild(hr);

        const totalCost = document.getElementById('total-cost').innerText;
        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(price)

        setInnerText('total-cost', sum);
        setInnerText('cart-count', count);
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

