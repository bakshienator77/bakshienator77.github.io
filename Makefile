.PHONY: preview
PORT ?= 8000
preview:
	python3 -m http.server $(PORT) --bind 127.0.0.1 --directory .
