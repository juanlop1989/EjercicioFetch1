fetch("https://api.escuelajs.co/api/v1/users")
    .then(Response => Response.json())
    .then(data =>{

        data.sort((a, b) => a.name.localeCompare(b.name));

        let tabla = "<tr><th>Correo Electrónico</th><th>Contraseña</th><th>Nombre</th><th>Avatar</th></tr>"
        let item = 1

        for (let usuario of data){
            tabla += `<tr><td>${usuario.email}</td>
                        <td><input type="password" value="${usuario.password}" readonly style="background: none; border: none; outline: none; color: inherit;"></td>
                        <td>${usuario.name}</td>
                        <td><img src="${usuario.avatar}" alt="Avatar" width="80"></td></tr>`
        }
        document.getElementById("tblUsers").innerHTML = tabla
    })