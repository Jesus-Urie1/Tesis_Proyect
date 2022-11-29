import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, nombre, numCuenta, password } = datos;

  //Enviar el email
  const info = await transporter.sendMail({
    from: "Universidad de Colima",
    to: email,
    subject: "Datos de cuenta",
    text: "Cuenta creada correctamente",
    html: `<p> Hola: ${nombre}, estos son los datos de tu cuenta.</p>
           <p> Tu cuenta ya esta lista:</p>
           <p> Usuario: <b>${numCuenta}</b></p>
           <p> Contraseña: <b>${password}</b></p>
           <p><i>Esta contraseña es temporal<i></b></p>

           <p>Si no reconoces esta institucion, ignora este correo</p>
    `,
  });

  console.log("Mensaje enviado: %s", info.messageId);
};

export default emailRegistro;
