# Usa una imagen base de Node.js
FROM node:18-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (o yarn.lock)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación React para producción
RUN npm run build

# Usa un servidor web ligero para servir los archivos
FROM nginx:alpine

# Copia los archivos de la construcción de React a la carpeta de archivos estáticos de nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 8080

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]