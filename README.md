# Docker Web Application

A simple web application built with HTML, CSS, and JavaScript, containerized using Docker with Ubuntu as the base image.

## 🚀 Features

- **Interactive Web Interface**: Modern, responsive design with animations
- **Docker Containerized**: Runs in a Docker container with Ubuntu 22.04 base image
- **Apache Web Server**: Served using Apache2 within the container
- **Real-time Updates**: Live timestamp and interactive button counter
- **Health Checks**: Built-in Docker health checks for reliability

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Web Server**: Apache2
- **Containerization**: Docker
- **Base Image**: Ubuntu 22.04
- **Version Control**: Git

## 📁 Project Structure

```
docker-web-app/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
├── Dockerfile          # Docker configuration
├── .dockerignore       # Docker ignore patterns
└── README.md           # Project documentation
```

## 🐳 Docker Setup

### Building the Image

```bash
docker build -t docker-web-app:latest .
```

### Running the Container

```bash
docker run -d -p 8080:80 --name docker-web-app-container docker-web-app:latest
```

### Accessing the Application

Open your browser and navigate to: `http://localhost:8080`

### Docker Hub

The image is also available on Docker Hub:

```bash
docker pull aryankhandelwallll/docker-web-app:latest
```

## 📋 Prerequisites

- Docker installed on your system
- Git (for cloning the repository)
- Web browser (for accessing the application)

## 🔧 Development

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/aryankhanelwal/Docker_Check.git
   cd Docker_Check
   ```

2. Build the Docker image:
   ```bash
   docker build -t docker-web-app:latest .
   ```

3. Run the container:
   ```bash
   docker run -d -p 8080:80 --name docker-web-app-container docker-web-app:latest
   ```

### Container Management

- **View running containers**: `docker ps`
- **View container logs**: `docker logs docker-web-app-container`
- **Stop container**: `docker stop docker-web-app-container`
- **Remove container**: `docker rm docker-web-app-container`
- **Remove image**: `docker rmi docker-web-app:latest`

## 🌟 Application Features

### Interactive Elements
- **Click Counter**: Tracks button clicks with animated feedback
- **Live Timestamp**: Updates every second
- **Random Messages**: Displays different messages on each click
- **Keyboard Support**: Press spacebar to trigger button click
- **Responsive Design**: Works on desktop and mobile devices

### Visual Effects
- **Gradient Backgrounds**: Modern CSS gradients
- **Hover Animations**: Interactive card hover effects
- **Smooth Transitions**: CSS transitions for better UX
- **Glass Morphism**: Modern glassmorphism design elements

## 🏗️ Dockerfile Details

The Dockerfile uses Ubuntu 22.04 as the base image and includes:

- Apache2 web server installation
- Proper directory permissions setup
- Health check configuration
- Environment variables for debugging
- Optimized layering for faster builds

## 📝 Version History

- **v1.0**: Initial release with basic web application and Docker setup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Aryan Khandelwal**
- GitHub: [@aryankhanelwal](https://github.com/aryankhanelwal)
- Docker Hub: [aryankhandelwallll](https://hub.docker.com/u/aryankhandelwallll)

## 🆘 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/aryankhanelwal/Docker_Check/issues) on GitHub.

---

Made with ❤️ and containerized with 🐳 Docker
