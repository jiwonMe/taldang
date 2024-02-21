# TALDANG server

## activate venv
```bash

python3 -m venv .venv
source ./.venv/bin/activate
pip install -r requirements.txt
```

## run server
```bash
uvicorn main:app --reload
```

## create docs
```bash
openapi-generator generate -i ./docs/openapi.yml -g html -o ./docs
```