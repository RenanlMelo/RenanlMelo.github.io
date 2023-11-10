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

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const chunkSize = 1024 * 1024; // 1MB chunks (adjust as needed)

        let offset = 0;

        reader.onload = function (e) {
            resolve(e.target.result);

            // Continue reading the next chunk if there is more content
            if (offset < file.size) {
                readNextChunk();
            }
        };

        reader.onerror = (error) => reject(error);

        function readNextChunk() {
            const blob = file.slice(offset, offset + chunkSize);
            reader.readAsDataURL(blob);
            offset += chunkSize;
        }

        // Start reading the first chunk
        readNextChunk();
    });
}

const submit = document.getElementById("submitForm");

submit.addEventListener("submit", async (event) => {
    event.preventDefault();

    const item = document.getElementById("item").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    // const fileInput = document.getElementById("file");
    const description = document.getElementById("description").value; 

    const itemCod = encodeURIComponent(item);
    const categoryCod = encodeURIComponent(category);
    const priceCod = encodeURIComponent(price);
    const descriptionCod = encodeURIComponent(description);
    
    window.location.href = "../perfil.html?item=" + itemCod +  "&category=" + categoryCod + "&price=" + priceCod + "&description=" + descriptionCod;

    if (fileInput.files && fileInput.files[0]) {
        try {
            const base64String = await fileToBase64(fileInput.files[0]);
            const encodedb64File = encodeURIComponent(base64String);
        }
        catch (error) {
            console.error("Error converting file to base64:", error.message);
        }
    }
})

function gohome(){
    window.location='../HTML/newpost.html';
}
function save(){
    window.localStorage.setItem('file', $('#file').val());
}


