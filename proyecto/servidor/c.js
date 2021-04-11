var mysql = require('mysql')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { request, response } = require('express');
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "40499335aB",
    database: "practicainicial"
});

function getprueba() {
    var miQuery = "SELECT * FROM PRUEBA;"
    conexion.query(miQuery, function (err, result) {
        if (err) { console.log(err); } else {
            console.log(result);
            return result;
        }
    });
}

app.get('/prueba', (request, response) => {
    var miQuery = 'Select *from prueba;';
    conexion.query(miQuery, function (err, result) {
        if (err) { console.log(err); } else {
            //console.log(result);
            response.send(result);
        }
    });
})

app.post('/agregarUsuario', (request, response) => {
    var nombres = request.body.Nombres;
    var carne = request.body.carne;
    var apellidos = request.body.apellidos;
    var password = request.body.password;
    var correo = request.body.correo;
    console.log('el nombre es:');
    console.log(nombres);
    var miQuery = "INSERT INTO Usuario (carnet, nombres, apellidos,contraseña,correo) VALUES(" +
        carne + ", \'" + nombres + "\',\'" + apellidos +
        "\',\'" + password + "\'" + ",\'" + correo + "\');";

    console.log(miQuery);
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
            //console.log('se agrego el registro correctamente hora:11:57')

        }
    })
})



app.post('/agregarCursoAprobado', (request, response) => {
    var codigoCurso = request.body.codigocurso;
    var carnet = request.body.carnet; 
    var nota = request.body.nota;
    
    var miQuery = `INSERT INTO CURSOSAPROBADOS (CarnetU, CodigoCurso, NotaAprobada) 
        values (${carnet}, ${codigoCurso}, ${nota});
    `;

    console.log(miQuery);
    try{
        conexion.query(miQuery, function (err, result) {
            if (err) {
                response.send({mensaje: 'Este curso ya está marcado como aprobado.'})
                console.log(err);
                return; 
            } else {
                console.log(result);
                response.send({mensaje: 'Curso marcado como aprobado.'});
                //console.log('se agrego el registro correctamente hora:11:57')
    
            }
        })
    }catch(exception){
        console.log(exception);
    }
    
})

app.post('/guardarPublicacion', (request, response) => {
    var idPublicacion = request.body.idPublicacion;
    var mensaje = request.body.Mensaje;
    var usuarioCarne = request.body.Usuario_Carnet;
    var numCat = request.body.Catedratico_NoCatedratico;

    console.log('el nombre es:');
    var miQuery = "INSERT INTO publicacion (Mensaje, Usuario_carnet,Catedratico_NoCatedratico, Fecha) VALUES(\'" 
        + mensaje + "\', " + usuarioCarne +", " + numCat + ", CURDATE());";
    console.log(miQuery);
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
            //console.log('se agrego el registro correctamente hora:11:57')

        }
    })
})

app.post('/guardarComentario', (request, response) => {
    var idComentario = request.body.idComentario;
    var mensaje = request.body.Mensaje;
    var usuarioCarne = request.body.Usuario_Carnet;
    var numPubli = request.body.Publicacion_idPublicacion;

    console.log('el nombre es:');

    var miQuery = "INSERT INTO comentario (Mensaje, Publicacion_idPublicacion,Usuario_Carnet) VALUES(\""+mensaje+"\","+numPubli+","+usuarioCarne+");"

    console.log(miQuery);
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
            //console.log('se agrego el registro correctamente hora:11:57')

        }
    })
})


app.post('/validarCredenciales', (request, response) => {
    var carne = request.body.carne;
    var password = request.body.password;

    console.log("la contrasenia es: " + password + " y el user es: " + carne);
    var miQuery = "SELECT EXISTS(" +
        "select 1" + " FROM Usuario where carnet=" + carne + " and contraseña=" + "\'" + password + "\') as inicio;"

    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result[0].inicio);
            response.send(result[0]);
        }
    }
    );
})


app.post('/validarCorreo', (request, response) => {
    var carne = request.body.carne;
    var correo = request.body.correo;

    console.log("el user es: " + carne);
    var miQuery = "SELECT EXISTS(" +
        "select 1" + " FROM Usuario where carnet=" + carne + " and correo=" + "\'" + correo + "\') as inicio;"

    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {


            console.log(result[0].inicio);
            response.send(result[0]);
        }
    }
    );
})


app.post('/CambioPassword', (request, response) => {

    var carne = request.body.carne;
    var password = request.body.password;

    console.log("el user es: " + carne+"si!");
    var miQuery = "update Usuario set Contraseña=\'" + password + "\' where carnet=" + carne + ";"

    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            response.send('1');
        }
    }
    );
})

