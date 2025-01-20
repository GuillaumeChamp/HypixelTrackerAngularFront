# Use official nginx image as the base image
FROM nginx:1.27

# Copy the build output to replace the default nginx contents.
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/hypixel-tracker-angular-front/browser /usr/share/nginx/html
COPY ./dist/hypixel-tracker-angular-front/browser/index.html /usr/share/nginx/html/index.html

CMD ["nginx", "-g", "daemon off;"]

# Expose port 80
EXPOSE 80
