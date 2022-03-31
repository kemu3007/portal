fmt:
	black . && isort . && cd portal && npm run fmt
lint:
	black --check . && isort --check .