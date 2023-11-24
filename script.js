
const calculate=()=>{
        


    const dob= new Date(document.getElementById("dob").value);
    const today=new Date();

    if(isNaN(dob.getTime())){
        alert("Invalid Date")
        return false;
    } else {

        let age=today.getFullYear()-dob.getFullYear();
        const mondifference= today.getMonth()-dob.getMonth
        if(mondifference<0 || (mondifference===0 && today.getDate()<dob.getDate())){
            --age;
        }
        
        document.getElementById('output').innerText=age+" Years Old"
    }
        }

    