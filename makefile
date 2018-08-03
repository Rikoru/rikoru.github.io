SHELL = /bin/bash

SRC = ./src/
HEADER = _header
FOOTER = _footer
MAIN = main
ETC = etc

all: main etc
	@echo 'Build succeeded'

main:
	@cat $(SRC){$(HEADER),$(MAIN),$(FOOTER)}.html > ./index.html

etc:
	@cat $(SRC){$(HEADER),$(ETC),$(FOOTER)}.html > ./etc.html
