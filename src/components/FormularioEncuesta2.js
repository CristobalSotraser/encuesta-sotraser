import React, { useState } from 'react'; // Importar useState
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import {
    TextField,
    Button,
    Grid,
    Typography,
    Box,
    Container,
    Snackbar, // Importar Snackbar
    Alert,    // Importar Alert
    CircularProgress,
    Divider // Importar CircularProgress para indicador de carga
} from '@mui/material';
import ComponenteEstrellas from './ComponenteEstrellas';

import backgroundImage from '../assets/Sotraser_3.jpg';
import logoSotraser from '../assets/Logo-blanco.png';
// import { useNavigate } from 'react-router-dom';

function FormularioEncuesta2() {
    // const navigate = useNavigate();
    const { handleSubmit, control, reset, formState: { errors } } = useForm({ // Obtener 'reset' de useForm
        defaultValues: {
            nombreEmpresa: '',
            nombreContacto: '',
            email: '',
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

    // Estados para el feedback y carga
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info'); // 'success', 'error', 'warning', 'info'

    // Función para cerrar el Snackbar
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    // Función que se ejecuta al enviar el formulario
    const onSubmit = async (data) => {
        console.log("Datos del formulario a enviar:", data);
        const googleWebAppUrl = 'https://script.google.com/macros/s/AKfycby5PQyiT_JkDXYFt8riETMM0EauejjXrCRRZ95ApM-T_nzehUykiapvu_DjI_DuQuew/exec';
    
        setIsSubmitting(true);
    
        
        // Convierte el objeto de datos a formato x-www-form-urlencoded
        const formData = new URLSearchParams();
        for (const key in data) {
            formData.append(key, data[key]);
        }
    
        try {
            // Envía formData y establece la cabecera Content-Type correcta
            const response = await axios.post(googleWebAppUrl, formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
       
    
            console.log('Respuesta de Google Apps Script:', response.data);
    
            if (response.data.status === "success") {
                setSnackbarMessage('¡Gracias por completar la encuesta! Tus respuestas han sido guardadas.');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                reset();
            } else {
                const errorMessage = response.data.message || 'Error desconocido al procesar la respuesta.';
                console.error('Error reportado por Google Apps Script:', errorMessage);
                setSnackbarMessage(`Error al guardar: ${errorMessage}`);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            }
    
        } catch (error) {
            // Este bloque ahora es menos probable que sea por CORS, pero sí por red real
            console.error('Error al enviar la petición a Google Apps Script:', error);
            setSnackbarMessage('No se pudo enviar la encuesta. Verifica tu conexión o el endpoint.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- Breakpoints responsivos (sin cambios) ---
    const responsiveFontSize = { /* ... */ };
    const responsiveTitleSize = { /* ... */ };
    const textFieldStyles = {
        '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
            '& input::placeholder': { color: 'rgba(255, 255, 255, 0.7)', opacity: 1 },
        },
        '& .MuiInputBase-input': { color: 'white' }, // Texto al escribir
        '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)'}, // Color del Label
        '& .MuiInputLabel-root.Mui-focused': { color: 'white'}, // Color del Label enfocado
         '& .MuiFormHelperText-root': { // Color del texto de error/ayuda
             color: '#ffcdd2', // Rojo claro
             marginLeft: 0
         },
         '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': { // Borde rojo en error
             borderColor: '#f44336',
         },
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 1,
    };

    return (
        <Box
             sx={{
                 backgroundImage: `url(${backgroundImage})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 position: 'relative',
                 display: 'flex',
                 minHeight: '100vh',
                 py: 4,
             }}
        >
            <Box
                 sx={{
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: '100%',
                     backgroundColor: 'rgba(4, 39, 73, 0.7)',
                 }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={logoSotraser} alt="Logo de Sotraser" style={{ width: '100%', marginTop:'50px', marginBottom:'30px' }} /> {/* Ajuste leve al tamaño del logo */}

                {/* --- Títulos e Instrucciones (sin cambios) --- */}
                <Typography variant="h3" align="center" color="white" gutterBottom sx={{ fontSize: { xs: '1.7rem', md: '3rem'}, fontWeight: 'bold' }}>
                     Encuesta de Satisfacción del Cliente
                </Typography>
                <Typography variant="h5" align="center" color="white" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem'}, mb: 1 }}>
                     ¡Tu opinión es muy importante para nosotros!
                </Typography>
                 <Typography variant="body1" align="center" color="white" sx={{ mb: 4, fontSize: { xs: '0.8rem', md: '1rem'}, pl: { xs: 1, md: 4 }, pr: { xs: 1, md: 4 }}}> {/* Ajuste leve padding horizontal */}
                     (Selecciona la cantidad de estrellas que representa tu nivel de satisfacción: ⭐ = Muy deficiente / ⭐⭐⭐⭐⭐ = Excelente)
                 </Typography>

                {/* Contenedor del Formulario */}
                <Container sx={{
                     backgroundColor: 'rgba(23, 108, 182, 0.4)',
                     padding: { xs: 2, md: 4 },
                     borderRadius: 2,
                     marginBottom: 4,
                     boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.66)',
                }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                        <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 2, fontWeight: 'medium' }}>
                                    Datos del Encuestado (Obligatorio)
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Controller
                                    name="nombreEmpresa"
                                    control={control}
                                    rules={{ required: 'El nombre de la empresa es obligatorio' }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            label="Nombre de la Empresa"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            error={!!error}
                                            helperText={error ? error.message : ''}
                                            sx={textFieldStyles} // Aplica estilos
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}> {/* Ocupa mitad en pantallas pequeñas o más */}
                                <Controller
                                    name="nombreContacto"
                                    control={control}
                                    rules={{ required: 'Su nombre es obligatorio' }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            label="Nombre del Contacto"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            error={!!error}
                                            helperText={error ? error.message : ''}
                                            sx={textFieldStyles} // Aplica estilos
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}> {/* Ocupa mitad en pantallas pequeñas o más */}
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: 'El correo electrónico es obligatorio',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Ingrese un correo electrónico válido'
                                        }
                                    }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            label="Email del Contacto"
                                            variant="outlined"
                                            type="email"
                                            fullWidth
                                            required
                                            error={!!error}
                                            helperText={error ? error.message : ''}
                                            sx={textFieldStyles} // Aplica estilos
                                        />
                                    )}
                                />
                            </Grid>

                            {/* --- Preguntas 1 a 6 (sin cambios en la lógica, solo el Controller y Typography) --- */}
                             {/* --- Pregunta 1 --- */}
                             <Grid item xs={12}>
                                 <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 1 }}>
                                     1. ¿Cómo calificaría la calidad general del servicio de transporte de carga que le hemos proporcionado?
                                 </Typography>
                                 <Controller
                                     name="calidad_general"
                                     control={control}
                                     render={({ field }) => <ComponenteEstrellas field={field} />}
                                 />
                             </Grid>

                             {/* --- Pregunta 2 --- */}
                             <Grid item xs={12}>
                                 <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 2, fontWeight: 'medium' }}>
                                     2. Califique los siguientes aspectos de nuestro servicio:
                                 </Typography>
                                 <Grid container spacing={1.5} sx={{ pl: { xs: 0, md: 2 }}}>
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Typography color="white" variant="body1" sx={{ fontSize: responsiveFontSize }}>Puntualidad en las entregas:</Typography>
                                        <Controller name="puntualidad" control={control} render={({ field }) => <ComponenteEstrellas field={field} />} />
                                    </Grid>
                                    {/* ... resto de sub-preguntas 2 ... */}
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
                                     3. Evalúe los siguientes aspectos de nuestra operación y seguridad:
                                 </Typography>
                                 <Grid container spacing={1.5} sx={{ pl: { xs: 0, md: 2 }}}>
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

                            {/* --- Pregunta 4 (TextField) --- */}
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 1 }}>
                                    4. ¿Qué mejoras le gustaría ver en nuestro servicio?
                                </Typography>
                                <Controller
                                    name="mejoras"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field} /* Resto de props sin cambios */
                                             placeholder="(Escriba aquí sus sugerencias)"
                                             multiline
                                             rows={4}
                                             fullWidth
                                             variant="outlined"
                                             sx={{ /* ... estilos existentes ... */
                                                 '& .MuiOutlinedInput-root': { /* ... */ },
                                                 '& .MuiInputBase-input': { color: 'white' },
                                                 backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                 borderRadius: 1,
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

                            {/* --- Pregunta 6 (TextField) --- */}
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" sx={{ fontSize: responsiveFontSize, mb: 1 }}>
                                    6. Comentarios adicionales o sugerencias:
                                </Typography>
                                <Controller
                                    name="comentarios"
                                    control={control}
                                    render={({ field }) => (
                                         <TextField {...field} /* Resto de props sin cambios */
                                             placeholder="(Espacio libre)"
                                             multiline
                                             rows={4}
                                             fullWidth
                                             variant="outlined"
                                              sx={{ /* ... estilos existentes ... */
                                                 '& .MuiOutlinedInput-root': { /* ... */ },
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
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    disabled={isSubmitting} // Deshabilitar si está enviando
                                    startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null} // Icono de carga
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Encuesta'}
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Container>

                 {/* Componente Snackbar para feedback */}
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000} // Se oculta automáticamente después de 6 segundos
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Posición
                >
                    {/* Usamos Alert dentro de Snackbar para estilos y botón de cierre opcional */}
                    <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>

            </Container>
        </Box>
    );
}

export default FormularioEncuesta2;