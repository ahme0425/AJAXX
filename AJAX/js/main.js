document.addEventListener("DOMContentLoaded", init);
let httpRequest = "POST";




function init() {
    document.getElementById("btnSend").addEventListener("click", getData);
    document.getElementById("btnBack").addEventListener("click", BackBtn);
}


function getData() {

    let number = document.getElementById("digits").value;
    let min = document.getElementById("max").value;

    let customSettings = {
        method: httpRequest,
    };
    let url = "https://davidst.edumedia.ca/mad9014/nums.php?digits=" + number + "&max=" + min;
    let request = new Request(url, customSettings);
    let errorMsg = document.getElementById("errorMessage");

    fetch(request)
        .then(function (data) {
            console.log(data);
            errorMsg.innerHTML = "";
            errorMsg.style.display = "none";
            return data.json();
        })

        .then(function (data) {
            console.log(data);
            let ul = document.querySelector(".num_list");
            ul.innerHTML = "";

            if (data.code == "0") {
                for (let item in data.numbers) {
                    let li = document.createElement("li");
                    li.innerHTML = data.numbers[item];
                    ul.appendChild(li);
                }
                Toggle(1);
            } 
        })
}
