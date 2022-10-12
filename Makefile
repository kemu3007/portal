fmt:
	black . && isort . && cd portal && npm run fmt
lint:
	black --check . && isort --check .
prepare:
	python export_issues.py && python export_projects.py && python create_img.py && python create_meta.py && python create_version.py && python create_sitemap.py && python create_rss.py
