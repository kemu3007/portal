fmt:
	black . && isort .
lint:
	black --check . && isort --check .