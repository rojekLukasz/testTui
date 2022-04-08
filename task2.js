let discounts = document.querySelectorAll('.ResultListItemV2__deposit');
console.log(discounts);

for (let i = 0; i < discounts.length; i++) {
  if (discounts[i].textContent.match(/(\d+)/)[0] < 500) {
    discounts[i].style.display = 'none';
  }
}

let buttons__search = document.querySelector('.buttons__search');

console.log(buttons__search);

