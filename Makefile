MAKEFLAGS = -j1

BIN = node_modules/.bin

ISPARTA_CMD = $(BIN)/isparta cover
MOCHA_CMD = node_modules/mocha/bin/_mocha

.PHONY: test test-cov

test:
	node $(MOCHA_CMD) test

test-cov:
	rm -rf coverage
	$(ISPARTA_CMD) --include-all-sources --report html $(MOCHA_CMD) -- test
