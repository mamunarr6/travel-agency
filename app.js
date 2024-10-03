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

        const myBudget = document.getElementById('my-budget').innerText;
        const convertedMyBudget = parseInt(myBudget);

        if (convertedMyBudget - parseInt(price) < 0) {
            alert('Budget is low');
            return;
        }

        document.getElementById('my-budget').innerText = convertedMyBudget - parseInt(price);

        myTours.appendChild(myTour);
        myTour.appendChild(tours);
        myTour.appendChild(hr);

        totalCost('total-cost', price);
        grandTotalCost('grand-total', parseInt(price));
        // const totalCost = document.getElementById('total-cost').innerText;
        // const convertedTotalCost = parseInt(totalCost);
        // const sum = convertedTotalCost + parseInt(price)

        // const grandTotalCost = document.getElementById('grand-total').innerText;
        // const convertedGrandTotalCost = parseInt(grandTotalCost);
        // const sum2 = convertedGrandTotalCost + parseInt(price);

        setInnerText('cart-count', count);

        // setInnerText('grand-total', sum2)
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText(id, sum);
}
function grandTotalCost(category) {
    console.log(category)
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);
    console.log(convertedTotalCost)
    if (category == 'bus') {
        setInnerText('grand-total', convertedTotalCost + 100);
    } else if (category == 'train') {
        setInnerText('grand-total', convertedTotalCost - 200);
    } else if (category == 'plane') {
        setInnerText('grand-total', convertedTotalCost + 500);;
    } else {
        setInnerText('grand-total', convertedTotalCost);
    }

}



