const favchap = document.querySelector("#favchap");

const button = document.querySelector("button");

const list = document.querySelector("#list");





button.addEventListener("click", function () {
    if (favchap.value.trim() !== "") {
        const element = document.createElement("li");

        const deletebutton = document.createElement("button");
        
        element.textContent = favchap.value;
        deletebutton.textContent = "❌";
        element.append(deletebutton);
        list.append(element);

        deletebutton.addEventListener("click", () => {
            list.removeChild(element);
            favchap.focus();
        });

        favchap.value = ""; 
        favchap.focus();
    }
});
