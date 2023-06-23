const container= document.getElementById('container');
const submitButton= document.getElementById('submit-btn');
const inputDisplay= document.getElementById('display');
const writerName = document.getElementById('writerName');
//writerName.innerHTML=0;

const request= new XMLHttpRequest();
request.open('GET','https://zenquotes.io/api/quotes');
request.send();

submitButton.addEventListener('click',function(){
    const [data]= JSON.parse(request.responseText);
    console.log(data);
    inputDisplay.innerHTML=data.q;
    console.log(writerName)
    writerName.innerHTML=`✍${data.a}`;
})