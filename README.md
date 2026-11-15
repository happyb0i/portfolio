# Hey, I'm Eric Kong 👋

I build cloud infrastructure, automate deployments, and create environments for AI agents to run. This is my little corner of the internet.

## Run locally

With [Bun](https://bun.sh/docs/installation) **1.3.14** installed, run these commands from the project folder:

```sh
bun install --frozen-lockfile
bun run dev
```

Open [localhost:5173](http://localhost:5173).

## Run with Podman

With Podman running and a Compose provider installed, run from the project folder:

```sh
podman compose up --build -d portfolio
```

Open [localhost:8080](http://localhost:8080).

Stop the container when you're done:

```sh
podman compose down
```
