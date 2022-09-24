
var target=document.getElementById('btn');
target.addEventListener('click',function(){
    var uts=document.getElementById('uts').value;
    var uas=document.getElementById('uas').value;
    var tugas=document.getElementById('tugas').value;

    var total=Number(uts)+Number(uas)+Number(tugas);
    var per=(total*100)/300;

    if(per>=80 && per<100){
        var grade="A Selamat kamu lulus"
    }
    else if(per>=60 && per<79){
        var grade="B Selamat kamu lulus"
    }
    else if(per>=40 && per<59){
        var grade="C Selamat kamu lulus"
    }
    else{
        var grade="maaf kamu gagal"
    }

    document.getElementById('text').innerHTML=(grade);
})