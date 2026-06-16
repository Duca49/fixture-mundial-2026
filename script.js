const fixtureData = [
    { id: 1, fecha: "11 Jun 2026", hora: "13:00", grupo: "Grupo A", equipo1: "México", equipo2: "Sudáfrica", estadio: "Estadio Azteca", jugado: true, res1: 2, res2: 1 },
    { id: 2, fecha: "11 Jun 2026", hora: "20:00", grupo: "Grupo A", equipo1: "Corea del Sur", equipo2: "Rep. Checa", estadio: "Estadio Akron", jugado: true, res1: 0, res2: 1 },
    { id: 3, fecha: "12 Jun 2026", hora: "15:00", grupo: "Grupo B", equipo1: "Canadá", equipo2: "Bosnia y Herz.", estadio: "BMO Field", jugado: true, res1: 1, res2: 1 },
    { id: 4, fecha: "12 Jun 2026", hora: "18:00", grupo: "Grupo D", equipo1: "Estados Unidos", equipo2: "Paraguay", estadio: "SoFi Stadium", jugado: true, res1: 2, res2: 0 },
    { id: 5, fecha: "13 Jun 2026", hora: "15:00", grupo: "Grupo B", equipo1: "Qatar", equipo2: "Suiza", estadio: "Levi's Stadium", jugado: true, res1: 0, res2: 2 },
    { id: 6, fecha: "13 Jun 2026", hora: "18:00", grupo: "Grupo C", equipo1: "Brasil", equipo2: "Marruecos", estadio: "MetLife Stadium", jugado: true, res1: 3, res2: 0 },
    { id: 7, fecha: "13 Jun 2026", hora: "21:00", grupo: "Grupo C", equipo1: "Haití", equipo2: "Escocia", estadio: "Gillette Stadium", jugado: true, res1: 1, res2: 2 },
    { id: 8, fecha: "14 Jun 2026", hora: "00:00", grupo: "Grupo D", equipo1: "Australia", equipo2: "Turquía", estadio: "BC Place", jugado: true, res1: 1, res2: 1 },
    { id: 9, fecha: "14 Jun 2026", hora: "13:00", grupo: "Grupo E", equipo1: "Alemania", equipo2: "Curazao", estadio: "NRG Stadium", jugado: true, res1: 7, res2: 1 },
    { id: 10, fecha: "14 Jun 2026", hora: "16:00", grupo: "Grupo F", equipo1: "Países Bajos", equipo2: "Japón", estadio: "AT&T Stadium", jugado: true, res1: 2, res2: 2 },
    { id: 11, fecha: "14 Jun 2026", hora: "19:00", grupo: "Grupo E", equipo1: "Costa de Marfil", equipo2: "Ecuador", estadio: "Lincoln Financial Field", jugado: true, res1: 1, res2: 0 },
    { id: 12, fecha: "14 Jun 2026", hora: "22:00", grupo: "Grupo F", equipo1: "Suecia", equipo2: "Túnez", estadio: "Estadio BBVA", jugado: true, res1: 5, res2: 1 },
    { id: 13, fecha: "15 Jun 2026", hora: "12:00", grupo: "Grupo H", equipo1: "España", equipo2: "Cabo Verde", estadio: "Mercedes-Benz Stadium", jugado: true, res1: 0, res2: 0 },
    { id: 14, fecha: "15 Jun 2026", hora: "15:00", grupo: "Grupo G", equipo1: "Bélgica", equipo2: "Egipto", estadio: "Lumen Field", jugado: true, res1: 1, res2: 1 },
    { id: 15, fecha: "15 Jun 2026", hora: "18:00", grupo: "Grupo H", equipo1: "Arabia Saudita", equipo2: "Uruguay", estadio: "Hard Rock Stadium", jugado: true, res1: 1, res2: 1 },
    { id: 16, fecha: "15 Jun 2026", hora: "21:00", grupo: "Grupo G", equipo1: "Irán", equipo2: "Nueva Zelanda", estadio: "SoFi Stadium", jugado: true, res1: 2, res2: 2 },

    { id: 17, fecha: "16 Jun 2026", hora: "15:00", grupo: "Grupo I", equipo1: "Francia", equipo2: "Senegal", estadio: "MetLife Stadium", jugado: false },
    { id: 18, fecha: "16 Jun 2026", hora: "18:00", grupo: "Grupo I", equipo1: "Irak", equipo2: "Noruega", estadio: "Gillette Stadium", jugado: false },
    { id: 19, fecha: "16 Jun 2026", hora: "21:00", grupo: "Grupo J", equipo1: "Argentina", equipo2: "Argelia", estadio: "Arrowhead Stadium", jugado: false },
    { id: 20, fecha: "17 Jun 2026", hora: "00:00", grupo: "Grupo J", equipo1: "Austria", equipo2: "Jordania", estadio: "Levi's Stadium", jugado: false },
    { id: 21, fecha: "17 Jun 2026", hora: "13:00", grupo: "Grupo K", equipo1: "Portugal", equipo2: "RD Congo", estadio: "NRG Stadium", jugado: false },
    { id: 22, fecha: "17 Jun 2026", hora: "16:00", grupo: "Grupo L", equipo1: "Inglaterra", equipo2: "Croacia", estadio: "AT&T Stadium", jugado: false },
    { id: 23, fecha: "17 Jun 2026", hora: "19:00", grupo: "Grupo L", equipo1: "Ghana", equipo2: "Panamá", estadio: "BMO Field", jugado: false },
    { id: 24, fecha: "17 Jun 2026", hora: "22:00", grupo: "Grupo K", equipo1: "Uzbekistán", equipo2: "Colombia", estadio: "Estadio Azteca", jugado: false },

    { id: 25, fecha: "18 Jun 2026", hora: "13:00", grupo: "Grupo A", equipo1: "Rep. Checa", equipo2: "Sudáfrica", estadio: "Mercedes-Benz Stadium", jugado: false },
    { id: 26, fecha: "18 Jun 2026", hora: "16:00", grupo: "Grupo B", equipo1: "Suiza", equipo2: "Bosnia y Herz.", estadio: "SoFi Stadium", jugado: false },
    { id: 27, fecha: "18 Jun 2026", hora: "19:00", grupo: "Grupo B", equipo1: "Canadá", equipo2: "Qatar", estadio: "BC Place", jugado: false },
    { id: 28, fecha: "18 Jun 2026", hora: "22:00", grupo: "Grupo A", equipo1: "México", equipo2: "Corea del Sur", estadio: "Estadio Akron", jugado: false },
    { id: 29, fecha: "19 Jun 2026", hora: "15:00", grupo: "Grupo D", equipo1: "Estados Unidos", equipo2: "Australia", estadio: "Lumen Field", jugado: false },
    { id: 30, fecha: "19 Jun 2026", hora: "18:00", grupo: "Grupo C", equipo1: "Escocia", equipo2: "Marruecos", estadio: "Gillette Stadium", jugado: false },
    { id: 31, fecha: "19 Jun 2026", hora: "21:00", grupo: "Grupo C", equipo1: "Brasil", equipo2: "Haití", estadio: "Lincoln Financial Field", jugado: false },
    { id: 32, fecha: "20 Jun 2026", hora: "00:00", grupo: "Grupo D", equipo1: "Turquía", equipo2: "Paraguay", estadio: "Levi's Stadium", jugado: false },
    { id: 33, fecha: "20 Jun 2026", hora: "13:00", grupo: "Grupo F", equipo1: "Países Bajos", equipo2: "Suecia", estadio: "AT&T Stadium", jugado: false },
    { id: 34, fecha: "20 Jun 2026", hora: "16:00", grupo: "Grupo E", equipo1: "Alemania", equipo2: "Costa de Marfil", estadio: "NRG Stadium", jugado: false },
    { id: 35, fecha: "20 Jun 2026", hora: "19:00", grupo: "Grupo E", equipo1: "Ecuador", equipo2: "Curazao", estadio: "Estadio BBVA", jugado: false },
    { id: 36, fecha: "20 Jun 2026", hora: "22:00", grupo: "Grupo F", equipo1: "Túnez", equipo2: "Japón", estadio: "BMO Field", jugado: false },
    { id: 37, fecha: "21 Jun 2026", hora: "13:00", grupo: "Grupo H", equipo1: "España", equipo2: "Arabia Saudita", estadio: "Mercedes-Benz Stadium", jugado: false },
    { id: 38, fecha: "21 Jun 2026", hora: "16:00", grupo: "Grupo G", equipo1: "Bélgica", equipo2: "Irán", estadio: "SoFi Stadium", jugado: false },
    { id: 39, fecha: "21 Jun 2026", hora: "19:00", grupo: "Grupo H", equipo1: "Uruguay", equipo2: "Cabo Verde", estadio: "Hard Rock Stadium", jugado: false },
    { id: 40, fecha: "21 Jun 2026", hora: "22:00", grupo: "Grupo G", equipo1: "Nueva Zelanda", equipo2: "Egipto", estadio: "BC Place", jugado: false },
    { id: 41, fecha: "22 Jun 2026", hora: "14:00", grupo: "Grupo J", equipo1: "Argentina", equipo2: "Austria", estadio: "AT&T Stadium", jugado: false },
    { id: 42, fecha: "22 Jun 2026", hora: "17:00", grupo: "Grupo I", equipo1: "Francia", equipo2: "Irak", estadio: "Lincoln Financial Field", jugado: false },
    { id: 43, fecha: "22 Jun 2026", hora: "20:00", grupo: "Grupo I", equipo1: "Noruega", equipo2: "Senegal", estadio: "MetLife Stadium", jugado: false },
    { id: 44, fecha: "22 Jun 2026", hora: "23:00", grupo: "Grupo J", equipo1: "Jordania", equipo2: "Argelia", estadio: "Levi's Stadium", jugado: false },
    { id: 45, fecha: "23 Jun 2026", hora: "14:00", grupo: "Grupo K", equipo1: "Portugal", equipo2: "Uzbekistán", estadio: "NRG Stadium", jugado: false },
    { id: 46, fecha: "23 Jun 2026", hora: "17:00", grupo: "Grupo L", equipo1: "Inglaterra", equipo2: "Ghana", estadio: "Gillette Stadium", jugado: false },
    { id: 47, fecha: "23 Jun 2026", hora: "20:00", grupo: "Grupo L", equipo1: "Panamá", equipo2: "Croacia", estadio: "BMO Field", jugado: false },
    { id: 48, fecha: "23 Jun 2026", hora: "23:00", grupo: "Grupo K", equipo1: "Colombia", equipo2: "RD Congo", estadio: "Estadio Akron", jugado: false },

    { id: 49, fecha: "24 Jun 2026", hora: "13:00", grupo: "Grupo B", equipo1: "Suiza", equipo2: "Canadá", estadio: "Estadio por definir", jugado: false },
    { id: 50, fecha: "24 Jun 2026", hora: "13:00", grupo: "Grupo B", equipo1: "Bosnia y Herz.", equipo2: "Qatar", estadio: "Estadio por definir", jugado: false },
    { id: 51, fecha: "24 Jun 2026", hora: "16:00", grupo: "Grupo C", equipo1: "Marruecos", equipo2: "Haití", estadio: "Estadio por definir", jugado: false },
    { id: 52, fecha: "24 Jun 2026", hora: "16:00", grupo: "Grupo C", equipo1: "Escocia", equipo2: "Brasil", estadio: "Estadio por definir", jugado: false },
    { id: 53, fecha: "24 Jun 2026", hora: "19:00", grupo: "Grupo A", equipo1: "Sudáfrica", equipo2: "Corea del Sur", estadio: "Estadio por definir", jugado: false },
    { id: 54, fecha: "24 Jun 2026", hora: "19:00", grupo: "Grupo A", equipo1: "Rep. Checa", equipo2: "México", estadio: "Estadio por definir", jugado: false },
    { id: 55, fecha: "25 Jun 2026", hora: "13:00", grupo: "Grupo E", equipo1: "Curazao", equipo2: "Costa de Marfil", estadio: "Estadio por definir", jugado: false },
    { id: 56, fecha: "25 Jun 2026", hora: "13:00", grupo: "Grupo E", equipo1: "Ecuador", equipo2: "Alemania", estadio: "Estadio por definir", jugado: false },
    { id: 57, fecha: "25 Jun 2026", hora: "16:00", grupo: "Grupo F", equipo1: "Túnez", equipo2: "Países Bajos", estadio: "Estadio por definir", jugado: false },
    { id: 58, fecha: "25 Jun 2026", hora: "16:00", grupo: "Grupo F", equipo1: "Japón", equipo2: "Suecia", estadio: "Estadio por definir", jugado: false },
    { id: 59, fecha: "25 Jun 2026", hora: "19:00", grupo: "Grupo D", equipo1: "Turquía", equipo2: "Estados Unidos", estadio: "Estadio por definir", jugado: false },
    { id: 60, fecha: "25 Jun 2026", hora: "19:00", grupo: "Grupo D", equipo1: "Paraguay", equipo2: "Australia", estadio: "Estadio por definir", jugado: false },
    { id: 61, fecha: "26 Jun 2026", hora: "13:00", grupo: "Grupo I", equipo1: "Noruega", equipo2: "Francia", estadio: "Estadio por definir", jugado: false },
    { id: 62, fecha: "26 Jun 2026", hora: "13:00", grupo: "Grupo I", equipo1: "Senegal", equipo2: "Irak", estadio: "Estadio por definir", jugado: false },
    { id: 63, fecha: "26 Jun 2026", hora: "16:00", grupo: "Grupo H", equipo1: "Cabo Verde", equipo2: "Arabia Saudita", estadio: "Estadio por definir", jugado: false },
    { id: 64, fecha: "26 Jun 2026", hora: "16:00", grupo: "Grupo H", equipo1: "Uruguay", equipo2: "España", estadio: "Estadio por definir", jugado: false },
    { id: 65, fecha: "26 Jun 2026", hora: "19:00", grupo: "Grupo G", equipo1: "Nueva Zelanda", equipo2: "Bélgica", estadio: "Estadio por definir", jugado: false },
    { id: 66, fecha: "26 Jun 2026", hora: "19:00", grupo: "Grupo G", equipo1: "Egipto", equipo2: "Irán", estadio: "Estadio por definir", jugado: false },
    { id: 67, fecha: "27 Jun 2026", hora: "13:00", grupo: "Grupo L", equipo1: "Panamá", equipo2: "Inglaterra", estadio: "Estadio por definir", jugado: false },
    { id: 68, fecha: "27 Jun 2026", hora: "13:00", grupo: "Grupo L", equipo1: "Croacia", equipo2: "Ghana", estadio: "Estadio por definir", jugado: false },
    { id: 69, fecha: "27 Jun 2026", hora: "16:00", grupo: "Grupo K", equipo1: "Colombia", equipo2: "Portugal", estadio: "Estadio por definir", jugado: false },
    { id: 70, fecha: "27 Jun 2026", hora: "16:00", grupo: "Grupo K", equipo1: "RD Congo", equipo2: "Uzbekistán", estadio: "Estadio por definir", jugado: false },
    { id: 71, fecha: "27 Jun 2026", hora: "19:00", grupo: "Grupo J", equipo1: "Argelia", equipo2: "Austria", estadio: "Estadio por definir", jugado: false },
    { id: 72, fecha: "27 Jun 2026", hora: "19:00", grupo: "Grupo J", equipo1: "Jordania", equipo2: "Argentina", estadio: "Estadio por definir", jugado: false },

    ...Array.from({length: 16}, (_, i) => ({
        id: 73 + i, fecha: "28 Jun - 03 Jul 2026", hora: "TBD", grupo: "16vos de Final", equipo1: `Clasificado ${i+1}`, equipo2: `Clasificado ${32-i}`, estadio: "Sede por definir", jugado: false, eliminatoria: true
    })),

    ...Array.from({length: 8}, (_, i) => ({
        id: 89 + i, fecha: "04 - 07 Jul 2026", hora: "TBD", grupo: "Octavos de Final", equipo1: `Ganador 16vo ${i+1}`, equipo2: `Ganador 16vo ${16-i}`, estadio: "Sede por definir", jugado: false, eliminatoria: true
    })),

    ...Array.from({length: 4}, (_, i) => ({
        id: 97 + i, fecha: "09 - 11 Jul 2026", hora: "TBD", grupo: "Cuartos de Final", equipo1: `Ganador 8vo ${i+1}`, equipo2: `Ganador 8vo ${8-i}`, estadio: "Sede por definir", jugado: false, eliminatoria: true
    })),

    { id: 101, fecha: "14 Jul 2026", hora: "TBD", grupo: "Semifinal 1", equipo1: "Ganador Cuartos 1", equipo2: "Ganador Cuartos 2", estadio: "Sede por definir", jugado: false, eliminatoria: true },
    { id: 102, fecha: "15 Jul 2026", hora: "TBD", grupo: "Semifinal 2", equipo1: "Ganador Cuartos 3", equipo2: "Ganador Cuartos 4", estadio: "Sede por definir", jugado: false, eliminatoria: true },

    { id: 103, fecha: "18 Jul 2026", hora: "TBD", grupo: "Tercer Puesto", equipo1: "Perdedor Semi 1", equipo2: "Perdedor Semi 2", estadio: "Sede por definir", jugado: false, eliminatoria: true },

    { id: 104, fecha: "19 Jul 2026", hora: "TBD", grupo: "Final", equipo1: "Ganador Semi 1", equipo2: "Ganador Semi 2", estadio: "Sede por definir", jugado: false, eliminatoria: true }
];

