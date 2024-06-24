// main.js
async function includeHTML() {
    let elements = document.querySelectorAll('[data-include]');
    for (let el of elements) {
        let file = el.getAttribute('data-include');
        try {
            let response = await fetch(file);
            if (response.ok) {
                el.innerHTML = await response.text();
            } else {
                el.innerHTML = "Error al cargar " + file;
            }
        } catch (e) {
            el.innerHTML = "Error al cargar " + file;
        }
    }
}

includeHTML();