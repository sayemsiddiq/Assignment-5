// history opening

document.getElementById('history-btn').addEventListener('click',function(){

    document.getElementById('donate-btn').style.backgroundColor="white";
    document.getElementById('history-btn').style.backgroundColor="rgb(180, 244, 97)";
    
    document.getElementById('transaction-container').classList.remove('hidden');
    document.getElementById('donate-section').classList.add('hidden');
});


document.getElementById('donate-btn').addEventListener('click',function(){

        document.getElementById('history-btn').style.backgroundColor="white";
        document.getElementById('donate-btn').style.backgroundColor="rgb(180, 244, 97)";  

        document.getElementById('transaction-container').classList.add('hidden');
        document.getElementById('donate-section').classList.remove('hidden');
});