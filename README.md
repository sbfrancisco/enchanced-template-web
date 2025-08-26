# React + TypeScript + Vite + Vitest Template

This template provides a clean and scalable project structure using React, TypeScript, and Vite.  
It also integrates **Tailwind CSS** for fast and efficient styling.

## Project Structure

The project is organized to encourage separation of concerns and modular development:

```
src/
├── api/          # Responsible for making requests to the backend (fetch, axios, etc.)
├── test/         # For test hooks or functions
├── hooks/        # Custom React hooks for encapsulating business logic
├── models/       # TypeScript interfaces and types shared across the app
├── components/   # React components, separated by levels of abstraction
│   ├── molecules/ # Mid-level components composed of smaller UI pieces
│   ├── atoms/     # Small reusable UI elements (buttons, inputs, etc.)
│   ├── organisms/ # Larger components composed of molecules/atoms
```

## About design pattern
The pattern is based on the idea of atoms, molecules, organisms, templates, and pages (the fundamental building blocks of any interface).

Atoms: the simplest elements, such as buttons or input fields.
Molecules: formed by combining two or more atoms, for example, a search bar composed of an input and a button.
Organisms: more complex structures that group several atoms and molecules to fulfill a specific purpose.
Templates: page-level arrangements that define the structure and layout without focusing on specific content.
Pages: instances of templates filled with actual content, representing the final, real interface presented to the user.

example:
```
Atom: a button or a text field; the most basic element of the interface.
Molecule: a search form, which combines a text field (atom) and a button (atom).
Organism: a website header, which groups several molecules and atoms, such as a logo, the search form, and a navigation menu.
Template: defines the page structure, for example, a homepage layout where the header, a main content section, and a footer are placed, without specific final content.
Page: a concrete instance of a template with real content, such as a blog homepage with actual text, images, and links.
```
In this template, to simplify development and since we are using Tailwind and reusable components, we prefer to work mainly at the organism and template levels, instead of defining every atom or molecule individually.

## Example: Clients

We use a **Clients** example to illustrate the architecture.

### 1. Models

In `models/clients.ts` we define the **Client** interface that represents the structure of a client object:

```ts
export interface Client {
  id: string;
  name: string;
  email: string;
}
```

### 2. API

In `api/clients.ts`, we create functions that interact with the backend (fetch clients, add, delete, etc).  
This keeps data fetching separate from components.

### 3. Hooks

In `hooks/useClients.ts`, we encapsulate business logic and state management related to clients.  
This hook internally calls the API functions and exposes reusable logic to components.

```ts
export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  
  const deleteClient = (id: string) => {
    setClients(prev => prev.filter(c => c.id !== id));
  };

  return { clients, deleteClient };
}
```

### 4. Components

In `components/molecules/` we define UI building blocks like `ListClients` or `LastClient`.

- **ListClients**: Responsible for rendering the list of clients and providing actions such as delete.  
- **LastClient**: Shows details of the last client added.

This separation ensures that components remain presentational and do not mix business logic.

### 5. Tailwind CSS

The template uses **Tailwind CSS** for utility-first styling.  
It allows you to quickly style components without writing custom CSS files, keeping everything consistent and easy to maintain.

Example usage:

```tsx
<li className="flex items-center justify-between p-2 border-b">
  <span>{client.name} ({client.email})</span>
  <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
</li>
```
### 6. Testing w/ vitest
This example it also includes how to simulate an API call and how to test the hook functions.

## Benefits

- Clear separation of concerns (API, hooks, UI)
- Scalable architecture for larger projects
- Strong typing with TypeScript
- Fast builds and hot reload with Vite
- Utility-first styling with Tailwind CSS
 

