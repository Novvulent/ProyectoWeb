# Eventos – Frontend (Avance Proyecto Integrador Web 1)


INTENGRANTES: 
Samuel Alzate Correa
Santiago Atehortua Jaramillo
Nicolas Restrepo Sanchez


Frontend de la aplicación de gestión de eventos y reservas.
**Stack:** Angular · TypeScript · HTML5 · SCSS · Bootstrap · Patrón MVC.

> Estado: estructura base (scaffolding, modelos, controladores, servicios con datos *mock*
> y archivos de las vistas sin lógica). La implementación de las vistas es la siguiente etapa.

## Requisitos

- Node.js LTS (https://nodejs.org)

## Instalación y ejecución

```bash
npm install
npm start        # servidor de desarrollo en http://localhost:4200
npm run build    # compilación de producción
```

## Estructura del proyecto

```
src/
├── app/
│   ├── models/        # Modelos: Role, User, Event, Reservation, Report
│   ├── views/         # Vistas (componentes Angular) por perfil
│   │   ├── auth/      #   login, register
│   │   ├── client/    #   client-events, reserve-event, my-reservations
│   │   ├── agent/     #   register-event, agent-events, manage-reservations
│   │   ├── admin/     #   reports
│   │   └── shared/    #   navbar, footer
│   ├── controllers/   # Coordinan vistas ↔ servicios
│   ├── services/      # Proveen la información (mock por ahora)
│   │   └── mock/      #   Datos de prueba
│   ├── utils/         # mockRequest (simula latencia de red)
│   ├── app.ts         # Componente raíz
│   ├── app.routes.ts  # Rutas (pendiente)
│   └── app.config.ts
├── styles/            # SCSS global (variables, base)
├── styles.scss        # Punto de entrada de estilos (Bootstrap + propios)
└── main.ts
```

## Flujo MVC

`Vista → Controlador → Servicio (datos mock) → Controlador → Vista`

Las vistas **no** contienen datos: los solicitan al controlador, que a su vez los pide a los servicios.

## Usuarios de prueba (mock)

| Rol           | Correo              | Contraseña |
|---------------|---------------------|------------|
| Administrador | admin@eventos.com   | admin123   |
| Agente        | agente@eventos.com  | agente123  |
| Cliente       | cliente@eventos.com | cliente123 |

## Estándar de commits

Se usa *Conventional Commits*: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`.
