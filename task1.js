let adults = jsonData.packageViewData.paxViewData.noOfAdults;
let children = jsonData.packageViewData.paxViewData.noOfChildren;
let childrenAndAdults = adults + children;

// let adults = 1;
// let children = 1;
// let childrenAndAdults = adults + children;

let seats = `
<div id='seats'>
    <header>
      <div class='floatLeft'>Standart allocated seats</div>
      <div class='floatRight'>x${childrenAndAdults} included</div>
    </header>
    <div id='seatsBoxContainer'>
      <div class='seatsBoxFrame'>
        <div class='seatsBoxTop'></div>
      <div class='seatsBox' id='standartSeats'>
        <span><img src="https://user-images.githubusercontent.com/97246574/161831494-af25178e-312a-416e-984a-7dafbc457127.jpg" alt="seat icon" width='110px' height='105px'></span>
        <div class='textSeatsBox'>
          <h4>STANDARD SEATS</h4>
          <p>Seats will be allocated at check-in.</p>
        </div>
        <div class='seatsBoxBottom'>
          <h3>INCLUDED</h3>
        </div>
      </div>
      </div>
      <div class='seatsBoxFrame'>
        <div class='seatsBoxTop'><div id='Groups_frequently_book'>GROUPS FREQUENTLY BOOK</div></div>
      <div class='seatsBox' id='selectSeats'>
        <span><img src="https://user-images.githubusercontent.com/97246574/161831460-3fb4fc58-b89f-4f18-bc17-464c816d2089.png" alt="seat icon" width='110px' height='105px'></span>
        <div class='textSeatsBox'>
          <h4> SELECT YOUR SEATS</h4>
          <p>Reserve your favorite seats and gaurantee you sit together.</p>
        </div>
        <div class='seatsBoxBottom'>
          <p>+£${childrenAndAdults * 15} (£15pp)</p>
          <button>SELECT</button>
        </div>
      </div>
      </div>
      <div class='seatsBoxFrame'>
      <div class='seatsBoxTop'><div id='Solo_travellers_frequently_book'>SOLO TRAVELLERS FREQUENTLY BOOK</div></div>
      <div class='seatsBox' id='extraSpaceSeats'>
        <span><img src="https://user-images.githubusercontent.com/97246574/161831399-7d2ad265-d18f-47b5-b8e2-a0d8fe6fc5ee.png" alt="seat icon" width='110px' height='105px'></span>
        <div class='textSeatsBox'>
          <h4>EXTRA SPACE SEATS</h4>
          <p>Enjoy a little more room on board.</p>
        </div>
        <div class='seatsBoxBottom'>
          <p>+£${childrenAndAdults * 55} (£55pp)</p>
          <button>SELECT</button>
        </div>
      </div>
      </div>
      <div class='seatsBoxFrame'>
      <div class='seatsBoxTop'></div>
      <div class='seatsBox' id='premiumClub'>
        <span><img src="https://user-images.githubusercontent.com/97246574/161831528-294b73e4-23b1-4928-8d39-3de3e3932066.png" alt="seat icon" width='110px' height='105px'></span>
        <div class='textSeatsBox'>
          <h4>PREMIUM CLUB</h4>
          <p>More comfortable seats with a bigger recline.</p>
        </div>
        <div class='seatsBoxBottom'>
          <p>+£${childrenAndAdults * 70} (£70pp)</p>
          <button>SELECT</button>
        </div>
      </div>
      </div>
    </div>
    <div id='seatsTerms'><a href="">Terms & conditions</a></div>
  </div>
`;

document.getElementById("SeatsMapCustomization_component").innerHTML = seats;

const selectSeats = document.querySelector('#selectSeats');
const Groups_frequently_book = document.querySelector('#Groups_frequently_book');
const extraSpaceSeats = document.querySelector('#extraSpaceSeats');
const Solo_travellers_frequently_book = document.querySelector('#Solo_travellers_frequently_book');

if (adults === 1 && children === 0){
  extraSpaceSeats.style.border = '2px solid #092A5E';
  Solo_travellers_frequently_book.style.display = 'block';
} else if (adults > 2 && children === 0) {
  selectSeats.style.border = '2px solid #092A5E';
  Groups_frequently_book.style.display = 'block';
}

let luggageContainer = `
<div id='luggageContainer'>
    <div class='top'>
      <div class='floatLeft'>15kg Luggage</div>
      <div class='floatRight'>x${childrenAndAdults} Included</div>
    </div>
    <div id='adultLuggage'>
    </div>
</div>
`;

document.querySelector('.LuggageAncillary__summaryComponentContainer').innerHTML = luggageContainer;

let adultNo = '';

for (let i = 1; i <= adults; i++) {
  adultNo += `
  <div class='adultNo'>
      <div class='topAdultLuggage'>
        <p>ADULT ${i}</p>
      </div>
      <div class='luggage luggageIncluded'>
        <span><img src="https://user-images.githubusercontent.com/97246574/161832820-51c9c07a-5d5d-468c-9648-954ad7502e5f.png" alt="luggage icon"></span>
        <div class='kilo'>15kg</div>
        <div class='textIncluded'>Included</div>
      </div>
      <div class='luggageFrame20kg'>
        <div class='frequentlyLagguge20kg'>Couples frequently book</div>
      <div class='luggage luggage20kg'>
        <span><img src="https://user-images.githubusercontent.com/97246574/161832795-b5989030-d37d-4b5c-9e7e-121df69f718c.png" alt="luggage icon"></span>
        <div class='kilo'>20kg <strong>+£23</strong></div>
        <button class='luggageButton'>SELECT</button>
      </div>
    </div>
    <div class='luggageFrame25kg'>
      <div class='frequentlyLagguge25kg'>Families frequently book</div>
      <div class='luggage luggage25kg'>
        <span><img src="https://user-images.githubusercontent.com/97246574/161832795-b5989030-d37d-4b5c-9e7e-121df69f718c.png" alt="luggage icon"></span>
        <div class='kilo'>25kg <strong>+£46</strong></div>
        <button class='luggageButton'>SELECT</button>
      </div>
      </div>
      </div>
  `;
  document.querySelector('#adultLuggage').innerHTML = adultNo;
}

const luggage20kg = document.querySelectorAll('.luggage20kg');
const luggage25kg = document.querySelectorAll('.luggage25kg');
const luggageFrame20kg = document.querySelectorAll('.luggageFrame20kg');
const luggageFrame25kg = document.querySelectorAll('.luggageFrame25kg');
const frequentlyLagguge20kg = document.querySelectorAll('.frequentlyLagguge20kg');
const frequentlyLagguge25kg = document.querySelectorAll('.frequentlyLagguge25kg');

console.log(frequentlyLagguge25kg);

for (let i = 0; i < adults; i++) {
  if (adults === 2 && children === 0) {
    luggage20kg[i].style.border = 'none';
    luggageFrame20kg[i].style.border = '2px solid #092A5E';
    frequentlyLagguge20kg[i].style.display = 'block';
  } else if (adults > 0 && children > 0) {
    luggage25kg[i].style.border = 'none';
    luggageFrame25kg[i].style.border = '2px solid #092A5E';
    frequentlyLagguge25kg[i].style.display = 'block';
  }
}