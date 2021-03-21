fetch('https://api.github.com/users/surakshyt/repos')
.then((res) => res.json().
then((data) => {
    //console.log(data);
    //console.log(data[0]["id"]);


//var tableRow= document.querySelector('#table-row');
var tableBody= document.querySelector('#table-body'); 

if(data.length== 0)
{
    console.log("no items in the array")

}
else{
    // var arr= [data[0]["name"], data[0]["id"], data[0]["description"], data[0]["language"]];
    
    data.map((item, index) => {
        var trow= tableBody.insertRow(index);
       // console.log(trow);
       var cell0= trow.insertCell(0)
       var cell1= trow.insertCell(1);
       var cell2= trow.insertCell(2);
       var cell3= trow.insertCell(3);
       cell0.innerHTML= item.id;
       cell1.innerHTML= item.name;
       cell2.innerHTML= `${item.description}`;

       cell3.innerHTML= `<a href= ${item.html_url}>${item.html_url} </a>`;
       console.log(item.description)
        // console.log(item.name,item.id,item.html_url);
    })
}
//}
    
}));