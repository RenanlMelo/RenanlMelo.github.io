function getURLData() {
    var urlParams = new URLSearchParams(window.location.search);
    const data1 = urlParams.get("item");
    const data2 = urlParams.get("category");
    const data3 = urlParams.get("price");
    const data4 = urlParams.get("description");

    if(data1 && data2 && data3 && data4 ){
        decode1 = decodeURIComponent(data1);
        decode2 = decodeURIComponent(data2);
        decode3 = decodeURIComponent(data3);
        decode4 = decodeURIComponent(data4);
    }

    return { decode1, decode2, decode3, decode4 };
}

function load(){
    const imagePath = window.localStorage.getItem("file");
    const image = document.querySelector("#image");
    image.src = "../HTML/" + imagePath;
}

    const { decode1, decode2, decode3, decode4 } = getURLData;

    console.log(decode1);
    console.log(decode2);
    console.log(decode3);
    console.log(decode4);