function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}

// const submit = document.getElementById("submitForm");

// submit.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const item = document.getElementById("item").value;
//     const category = document.getElementById("category").value;
//     const price = document.getElementById("price").value;
//     const description = document.getElementById("description").value; 
    
//     const itemCod = encodeURIComponent(item);
//     const categoryCod = encodeURIComponent(category);
//     const priceCod = encodeURIComponent(price);
//     const descriptionCod = encodeURIComponent(description);
    
//     var input = document.getElementById('file');
//     var file = input.files[0];
    
//         if (file) {
//             var reader = new FileReader();
//             reader.onload = function(e) {
//                 var imageData = e.target.result;
//                 sendToAnotherPage(imageData);
//             };
//             reader.readAsDataURL(file);
//         }else {
//             console.error('Nenhuma imagem selecionada.');
//         }
    
//         function sendToAnotherPage(imageData) {
//             sessionStorage.setItem('imageData', imageData);
//         }
        
//     window.location.href = "perfil.html?item=" + itemCod +  "&category=" + categoryCod + "&price=" + priceCod + "&description=" + descriptionCod;
//});




