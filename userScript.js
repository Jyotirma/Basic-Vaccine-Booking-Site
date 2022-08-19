
document.querySelector('.userForm').addEventListener('submit',saveData)

function saveData(event){ 
     event.preventDefault();
    var data1 = retrieveData();
    if(!data1){ 
        event.preventDefault();
        document.querySelector('.errorHeader').style.display = 'block';
        document.querySelector('.errorHeader').innerHTML = "Credentials can't be empty"
        setTimeout(function(){
            document.querySelector('.errorHeader').style.display = 'none';
            document.querySelector('.errorHeader').innerHTML = ""
        },2000);
        return;
    }
    var readData = reading_local(data1);
    if(!readData){
        event.preventDefault();
        document.querySelector('.errorHeader').style.display = 'block';
        document.querySelector('.errorHeader').innerHTML = "User has already registered"
        setTimeout(function(){
            document.querySelector('.errorHeader').style.display = 'none';
            document.querySelector('.errorHeader').innerHTML = ""
        },2000);
        return;
    }
    clearForm();
}
function retrieveData(){
   var name1 = document.getElementById("n1").value;
   var email = document.getElementById("email").value;
   var age = document.getElementById("age").value;
   var phn = document.getElementById("phn").value;
   var anum = document.getElementById("anum").value;
   var add = document.getElementById("add").value;
   var date = document.getElementById("date").value;

   var arr = [name1, email, age, phn, anum, add, date];
   if (arr.includes("")){
    return false;
   }
   else{
    return arr;
    }   
   
}

function reading_local(data1) {
    //storing the values in the local storage
    console.log(data1);
    if(!localStorage.getItem(data1[1])){
        let userObj = {
            name: data1[0],
            email: data1[1],
            age : data1[2],
            phn:data1[3],
            anum:data1[4],
            add:data1[5],
            date:data1[6]

        }
        localStorage.setItem(data1[1],JSON.stringify(userObj))
        return true;
    }
    else
    return false;
}

function clearForm(){
    document.querySelectorAll('.input_name').forEach(item=>{
        if(item.querySelector('input'))
        item.querySelector('input').value = "";
        else if(item.querySelector('textarea'))
        item.querySelector('textarea').value = "";
    })
}