app.get('/obtenerUsuarios', (request, response) => {
    var miQuery = "SELECT * FROM Usuario;";
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})

app.get('/obtenerCursos', (request, response) => {
    var miQuery = "SELECT * FROM curso;";
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})



app.get('/obtenerComentarios/:idPublicacion', (request, response) => {
    var idPublicacion = request.params.idPublicacion;
    var miQuery = `SELECT c.idComentario, c.Mensaje, CONCAT(u.Nombres, ' ', u.Apellidos) as nombreUsuario 
                        from Comentario c inner join usuario u on c.usuario_carnet = u.carnet 
                        inner join publicacion p on c.Publicacion_idPublicacion = p.idPublicacion
                        where p.idPublicacion = ${idPublicacion}
                        order by c.idComentario asc;`
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})

app.get('/obtenerCatedraticosPorCurso/:idCurso', (request, response) => {
    var idCurso = request.params.idCurso;
    var miQuery = `select cc.catedratico_nocatedratico as idCatedratico, c.Nombres, c.Apellidos
        from curso_catedratico cc 
        inner join catedratico c on cc.catedratico_nocatedratico = c.NoCatedratico
        where cc.curso_codigocurso = ${idCurso};`
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})




app.get('/obtenerTodasLasPublicaciones', (request, response) => {
    console.log("holi");
    var idCatedratico = request.params.idCatedratico;
    var miQuery = `SELECT distinct p.idPublicacion, p.mensaje, CONCAT(c.nombres, ' ', c.apellidos) as catedratico, p.fecha,
	                u.carnet, CONCAT(u.nombres, ' ', u.apellidos) as estudiante FROM publicacion p 
                    inner join Catedratico c on c.NoCatedratico = p.Catedratico_NoCatedratico 
                    inner join usuario u on u.Carnet = p.Usuario_Carnet order by p.idPublicacion desc;`;
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})

app.get('/obtenerPublicaciones/:idCatedratico', (request, response) => {
    var idCatedratico = request.params.idCatedratico;
    var miQuery = `SELECT distinct p.idPublicacion, p.mensaje, CONCAT(c.nombres, ' ', c.apellidos) as catedratico, p.fecha,
	                u.carnet, CONCAT(u.nombres, ' ', u.apellidos) as estudiante FROM publicacion p 
                    inner join Catedratico c on c.NoCatedratico = p.Catedratico_NoCatedratico 
                    inner join usuario u on u.Carnet = p.Usuario_Carnet where c.NoCatedratico = ${idCatedratico};`;
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})



app.get('/obtenerPublicacionPorId/:idPublicacion', (request, response) => {
    var idPublicacion = request.params.idPublicacion;
    var miQuery = `SELECT distinct p.idPublicacion, p.mensaje, CONCAT(c.nombres, ' ', c.apellidos) as catedratico, p.fecha,
	                u.carnet, CONCAT(u.nombres, ' ', u.apellidos) as estudiante FROM publicacion p 
                    inner join Catedratico c on c.NoCatedratico = p.Catedratico_NoCatedratico 
                    inner join usuario u on u.Carnet = p.Usuario_Carnet where p.idPublicacion = ${idPublicacion};`;
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})






app.get('/obtenerPublicaciones', (request, response) => {
    var miQuery = `
    SELECT p.idPublicacion, p.mensaje, CONCAT(c.nombres, ' ', c.apellidos) as Catedratico,
        u.carnet, CONCAT(u.nombres, ' ', u.apellidos) as estudiante FROM publicacion p 
        inner join Catedratico c inner join usuario u;`;
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})


app.get('/obtenerUsuario/:carne', (request, response) => {
    console.log("si llega al backend")
    var carne = request.params.carne;
    console.log(carne)
    var miQuery = "SELECT * FROM usuario where carnet=" + carne + ";";
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})

app.get('/obtenerUnSoloCatedratico/:noCat', (request, response) => {
    console.log("si llega al backend")
    var noCat = request.params.noCat;
    //console.log(carne)
    var miQuery = "SELECT * FROM catedratico where NoCatedratico=" + noCat + ";";
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})

app.get('/obtenerCatedratico', (request, response) => {
    var miQuery = "SELECT * FROM Catedratico;";
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})

app.listen(4000, () => {

    console.log("backend inicializado, en el puerto 4000");
})


app.get('/obtenerCursosAprobados/:carnet', (request, response) => {
    var carnet = request.params.carnet;
    var miQuery = `select  ca.codigocurso, c.nombre, ca.notaaprobada 
        from cursosaprobados ca inner join curso c on ca.codigocurso = c.codigocurso
        where ca.carnetU = ${carnet}; `
    conexion.query(miQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })
})