function renderApp() {
    renderFixture();
    renderStandings();
}

function renderFixture() {
    const container = document.getElementById("fixture-container");
    
    const cardsHTML = fixtureData.map(partido => {
        let marcadorVisual = "";
        let botonRegistrar = "";

        if (partido.jugado) {
            marcadorVisual = `<div class="score-badge">${partido.res1} - ${partido.res2}</div>`;
        } else {
            marcadorVisual = `<div class="vs-badge">VS</div>`;
            botonRegistrar = `<button class="btn-registrar" onclick="registrarResultado(${partido.id})">Registrar Resultado</button>`;
        }

        const claseEliminatoria = partido.eliminatoria ? 'knockout' : '';

        return `
            <article class="match-card ${claseEliminatoria}">
                <div class="match-header">${partido.grupo}</div>
                <div class="match-body">
                    <div class="teams">
                        <div class="team">${partido.equipo1}</div>
                        ${marcadorVisual}
                        <div class="team">${partido.equipo2}</div>
                    </div>
                    <div class="match-details">
                        <p>📅 <strong>${partido.fecha}</strong></p>
                        <p>⏰ ${partido.hora}</p>
                        <p>🏟️ ${partido.estadio}</p>
                    </div>
                    ${botonRegistrar}
                </div>
            </article>
        `;
    }).join('');

    container.innerHTML = cardsHTML;
}

