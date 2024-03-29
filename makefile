SHELL = /bin/bash

SRC = ./src/
HEADER = _header
FOOTER = _footer
MAIN = main
ETC = etc

all: main etc prettier-write prettier-check
	@echo 'Build succeeded'

main:
	@cat $(SRC){$(HEADER),$(MAIN),$(FOOTER)}.html > ./index.html

etc:
	@cat $(SRC){$(HEADER),$(ETC),$(FOOTER)}.html > ./etc.html

prettier-check:
	@npx prettier -c ./*.html

prettier-write:
	@echo 'Running prettier'
	@npx prettier -w ./*.html
