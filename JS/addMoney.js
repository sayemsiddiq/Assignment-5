// adding money

document.getElementById('donate-btn1').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmount=getInput('input-add1');
    const balance = document.getElementById('main-balance').innerText;

    const donation = document.getElementById('donated').innerText;

    if(donateAmount > 0 && parseFloat(balance) > donateAmount){
        
        const newDonation = parseFloat(donation) + parseFloat(donateAmount);
         document.getElementById('donated').innerText = newDonation;
         const newBalance = parseFloat(balance) - donateAmount;
         document.getElementById('main-balance').innerText = newBalance;

         document.getElementById('input-add1').value='';
         const div = document.createElement('div');
         div.classList.add('mt-8','px-8','py-4','rounded-md', 'bg-red-50');
         div.innerHTML=
         `
         <h3 class="text-xl font-semibold"><span>${donateAmount}</span> taka donated for Flood at Noakhali.</h3>
         <p class="mt-4">Date :${new Date()}</p> 
          
         `;
         console.log(div);
         document.getElementById('transaction-container').appendChild(div);

         document.getElementById('special-cart').setAttribute(my_modal_1.showModal());
    }
    else{
        alert('Please enter a valid amount.Thank You');
    }
})