import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, Typography, Box, Container } from '@mui/material';
import ComponenteEstrellas from './ComponenteEstrellas';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/Sotraser_1.jpg'; 
import logoSotraser from '../assets/Logo-blanco.png';

function FormularioEncuesta() {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();

    const onSubmit = async (data) => {
        try {
            const respuesta = await axios.post('http://127.0.0.1:8000/encuesta/', data);
            console.log(respuesta.data);
            alert('Encuesta enviada con éxito');
        } catch (error) {
            console.error('Error al enviar la encuesta:', error);
            alert('Error al enviar la encuesta');
        }
    };
    const handleNavigate = () => {
        navigate('/FormularioEncuesta2');
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                position: 'relative',
                display: 'flex',
               
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
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <img src={logoSotraser} alt="Logo de Sotraser" style={{ marginTop:'50px', marginBottom:'50px' }} />
                <Typography variant="h3" align="center" color="white" gutterBottom sx={{
                fontSize: {
                    xs: '1.8rem', // Tamaño para extra small (móviles pequeños)
                    sm: '2rem', // Tamaño para small (móviles más grandes, tablets)
                    md: '2.5rem', // Tamaño para medium (tablets grandes, desktops pequeños)
                    lg: '3rem', // Tamaño para large (desktops grandes)
                    xl: '3rem', // Tamaño para extra large (desktops muy grandes)
                },marginBottom:'50px',
                
            }}>
                    Encuesta de Satisfacción del Cliente
                </Typography>
                 <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">1. Calidad general del servicio</Typography>
                    <Controller
                        name="calidad_servicio"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">2. Puntualidad en las entregas</Typography>
                    <Controller
                        name="puntualidad"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                 <Grid item xs={12}>
                    <Typography color="white" variant="h6">3. Comunicación y seguimiento</Typography>
                    <Controller
                        name="comunicacion"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">4. Atención del equipo comercial</Typography>
                    <Controller
                        name="atencion"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">5. Relación precio/calidad</Typography>
                    <Controller
                        name="precio_calidad"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">6. Información y trazabilidad de la carga</Typography>
                    <Controller
                        name="trazabilidad"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">7. Condiciones de los camiones y equipos</Typography>
                    <Controller
                        name="condiciones_camiones"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">8. Profesionalismo de los conductores</Typography>
                    <Controller
                        name="profesionalismo_conductores"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">9. Cumplimiento de protocolos de seguridad en ruta</Typography>
                    <Controller
                        name="protocolos_seguridad"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">10. Respuesta frente a incidentes o contingencias</Typography>
                    <Controller
                        name="respuesta_incidentes"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">11. Confianza en la protección de la carga</Typography>
                    <Controller
                        name="proteccion_carga"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        
                        label="¿Qué mejoras le gustaría ver en nuestro servicio?"
                        multiline
                        rows={4}
                        fullWidth
                        {...control.register('mejoras')}
                        InputLabelProps={{
                            style: {
                                color: 'white',
                                fontSize: '1.5rem',
                            },
                        }}
                        sx={{
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="white" variant="h6">12. ¿Recomendaría nuestros servicios a otras empresas?</Typography>
                    <Controller
                        name="recomendacion"
                        control={control}
                        defaultValue={5}
                        render={({ field }) => <ComponenteEstrellas field={field} />} // Corrección aquí
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Comentarios adicionales o sugerencias"
                        multiline
                        rows={4}
                        fullWidth
                        {...control.register('comentarios')}
                        InputLabelProps={{
                            style: {
                                color: 'white',
                                fontSize: '1.5rem',
                            },
                        }}
                        sx={{
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">Enviar Encuesta</Button>
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleNavigate}>
                                    Ir a maqueta 2
                </Button>
                </Grid>
            </Grid>
                 </form>
            </Container>
            </Box>
    );
}

export default FormularioEncuesta;