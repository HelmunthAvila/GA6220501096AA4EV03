# GA6220501096AA4EV03

Proyecto de sistema de gestión web y móvil (inventarios, ventas, usuarios, reportes, etc.)

## 📌 Descripción

Este repositorio contiene una aplicación en dos variantes:
- `frontend_mobile/`: versión móvil responsive.
- `frontend_web v1/` y `frontend_web v2/`: versión escritorio/administrador.

La app da soporte a:
- Control de inventario
- Administración de productos
- Gestión de proveedores y clientes
- Registro y reporte de ventas
- Gestión de usuarios y permisos
- Generación de facturas y reportes

## 🧩 Estructura del proyecto

- `frontend_mobile/`
  - `index.html`, `login.html`
  - `css/`
  - `js/`
  - `screens/`

- `frontend_web v1/`
  - `index.html`, `login.html`
  - `components/` (navbar, sidebar, footer)
  - `css/`, `img/`, `js/`, `pages/`

- `frontend_web v2/`
  - `index.html`, `login.html`
  - `components/`, `assets/css`, `assets/js`, `fonts`, `pages/`

## 🛠️ Tecnologías usadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Diseño responsive para móviles

## 🚀 Instrucciones de instalación y ejecución

1. Clonar repositorio:
```bash
git clone <url-del-repositorio>
cd GA6220501096AA4EV03
```

2. Abrir archivos en el navegador:
- Para móvil: `frontend_mobile/index.html`
- Para web v1: `frontend_web v1/index.html`
- Para web v2: `frontend_web v2/index.html`

> Nota: si tu proyecto tiene backend, ubica la carpeta o servicio correspondiente y arráncalo.

## 🔧 Configuración (sugerida)

- Usa `WAMP`, `XAMPP` u otro servidor local para levantar el contenido estático cuando uses APIs.
- Asegúrate de configurar la URL base de las llamadas AJAX en tu configuración JS si hay backend.

## 📄 Uso general

1. Abrir página de login
2. Iniciar sesión con credenciales válidas
3. Navegar a módulos (inventario, ventas, clientes, reportes)
4. Crear/editar/eliminar registros según permisos

## 📝 Recomendaciones de mejora

- Añadir validación de formularios
- Separar scripts con módulos claros
- Implementar manejo de rutas (SPA) en la versión web
- Agregar autenticación real con backend

## 🤝 Contribuir

1. Hacer fork del repositorio
2. Crear rama de feature: `feature/nombre`
3. Commit + push
4. Abrir PR con descripción clara

## 📞 Autor
- [Tu Nombre] (puedes sustituir con tu nombre o correo)

---

Este README es un punto de partida. Si quieres, te ayudo a diseñar README específico para cada carpeta (`frontend_mobile`, `frontend_web v1`, `frontend_web v2`) con instrucciones de pruebas y estructuras de datos.
