// Create a p element to display the spread, set css and id
const $ = el => document.querySelector(el);
let p = document.createElement('p');
p.style.cssText = `
    font-family: DIN Alternate,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif,PingFangSC-regular;
    font-size: 11px;
    font-weight: 400;
    color: #7d93b4;
    margin-left: 10px;
`;
p.id = 'spread';
const program = ()=>{
    let askVal = $('.ask-data-inner').lastChild.firstChild.innerText; //Ask first price
    let bidVal = $('.bid-data-inner').firstChild.firstChild.innerText; // Ask bid price
    // Calculate spread
    let spread = (askVal - bidVal) / askVal * 100;
    // Set text content and place
    $('#spread').innerText = `Spread: ${spread.toFixed(4)}%`;
}
setTimeout(function() {
    $('.market-price.flex').appendChild(p);
    program();
    // if the container changes, run the function again
    $('.ask-data-inner').lastChild.firstChild.addEventListener('DOMSubtreeModified', program);
    $('.bid-data-inner').firstChild.firstChild.addEventListener('DOMSubtreeModified', program);
}, 4000);
