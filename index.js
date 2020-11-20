const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');

app.set('port', process.env.PORT || 3001);

app.use(cors({origin: '*'}));
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));


app.use(express.json());


// Routes//
app.use('/api',routes);

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
  //holabudis
});