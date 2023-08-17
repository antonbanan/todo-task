# Todo Project

Welcome to the Todo Project! This README provides a comprehensive guide to setting up the development environment, running the application in a local Kubernetes cluster, interacting with the application, and testing its functionality.

## Project Structure

The project is organized as follows:

```sh
todo-task/
├── apps/
│ ├── todo-app/
│ │ ├── src/
│ │ │ ├── tasks/
│ │ │ ├── exceptions/
│ │ │ ├── pipes/
│ │ │ ├── utils/
│ │ │ └── ...
│ │ └── ...
│ ├── todo-front/
│ │ ├── app/
│ │ │ ├── components/
│ │ │ ├── api/
│ │ │ ├── tasks/
│ │ │ ├── interfaces/
│ │ │ ├── services/
│ │ └── ...
│ └── ...
├── kubernetes/
│ ├── todo-app-deployment.yaml
│ ├── todo-front-deployment.yaml
│ ├── mongodb-deployment.yaml
│ ├── todo-app-service.yaml
│ ├── todo-front-service.yaml
│ ├── mongodb-service.yaml
│ └── ...
└── README.md

```

- `todo-task/`: Contains the Nx Monorepo environment.
  - `apps/`: Contains the different applications within the project.
    - `todo-app/`: Contains the backend application.
      - `src/tasks/`: Task-related functionality.
      - `src/exceptions/`: Custom exceptions.
      - `src/pipes/`: Contains a global validation pipe.
      - `src/utils/`: Utility functions (e.g., logger, request DTO).
    - `todo-front/`: Contains the frontend application.
      - `app/components/`: Reusable UI components.
      - `app/api/`: API-route to make a server-side request to `todo-app`.
      - `app/tasks/`: Task-related components for route Users in the browser.
      - `app/interfaces/`: TypeScript interfaces (includes expected Task model).
      - `app/services/`: Services for data management (Contains an api-service for communication with the Nest backend).
  - `kubernetes/`: Contains Kubernetes configuration files for deploying backend, frontend, and MongoDB.
  - `README.md`: The file you're currently reading.


## First Setup

1. **Clone the repository:**

```sh
git clone https://github.com/antonbanan/todo-task.git

cd todo-task
```


## Running Locally in Kubernetes Cluster

1. **Start Minikube (if not installed):**

```sh
minikube start
```

2. **Apply Kubernetes Configurations:**

```sh
kubectl apply -f kubernetes/todo-app-deployment.yaml
kubectl apply -f kubernetes/todo-front-deployment.yaml
kubectl apply -f kubernetes/mongodb-deployment.yaml
kubectl apply -f kubernetes/todo-app-service.yaml
kubectl apply -f kubernetes/todo-front-service.yaml
kubectl apply -f kubernetes/mongodb-service.yaml
```

3. **Access the Application:**

Find the todo-front service IP:

```sh
minikube service todo-front --url
```

Use generated URL to access the app in your browser 



*Access application api documentatin:
```sh
minikube service todo-app --url
```

Use generated URL to access the API documentation in your browser (add route ‘/api’)



## Development Environment Setup


1. **Run mongodb in docker-compose (* install it if not installed)**
```sh
docker-compose -f db-local/docker-compose.yml up --build
```

2. **Run todo-app:**

change to  ‘mongodb://127.0.0.1:27017/task' mongoDB url 

in file /apps/todo-app/src/app-module.ts 

```sh
nx serve todo-app
```


3. **Run todo-front:**

change to  'http://localhost:3200' baseURL url in file /apps/todo-front/app/services/api.ts 

```sh
nx serve todo-front
```
## Testing Functionality

1. **Run test comands:**
```sh
nx test todo-app
nx test todo-front
```
