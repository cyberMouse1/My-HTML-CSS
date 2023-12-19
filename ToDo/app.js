let myNodeList = document.getElementsByTagName('li');
for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false)

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let target = document.createTextNode(inputValue);
    li.appendChild(target);
    if (inputValue === '') {
        alert("Oh...");
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById('myInput').value = "";

    let span = document.createElement("SPAN");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}