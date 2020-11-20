const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/diccionario', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM Diccionario ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nueva-imagen',(req,res)=>{

const {nombre,cod_image,imagen} = req.body;

  mysqlConnection.query(`INSERT INTO Diccionario(nombre,Cod_image,imagen) VALUES('${nombre}','${cod_image}','${imagen}')`, (err, results, fields) => {
    if (!err) {
      res.json({ message:`Imagen agregada`, })
    }
    else {
      console.log(err);
    }
  });
});  

router.put('/actor/:id', (req, res) => {
  const {nombres,apellidos,correo,documento,telefono_celular,
    fecha_nacimiento,institucion_id} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE actores SET nombres = ?,apellidos = ?,
  correo = ?,documento = ?,telefono_celular = ?,fecha_nacimiento = ?,
  institucion_id = ? WHERE id = ?`, 
  [nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,
    institucion_id,id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Estudiante actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/actor/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM actores WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Estudiante eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;