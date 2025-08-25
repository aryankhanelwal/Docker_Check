# Use Ubuntu as the base image
FROM ubuntu:22.04

# Set maintainer information
LABEL maintainer="aryankhanelwal"
LABEL description="Docker Web Application running on Ubuntu"

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Update package list and install necessary packages
RUN apt-get update && \
    apt-get install -y \
        apache2 \
        curl \
        wget \
        nano \
        net-tools \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www/html

# Remove default Apache files
RUN rm -rf /var/www/html/*

# Copy web application files to Apache document root
COPY index.html /var/www/html/
COPY style.css /var/www/html/
COPY script.js /var/www/html/

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

# Create a custom Apache configuration
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Create necessary Apache directories
RUN mkdir -p /var/run/apache2 /var/lock/apache2 /var/log/apache2

# Configure Apache to run in foreground
RUN echo "#!/bin/bash\n\
source /etc/apache2/envvars\n\
mkdir -p /var/run/apache2\n\
exec apache2 -D FOREGROUND" > /start-apache.sh
RUN chmod +x /start-apache.sh

# Expose port 80
EXPOSE 80

# Health check to ensure the service is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Add some environment variables for debugging
ENV DOCKER_IMAGE_NAME="docker-web-app"
ENV DOCKER_IMAGE_VERSION="1.0"
ENV WEB_SERVER="Apache2"

# Start Apache service
CMD ["/start-apache.sh"]
