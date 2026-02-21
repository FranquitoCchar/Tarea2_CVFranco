const select = document.getElementById("infoSelect");
const contenido = document.getElementById("contenido");

select.addEventListener("change", function () {

    let valor = this.value;
    contenido.classList.remove("hidden");

    if (valor === "cualidades") {
        contenido.innerHTML = `
        <p>
        Soy una persona sociable, orientada al trabajo en equipo y con interés
        en el crecimiento profesional continuo en el área de desarrollo web.
        </p>`;
    }

    else if (valor === "tecnicas") {
        contenido.innerHTML = `
        <p>
        Manejo C#, ASP.NET, SQL Server, MySQL, Python, HTML, CSS y JavaScript.
        </p>`;
    }

    else if (valor === "blandas") {
        contenido.innerHTML = `
        <p>
        Comunicación efectiva, trabajo en equipo, adaptabilidad
        y actitud profesional en entornos laborales.
        </p>`;
    }

    else {
        contenido.classList.add("hidden");
        contenido.innerHTML = "";
    }

});