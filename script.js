document.getElementById('calculate').addEventListener('click', calculateAge);

function calculateAge() {
    let birthdate = new Date(document.getElementById('birthdate').value);
    let currentDate = new Date();
    
    if(birthdate > currentDate)
    {
        document.getElementById('result').innerText = `Please enter a Valid date`;
    }
    else{
    let years = currentDate.getFullYear() - birthdate.getFullYear();
    let months = currentDate.getMonth() - birthdate.getMonth();
    let days = currentDate.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
        
    document.getElementById('result').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
    }
}

