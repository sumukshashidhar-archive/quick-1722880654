FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY certs/cert.pem etc/nginx/certs/backend_quickhq_tech..pem 

COPY certs/privkey.pem etc/nginx/certs/backend_quickhq_tech_key.pem 

EXPOSE 80

EXPOSE 443