window.registrarResultado = function(id) {
    const partido = fixtureData.find(p => p.id === id);
    if (!partido) return;

    const golesEq1 = prompt(`Ingrese los goles de ${partido.equipo1}:`);
    if (golesEq1 === null) return; 
    
    const golesEq2 = prompt(`Ingrese los goles de ${partido.equipo2}:`);
    if (golesEq2 === null) return; 

    const parse1 = parseInt(golesEq1);
    const parse2 = parseInt(golesEq2);

    if (!isNaN(parse1) && !isNaN(parse2)) {
        partido.res1 = parse1;
        partido.res2 = parse2;
        partido.jugado = true;
        
        renderApp();
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}

function renderStandings() {
    const container = document.getElementById("standings-container");
    const posiciones = {};

    fixtureData.forEach(p => {
        if (!p.eliminatoria) {
            if (!posiciones[p.grupo]) posiciones[p.grupo] = {};
            
            if (!posiciones[p.grupo][p.equipo1]) posiciones[p.grupo][p.equipo1] = { pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 };
            if (!posiciones[p.grupo][p.equipo2]) posiciones[p.grupo][p.equipo2] = { pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 };
        }
    });

    fixtureData.forEach(p => {
        if (!p.eliminatoria && p.jugado) {
            const eq1 = posiciones[p.grupo][p.equipo1];
            const eq2 = posiciones[p.grupo][p.equipo2];

            eq1.pj++; eq2.pj++;
            eq1.gf += p.res1; eq2.gf += p.res2;
            eq1.gc += p.res2; eq2.gc += p.res1;
            eq1.dg = eq1.gf - eq1.gc;
            eq2.dg = eq2.gf - eq2.gc;

            if (p.res1 > p.res2) {
                eq1.pg++; eq1.pts += 3;
                eq2.pp++;
            } else if (p.res1 < p.res2) {
                eq2.pg++; eq2.pts += 3;
                eq1.pp++;
            } else {
                eq1.pe++; eq2.pe++;
                eq1.pts += 1; eq2.pts += 1;
            }
        }
    });


    let tablasHTML = "";

    const gruposOrdenados = Object.keys(posiciones).sort();

    gruposOrdenados.forEach(grupo => {
        const equipos = Object.keys(posiciones[grupo]).map(nombre => {
            return { nombre, ...posiciones[grupo][nombre] };
        });

        equipos.sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            if (b.dg !== a.dg) return b.dg - a.dg;     
            return b.gf - a.gf;                        
        });

        const filas = equipos.map(eq => `
            <tr>
                <td class="team-name">${eq.nombre}</td>
                <td><strong>${eq.pts}</strong></td>
                <td>${eq.pj}</td>
                <td>${eq.pg}</td>
                <td>${eq.pe}</td>
                <td>${eq.pp}</td>
                <td>${eq.dg}</td>
            </tr>
        `).join('');

        tablasHTML += `
            <div class="group-table-card">
                <h3>${grupo}</h3>
                <table>
                    <thead>
                        <tr>
                            <th style="text-align: left;">Equipo</th>
                            <th>Pts</th>
                            <th>PJ</th>
                            <th>G</th>
                            <th>E</th>
                            <th>P</th>
                            <th>DG</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filas}
                    </tbody>
                </table>
            </div>
        `;
    });

    container.innerHTML = tablasHTML;
}

document.addEventListener("DOMContentLoaded", renderApp);