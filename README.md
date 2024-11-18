# Proyecto: Aplicación Web Simple con Pipeline CI/CD

Este proyecto consiste en una aplicación web simple con un frontend básico y un backend construido en Node.js/Express, junto con una base de datos MongoDB o SQLite. El proyecto está configurado con un pipeline CI/CD, contenedores Docker y pruebas automatizadas.

## Requisitos Técnicos

- **Repositorio Git**: El código fuente está almacenado en un repositorio Git (GitHub).
- **Pipeline CI/CD**: Jenkins o GitHub Actions se usan para integrar y desplegar automáticamente el proyecto.
- **Contenedores Docker**: Todo el entorno de la aplicación está contenido en Docker.
- **Pruebas Automatizadas**: Se incluyen pruebas unitarias e integración.
- **Monitoreo Básico**: Logs y métricas básicas están habilitados.

## Estructura del Proyecto

1. **Frontend**:
   - HTML, CSS, JavaScript (con un framework básico como React si es necesario)
   
2. **Backend**:
   - Node.js con Express.js.
   
3. **Base de Datos**:
   - MongoDB o SQLite, según la configuración.

4. **Pipeline CI/CD**:
   - GitHub Actions o Jenkins para la integración continua y despliegue automatizado.
   
5. **Docker**:
   - Archivos Docker para contenerizar la aplicación y facilitar su despliegue.

6. **Pruebas Automatizadas**:
   - Pruebas unitarias con Mocha o Jest.
   - Pruebas de integración con Supertest o similar.

7. **Monitoreo**:
   - Logs centralizados y métricas simples con herramientas como Prometheus o ELK Stack.

---

## Guía de Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

