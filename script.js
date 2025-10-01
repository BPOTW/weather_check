function checkWether(){
    const city = document.getElementById("city").value;
    const resultDiv = document.querySelector("#result");
    try{
        const result = axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`);
        result.then((data)=>{
            console.log(data.data.current.temp_c);
            resultDiv.innerHTML = `Current ${city} wether is ${data.data.current.temp_c}`;
        })
    }catch(error){
        console.log(error);
    }
}

// checkWether()
// setInterval(() => {
//     checkWether();
// }, 5000);