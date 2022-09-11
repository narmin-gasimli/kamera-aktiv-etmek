
function kamerani_aktiv_et(){
    let video = document.getElementById('video');
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true})
        .then(function(s) {
            video.srcObject= s;
        })
        .catch(function(err){
            console.log(err);
        });
    }else{
        console.log('No');
    }
}

function arxa_sekli_deyis(){
    document.body.style.backgroundImage = "url('img/download.jpg')"
}

function no(){
    document.write("1-i seçməklə kameranı aktiv edə bilərsən və ya 2-ni seçməklə çobanyasdığı çiçəyini görə bilərsən.");
}
function activate(){
    var username = document.getElementById('demo').value

    switch(username){

        case '1':
            kamerani_aktiv_et()
            break;

        case '2':
            arxa_sekli_deyis()
            break;

        default:
            no()

    }
}