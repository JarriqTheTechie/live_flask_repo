# LiveFlask

LiveFlask is a comprehensive framework for Flask that simplifies the creation of dynamic interfaces, all within the
familiar environment of Flask.

# Install LiveFlask

```commandline
pip install liveflask
```

Include the Javascript (on every page that will be using LiveFlask)

```html
...
<head>
    {{ liveflask_scripts() }}
</head>
<body
        ...
</body>
</html>
```

<hr>

# Create a component

In your flask application's template/liveflask directory create a new python file with the name of your component.
e.g `Counter.py`
in that file, create a class with the same name as the file, and decorate it with the `@component` decorator.

```python
@component
class Counter:
    def render(self):
        return render_template("counter.html")

```

Create a new file in the same directory with the name of the component's template. e.g `counter.html`

```html
<div>
    <h1>Hello World!</h1>
</div>
```

# Include the component in your template

```html
    ...
<head>
    {{ liveflask_scripts() }}
</head>
<body
    {{ live('Counter') }}
</body>
</html>
```

<hr>

# View it in the browser

Load the page you included the component in, and you should see the component rendered in the browser. In our example, it should display a simple `Hello World!` message.

<hr>

# Add "counter" functionality
Replace the generated content of the `counter` component class and view with the following:

<p align="right">
    <b>
        <i>templates/liveflask/CounterComponent.py</i>
    </b>
</p>

```python
@component
class CounterComponent:
    count: int = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1

    def render(self):
        return render_template("counter.html", count=self.count)
```

<p align="right">
    <b>
        <i>templates/liveflask/counter.html</i>
    </b>
</p>

```html
<div style="text-align: center">
    <button liveflask-action="increment">+</button>
    <h1>{{ count }}</h1>
    <button liveflask-action="decrement">-</button>
</div>
```

<hr>

# View it in the browser
Now reload the page and you should see a counter that increments and decrements when you click the buttons.

<hr>


## Sure, let's take a look at some code.

<p align="right">
    <b>
        <i>templates/liveflask/SearchUsersComponent.html</i>
    </b>
</p>

```python
@component
class SimpleUsersComponent:
    search: str = ""

    def render(self):
        users = User.where("username", "like", f"%{self.search}%").get()
        return render_template("users.html", users=users)
```

<p align="right">
    <b>
        <i>templates/users.html</i>
    </b>
</p>

```html

<div>
    <input liveflask-model="search" type="text" placeholder="Search users..."/>

    <ul>
        {% for user in users %}
        <li>{{ user.username }}</li>
        {% endfor %}
    </ul>
</div>
```

<br>
<br>
You can include this component anywhere in your app like so.

<p align="right">
    <b>
        <i>templates/index.html</i>
    </b>
</p>

```html

<body>
{{ live('SimpleUsers') }}
</body>
```
