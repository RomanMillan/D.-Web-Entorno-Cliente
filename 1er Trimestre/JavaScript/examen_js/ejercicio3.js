let provincias = ["Sevilla", "Cadiz", "Huelva", "Malaga", "Granada", "Almeria", "Jaen", "Cordoba"];

let tablaMostrar = document.getElementById("tabla");

function mostrarLista(){
    provincias.sort();

    let mTabla=`<table>
        <tr>
            <td>
                ${provincias[0]}
            </td>
        </tr>
        <tr>
            <td>
            ${provincias[1]}
            </td>
        </tr>
        <tr>
            <td>
            ${provincias[2]}
            </td>
        </tr>
        <tr>
            <td>
            ${provincias[3]}
            </td>
        </tr>
        <tr>
            <td>
            ${provincias[4]}
            </td>
        </tr>
        <tr>
            <td>
            ${provincias[5]}
            </td>
        </tr>
        <tr>
            <td>
            ${provincias[6]}
            </td>
        </tr>
        <tr>
            <td>
            ${provincias[7]}
            </td>
        </tr>
    </table>`;
    tablaMostrar.innerHTML=mTabla;
}

