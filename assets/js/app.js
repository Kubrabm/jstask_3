function Credit() {
    var a = Number(document.getElementById('amount').value);
    var m = Number(document.getElementById('month').value);
    var p = Number(document.getElementById('percent').value);

    var i = parseFloat(p) / 100 / 12;
    
    var result = Math.pow(1 + i,p);
    var monthly = (a * result * i)/(result-1);

    document.getElementById('monthly_payment').innerHTML = monthly.toFixed(2);
    document.getElementById('total_payment').innerHTML = (monthly*p).toFixed(2);
}