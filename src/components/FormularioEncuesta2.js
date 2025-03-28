import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, Typography, Box, Container } from '@mui/material';
import ComponenteEstrellas from './ComponenteEstrellas'; // Asegúrate que este componente exista y funcione como esperas

// ASUME que las imágenes están en las rutas correctas respecto a este archivo
import backgroundImage from '../assets/Sotraser_3.jpg';
import logoSotraser from '../assets/Logo-blanco.png';
// import { useNavigate } from 'react-router-dom'; // Descomenta si necesitas navegar después del submit

function FormularioEncuesta2() {
    // const navigate = useNavigate(); // Descomenta si necesitas navegar
    const { handleSubmit, control } = useForm({
        // Define los valores por defecto para todos los campos del formulario
        defaultValues: {
            calidad_general: 5,
            puntualidad: 5,
            comunicacion: 5,
            atencion_comercial: 5,
            precio_calidad: 5,
            trazabilidad_carga: 5,
            condiciones_camiones: 5,
            profesionalismo_conductores: 5,
            protocolos_seguridad: 5,
            respuesta_incidentes: 5,
            proteccion_carga: 5,
            mejoras: '',
            recomendacion: 5,
            comentarios: ''
        }
    });

    // Función que se ejecuta al enviar el formulario
    const onSubmit = data => {
        console.log("Datos del formulario:", data);
        // AQUÍ: Agrega tu lógica para enviar los datos a tu backend o API
        // Ejemplo: fetch('/api/encuesta', { method: 'POST', body: JSON.stringify(data) ... });
        // Después del envío exitoso, puedes navegar a otra página si lo deseas:
        // navigate('/gracias'); // Asegúrate de importar useNavigate y descomentar las líneas relacionadas
    };

    // Define los breakpoints para los tamaños de fuente responsivos
    const responsiveFontSize = {
        xs: '0.8rem', // Móviles pequeños
        sm: '0.9rem', // Móviles grandes/tablets pequeñas
        md: '1.1rem', // Tablets grandes/desktops pequeños
        lg: '1.3rem', // Desktops grandes
        xl: '1.3rem', // Desktops muy grandes (ajusta si es necesario)
    };

    const responsiveTitleSize = {
        xs: '1.8rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3rem',
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Centra la imagen de fondo
                position: 'relative',
                display: 'flex',
                minHeight: '100vh', // Asegura que el contenedor ocupe al menos toda la altura de la pantalla
                py: 4, // Añade padding vertical para espaciar en pantallas pequeñas
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(4, 39, 73, 0.7)', // Overlay oscuro semi-transparente
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={logoSotraser} alt="Logo de Sotraser" style={{ width: '100%', marginTop:'50px', marginBottom:'30px' }} /> {/* Ajusta el tamaño si es necesario */}

                {/* Título Principal */}
                <Typography variant="h3" align="center" color="white" gutterBottom sx={{ fontSize: responsiveTitleSize, fontWeight: 'bold' }}>
                    Encuesta de Satisfacción del Cliente
                </Typography>

                {/* Subtítulo */}
                <Typography variant="h5" align="center" color="white" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem'}, mb: 1 }}>
                    ¡Tu opinión es muy importante para nosotros!
                </Typography>

                {/* Instrucciones Estrellas */}
                <Typography variant="body1" align="center" color="white" sx={{ mb: 4, fontSize: { xs: '0.8rem', md: '1rem'}, pl: { xs: 0, md: 20 }, pr: { xs: 0, md: 20 }}}>
                    (Selecciona la cantidad de estrellas que representa tu nivel de satisfacción: ⭐ = Muy deficiente / ⭐⭐⭐⭐⭐ = Excelente)
                </Typography>

                {/* Contenedor del Formulario */}
                <Container sx={{
                    backgroundColor: 'rgba(18, 78, 131, 0.4)', // Fondo semi-transparente del formulario
                    padding: { xs: 2, md: 4 }, // Padding responsivo
                    borderRadius: 2, // Borde redondeado (8px)
                    marginBottom: 4, // Espacio abajo
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.66)',
                }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}> {/* Aumenta un poco el espaciado si es necesario */}

                            {/* --- Pregunta 1 --- */}
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 1 }}>
                                    1. ¿Cómo calificaría la calidad general del servicio de transporte de carga que le hemos proporcionado?
                                </Typography>
                                <Controller
                                    name="calidad_general" // Nombre del campo actualizado si es necesario
                                    control={control}
                                    render={({ field }) => <ComponenteEstrellas field={field} />}
                                />
                            </Grid>

                            {/* --- Pregunta 2 --- */}
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 2, fontWeight: 'medium' }}>
                                    2. Puntúe los siguientes aspectos de nuestro servicio:
                                </Typography>
                                <Grid container spacing={1.5} sx={{ pl: { xs: 0, md: 4 }}}> {/* Indentación leve en pantallas medianas o más */}
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Puntualidad en las entregas:</Typography>
                                        <Controller name="puntualidad" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Comunicación y seguimiento:</Typography>
                                        <Controller name="comunicacion" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Atención del equipo comercial:</Typography>
                                        <Controller name="atencion_comercial" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Relación precio/calidad:</Typography>
                                        <Controller name="precio_calidad" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                     <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Información y trazabilidad de la carga:</Typography>
                                        <Controller name="trazabilidad_carga" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* --- Pregunta 3 --- */}
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 2, fontWeight: 'medium' }}>
                                    3. Evaluación de nuestra operación y seguridad:
                                </Typography>
                                <Grid container spacing={1.5} sx={{ pl: { xs: 0, md: 4 }}}>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Condiciones de los camiones y equipos:</Typography>
                                        <Controller name="condiciones_camiones" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Profesionalismo de los conductores:</Typography>
                                        <Controller name="profesionalismo_conductores" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Cumplimiento de protocolos de seguridad en ruta:</Typography>
                                        <Controller name="protocolos_seguridad" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Respuesta frente a incidentes o contingencias:</Typography>
                                        <Controller name="respuesta_incidentes" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Confianza en la protección de la carga:</Typography>
                                        <Controller name="proteccion_carga" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* --- Pregunta 4 --- */}
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 1 }}>
                                    4. ¿Qué mejoras le gustaría ver en nuestro servicio?
                                </Typography>
                                <Controller
                                    name="mejoras"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            placeholder="(Escriba aquí sus sugerencias)"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            variant="outlined" // Opcional: usa 'filled' o 'standard' si prefieres
                                            sx={{
                                                '& .MuiOutlinedInput-root': { // Estilo para el borde y fondo
                                                    color: 'white',
                                                    '& fieldset': {
                                                        borderColor: 'rgba(255, 255, 255, 0.7)', // Borde más claro
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white', // Borde blanco al pasar el mouse
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white', // Borde blanco al enfocar
                                                    },
                                                    '& textarea::placeholder': { // Estilo para el placeholder
                                                         color: 'rgba(255, 255, 255, 0.7)',
                                                         opacity: 1, // Necesario para override en algunos navegadores
                                                    },
                                                },
                                                '& .MuiInputBase-input': { // Estilo para el texto ingresado
                                                    color: 'white',
                                                },
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo ligeramente visible
                                                borderRadius: 1, // Redondeo leve para el campo
                                            }}
                                        />
                                    )}
                                />
                            </Grid>

                             {/* --- Pregunta 5 --- */}
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 1 }}>
                                    5. ¿Recomendaría nuestros servicios a otras empresas?
                                </Typography>
                                <Controller
                                    name="recomendacion"
                                    control={control}
                                    render={({ field }) => <ComponenteEstrellas field={field} />}
                                />
                            </Grid>

                            {/* --- Pregunta 6 --- */}
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 1 }}>
                                    6. Comentarios adicionales o sugerencias:
                                </Typography>
                                <Controller
                                    name="comentarios"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            placeholder="(Espacio libre)"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            variant="outlined"
                                             sx={{ // Reutiliza los estilos del TextField anterior
                                                '& .MuiOutlinedInput-root': {
                                                    color: 'white',
                                                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
                                                    '&:hover fieldset': { borderColor: 'white' },
                                                    '&.Mui-focused fieldset': { borderColor: 'white' },
                                                     '& textarea::placeholder': { color: 'rgba(255, 255, 255, 0.7)', opacity: 1 },
                                                },
                                                '& .MuiInputBase-input': { color: 'white' },
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                borderRadius: 1,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>

                            {/* --- Botón de Envío --- */}
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button type="submit" variant="contained" color="primary" size="large">
                                    Enviar Encuesta
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Container>
            </Container>
        </Box>
    );
}

export default FormularioEncuesta2;