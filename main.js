let gi = document.getElementById("gallery-images")

index = 0
while (index < 10){

    gi.innerHTML += `<img src="https://picsum.photos/200/300?random=${index}">`

    index++
}
