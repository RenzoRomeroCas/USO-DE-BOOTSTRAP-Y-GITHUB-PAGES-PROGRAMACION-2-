// --- Limpia estilos previos para evitar mezcla de temas ---
function limpiarTemas() {
    // limpiar clases e inline styles del body
    document.body.className = "";
    document.body.style.background = "";
    document.body.style.color = "";

    // limpiar header para que re-apliquemos estilos controlados
    const header = document.querySelector('header');
    if (header) {
        header.className = "text-center py-4";
        header.style.background = "";
        header.style.color = "";
    }
    // opcional: limpiar badge
    // const badge = document.getElementById('usuarioBadge');
    // if (badge) badge.innerHTML = badge.innerHTML; // no borrar contenido del usuario
}

// 1️⃣ Registrar usuario y mostrar saludo (cumple la consigna del <input>)
function registrarUsuario() {
    const nombre = document.getElementById("nombreJugador").value.trim();
    const alias = document.getElementById("aliasJugador").value.trim();

    if (nombre && alias) {
        localStorage.setItem("nombreJugador", nombre);
        localStorage.setItem("aliasJugador", alias);

        // mensaje personal
        document.getElementById("mensajeBienvenida").innerHTML =
            `🎮 ¡Bienvenido, <strong>${nombre}</strong> (alias: <em>${alias}</em>) al mundo PapuGames!`;

        // badge pequeño en header
        const badge = document.getElementById("usuarioBadge");
        if (badge) badge.innerHTML = `<span class="badge bg-info text-dark">Jugador: ${alias}</span>`;
    } else {
        alert("Por favor, ingresa tu nombre y alias.");
    }
}

// 2️⃣ Cambiar tema visual, sin mezcla de estilos
function cambiarTema(tema) {
    limpiarTemas();
    const header = document.querySelector('header');

    if (tema === "light") {
        document.body.classList.add("bg-light", "text-dark");
        if (header) header.classList.add("bg-light", "text-dark");
    } else if (tema === "dark") {
        document.body.classList.add("bg-dark", "text-light");
        if (header) header.classList.add("bg-dark", "text-light");
    } else if (tema === "gamer") {
        document.body.style.background = "linear-gradient(90deg, #14002e, #32006e)";
        document.body.style.color = "#00ffea";
        if (header) {
            header.style.background = "linear-gradient(90deg,#2b0033,#4a007f)";
            header.style.color = "#00ffea";
        }
    }
}

// 3️⃣ Mostrar juego aleatorio con mini-presentación
function mostrarJuegoAleatorio() {
    const juegos = [
        { title: "Apex Legends", desc: "Battle royale con héroes que tienen habilidades únicas. Ritmo rápido y trabajo en equipo." },
        { title: "Call of Duty: Warzone", desc: "Shooter de guerra moderna con intensas partidas Battle Royale y modo Plunder." },
        { title: "Left 4 Dead 2", desc: "Cooperativo contra hordas de zombis; énfasis en trabajo en equipo y supervivencia." },
        { title: "The Witcher 3: Wild Hunt", desc: "RPG enorme con historia profunda, misiones secundarias memorables y combates épicos." },
        { title: "No Man's Sky", desc: "Exploración espacial infinita, crafting y construcción en planetas generados proceduralmente." },
        { title: "Clash Royale", desc: "Combina cartas coleccionables con defensa de torres; partidas cortas y competitivo." },
        { title: "Hollow Knight", desc: "Metroidvania desafiante con un mundo bellamente trabajado y combate ágil." }
    ];

    const index = Math.floor(Math.random() * juegos.length);
    const juego = juegos[index];

    const cont = document.getElementById("juegoSugerido");
    if (cont) {
        cont.innerHTML = `
            <div class="card bg-secondary text-white p-3 shadow-sm">
                <div class="card-body">
                    <h4 class="card-title">${juego.title}</h4>
                    <p class="card-text">${juego.desc}</p>
                    <p class="small text-white-50 mb-0">Sugerido para ti según el algoritmo aleatorio de PapuGames.</p>
                </div>
            </div>
        `;
    }
}

// 4️⃣ Mostrar la fecha y hora actual (botón en footer)
function mostrarFechaActual() {
    const ahora = new Date().toLocaleString();
    const el = document.getElementById("fechaActual");
    if (el) {
        el.textContent = "⏰ " + ahora;
        el.classList.add("fecha-fija"); // asegura que mantenga el color fijo
    }
}


// 5️⃣ Resetear la página (limpia localStorage y vistas; deja tema claro por defecto)
function resetearPagina() {
    localStorage.clear();
    // limpiar textos
    const ids = ["mensajeBienvenida", "juegoSugerido", "fechaActual", "usuarioBadge"];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });
    // limpiar inputs
    const ni = document.getElementById("nombreJugador");
    const ai = document.getElementById("aliasJugador");
    if (ni) ni.value = "";
    if (ai) ai.value = "";

    // reset tema a claro
    limpiarTemas();
    document.body.classList.add("bg-light", "text-dark");

    alert("Página restablecida correctamente ✅");
}

// Al cargar la página: mostrar usuario guardado (si existe)
window.onload = () => {
    const nombre = localStorage.getItem("nombreJugador");
    const alias = localStorage.getItem("aliasJugador");
    if (nombre && alias) {
        document.getElementById("mensajeBienvenida").innerHTML =
            `🎮 ¡Bienvenido de nuevo, <strong>${nombre}</strong> (alias: <em>${alias}</em>)!`;
        const badge = document.getElementById("usuarioBadge");
        if (badge) badge.innerHTML = `<span class="badge bg-info text-dark">Jugador: ${alias}</span>`;
    }
};
