### Python tools for our fork of the digital-form-builder

- [answer_displayers](answer_displayers) - contains answer display classes for relevant form runner components
- [dictionaries.py](dictionaries.py) - contains dictionaries for useful mappings, e.g. existing component keys to their relevant component classes

### Run tests (all unit tests)

```bash
python -m pytest
```

### Setup venv

```bash
python -m venv .venv
source .venv/bin/activate # or .venv\Scripts\activate.bat on Windows
pip install -r requirements.txt
```
