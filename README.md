# Description

Quick repro showing that *.app-test.* files under `imports` aren't being included when running:
```
meteor test --once --full-app --driver-package dispatch:mocha-phantomjs
```

# Repro Steps

1. git clone this repo.
2. `meteor test --once --full-app --driver-package dispatch:mocha-phantomjs`
3. `imports/client/random.app-test.js` isn't run.
 
