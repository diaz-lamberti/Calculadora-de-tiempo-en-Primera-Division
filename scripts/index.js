document.addEventListener("DOMContentLoaded", function() {
    const equipoSelect = document.getElementById("equipoSelect");
    const resultadoDiv = document.getElementById("resultadoDiv");
    const resultados = {
        ages: document.getElementById("ages"),
        months: document.getElementById("months"),
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds"),
    };

    const equipos = {
        "-": null,
        "Argentinos Juniors": "2017-09-08",
        "Arsenal": "2019-06-29",
        "Atletico Tucuman": "2016-01-07",
        "Banfield": "2014-07-08",
        "Barracas": "2022-05-03",
        "Belgrano": "2023-01-29",
        "Boca Juniors": "1913-03-13",
        "Central Cordoba (SdE)": "2019-06-28",
        "Colon": "2015-01-14",
        "Defensa y Justicia": "2014-07-09",
        "Estudiantes (LP)": "1995-07-23",
        "Gimnasia (LP)": "2013-07-04",
        "Godoy Cruz": "2008-07-09",
        "Huracan": "2015-03-15",
        "Independiente": "2014-07-10",
        "Instituto": "2023-01-29",
        "Lanus": "1993-08-12",
        "Newells": "1964-03-26",
        "Platense": "2021-06-17",
        "Racing": "1985-05-13",
        "River Plate": "2012-07-05",
        "Rosario Central": "2013-07-04",
        "San Lorenzo": "1983-05-12",
        "Sarmiento (J)": "2021-06-16",
        "Talleres (C)": "2016-07-27",
        "Tigre": "2022-03-15",
        "Union": "2015-03-15",
        "Velez": "1944-03-16",
    };

    let fechaAscenso = null;

    function actualizarTiempoEnPrimera() {
        if (!fechaAscenso) {
            resultadoDiv.style.display = "none";
            return;
        }

        const fechaActual = new Date();
        const tiempoEnPrimera = fechaActual - new Date(fechaAscenso);
        const segundos = Math.floor(tiempoEnPrimera / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);
        const meses = Math.floor(dias / 30.4375);
        const anios = Math.floor(meses / 12);

        resultados.ages.textContent = anios;
        resultados.months.textContent = meses % 12;
        resultados.days.textContent = dias % 30;
        resultados.hours.textContent = horas % 24;
        resultados.minutes.textContent = minutos % 60;
        resultados.seconds.textContent = segundos % 60;
        resultadoDiv.style.display = "flex";
        resultadoDiv.style.justifyContent = "center";
    }

    equipoSelect.addEventListener("change", function() {
        const equipoSeleccionado = equipoSelect.value;
        fechaAscenso = equipos[equipoSeleccionado];
        actualizarTiempoEnPrimera();
    });

    setInterval(actualizarTiempoEnPrimera, 1000);
});