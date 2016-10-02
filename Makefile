.PHONY: build start

help: ## prints help
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf " > \033[36m%-20s\033[0m %s\n", $$1, $$2}'

MODULES_BIN := ./node_modules/.bin

build: ## Build production bundle
	@NODE_ENV=production $(MODULES_BIN)/webpack --progress --colors -p

start: ## Starts local development web server
	@NODE_ENV=development node webpack.config.js
