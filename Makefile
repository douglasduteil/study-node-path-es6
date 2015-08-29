MAKEFLAGS = -j1

BIN = node_modules/.bin

NODE = $(BIN)/babel-node
ISPARTA_CMD = $(BIN)/istanbul cover --transpiler babel
MOCHA_CMD = $(BIN)/_mocha

.PHONY: test test-cov

test:
	node $(MOCHA_CMD) test

test-cov:
	rm -rf coverage
	$(NODE) $(ISPARTA_CMD) --report html $(MOCHA_CMD) -- test
