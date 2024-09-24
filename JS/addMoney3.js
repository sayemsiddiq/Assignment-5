// adding money for quota movement
document.getElementById('donate-btn3').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmount=getInput('input-add3');
    const balance = document.getElementById('main-balance').innerText;

    const donation = document.getElementById('donated3').innerText;

    if(donateAmount > 0 && parseFloat(balance) > donateAmount){
        
        const newDonation = parseFloat(donation) + parseFloat(donateAmount);
         document.getElementById('donated3').innerText = newDonation;
         const newBalance = parseFloat(balance) - donateAmount;
         document.getElementById('main-balance').innerText = newBalance;

         document.getElementById('input-add3').value='';
         const div = document.createElement('div');
         div.classList.add('mt-8','px-8','py-4','rounded-md', 'bg-red-50');
         div.innerHTML=
         `
         <h3 class="text-xl font-semibold"><span>${donateAmount}</span> taka donated for Quota Movement Victims.</h3>
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