fetch("https://api.escuelajs.co/api/v1/users")
    .then(Response => Response.json())
    .then(data =>{
        let tabla = "  <tr><th>Correo Electrónico</th><th>Contraseña</th><th>Nombre</th><th>Avatar</th></tr>"

        for (let usuario of data){
            tabla += `<tr><td>${usuario.email}</td>
                        <td>${usuario.password}</td>
                        <td>${usuario.name}</td>
                        <td><a href="${usuario.avatar}" target="_blank">${usuario.avatar}></a></td></tr>`
        }
        document.getElementById("tblUsers").innerHTML = tabla
    })