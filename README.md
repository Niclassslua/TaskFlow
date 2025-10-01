# TaskFlow

> Modern task management platform for teams. Built with React and Node.js.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://reactjs.org/)

TaskFlow is a collaborative task management application that helps teams organize and track their work. The platform features user authentication, payment processing, task export, and real-time collaboration.

**Status:** In active development. Currently in production and used by multiple teams.

## Features

- User authentication and management
- Task creation, organization, and tracking
- Stripe payment integration
- Task export (CSV, JSON, Excel)
- Real-time collaboration
- Automated CI/CD pipelines

## Tech Stack

**Frontend:** React 18.2.0, JavaScript (ES6+)  
**Backend:** Node.js, Express.js, PostgreSQL  
**DevOps:** GitHub Actions, Automated Deployment

## Project Structure

```
TaskFlow/
├── frontend/       # React frontend
├── backend/        # Node.js backend API
├── docs/           # Documentation
├── .github/        # CI/CD workflows
└── scripts/        # Utility scripts
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- PostgreSQL database
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Niclassslua/TaskFlow.git
   cd TaskFlow
   ```

2. Install dependencies
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Configure environment variables
   
   Create `backend/.env`:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_NAME=taskflow
   DB_USER=taskflow_user
   DB_PASSWORD=your_password
   ```

4. Start development servers
   ```bash
   # Backend
   cd backend && npm start
   
   # Frontend (new terminal)
   cd frontend && npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Development

```bash
# Run tests
cd frontend && npm test
cd backend && npm test

# Build for production
cd frontend && npm run build
```

## CI/CD

GitHub Actions handles automated testing and deployment. See `.github/workflows/` for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

See [Development Guide](docs/development.md) for detailed guidelines.

## Team

TaskFlow is developed by a dedicated team of developers, engineers, and product managers working together to build a modern task management platform.

Learn more about our team: [Team Documentation](docs/team.md)

## Recent Updates

- ✅ Payment integration with Stripe API
- ✅ Export functionality
- ✅ CI/CD pipeline setup
- 🔄 Enhanced authentication (in progress)
- 🔄 Security improvements (ongoing)

## Roadmap

**Phase 2:** Enhanced authentication, RBAC, improved security architecture  
**Future:** Mobile app, advanced analytics, third-party integrations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Documentation

- [Team](docs/team.md) - Meet the TaskFlow team
- [API Documentation](docs/api.md) - Complete API reference
- [Development Guide](docs/development.md) - Developer documentation
- [Architecture](docs/architecture.md) - System architecture overview
- [Requirements](docs/requirements.md) - Project requirements

## Support

For questions or issues, please open an issue on GitHub.
