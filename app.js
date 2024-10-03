const allCartBtn = document.getElementsByClassName('cart-btn');
let count = 0;

for (const btn of allCartBtn) {
    btn.addEventListener('click', (e) => {
        count += 1;
        setInnerText('cart-count', count);
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

