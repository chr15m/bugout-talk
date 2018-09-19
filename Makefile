index.html: README.md
	markdown-to-slides -i -j refresh-on-change.js -s style.css $< > $@

$(CONVERTER): package.json
	npm install && touch $(CONVERTER)

.PHONY: clean

clean:
	rm -rf node_modules index.html package-lock.json

