const User = require('../models/user');
module.exports = {
register(req, res) {
const user = req.body; //Datos del cliente
User.create(user, (err, data) => {
if (err) {
return res.status(501).json({
success: false,
message: 'Error al crear el usuario',
error: err
});
}
return res.status(201).json({
success: true,
message: 'Creado el usuario',
data: data //Id del usuario creado
});
});
}
};
