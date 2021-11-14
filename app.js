var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "bg.mp3"



function play() {
    audio.play()
    var prompt = document.getElementById("prompt")
    var content = document.getElementById("content")

    prompt.style.display = "none"
    content.style.display = "block"
}

// var is_qoute_open = false
// var qoute = document.getElementById("quote")
// var qoute_btn = document.getElementById("quote_btn")
// var id = null;
// var pos = -150;
// function quote() {
//     if (!is_qoute_open) {
//         qoute.style.right = "0"
//         qoute_btn.innerHTML = ">"
//         is_qoute_open = true
//         id = setInterval(frame_open, 3);
//     } else {
//         qoute.style.right = "-150px"
//         qoute_btn.innerHTML = "<"
//         is_qoute_open = false
//         id = setInterval(frame_close, 3);
//     }
//     function frame_open() {
//         if (pos == 0) {
//             clearInterval(id);
//         } else {
//             pos++;
//             qoute.style.right = pos + 'px';
//         }
//     }
//     function frame_close() {
//         if (pos == -150) {
//             clearInterval(id);
//         } else {
//             pos--;
//             qoute.style.right = pos + 'px';
//         }
//     }
// }