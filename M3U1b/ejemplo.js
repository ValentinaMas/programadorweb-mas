const moment = require('moment');
moment.locale('es')

console.log('Nací ' + moment('12/04/1997','DD/MM/YYYY').fromNow())