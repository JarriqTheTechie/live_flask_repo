# LiveFlask

LiveFlask is a comprehensive framework for Flask that simplifies the creation of dynamic interfaces, all within the
familiar environment of Flask.

# Install LiveFlask

```commandline
pip install liveflask
```

```python
from flask import Flask, render_template
from liveflask import LiveFlask

app = Flask(__name__)
live = LiveFlask(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
```