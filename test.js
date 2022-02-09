function Read(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "DB.txt", false);
    xhr.send();
    console.log(xhr.responseText);
}