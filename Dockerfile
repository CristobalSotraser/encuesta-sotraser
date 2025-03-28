# Usa una imagen base de Nginx ligera
FROM nginx:alpine

# Copia los archivos de la carpeta 'build' al directorio web de Nginx
COPY build/ /usr/share/nginx/html

# Expón el puerto 80 (puerto por defecto de Nginx)
EXPOSE 80

# El comando por defecto de la imagen nginx ya inicia el servidor