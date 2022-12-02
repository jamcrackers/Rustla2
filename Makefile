export DOCKER_HOST=$(shell docker context inspect --format '{{.Endpoints.docker.Host}}')

workflow:
	act -W .github/workflows/frontend.yml