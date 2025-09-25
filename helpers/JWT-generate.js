import jwt from 'jsonwebtoken'

export const generarJWT = (uid = '', email = '') => {
    return new Promise((revolve, reject) => {
        jwt.sign(
            payload,
            process.env.TOKEN_KEY,
            {
                expiresIn: '8h',
            },
            (err, token) => {
                if (err) {
                    console.error(err);
                    reject('Error al generar el token: ' + err.message);
                } else {
                    resolve(token);
                }
            }
        );
    });
};