from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/<int:i>')
def go(i):
    return render_template(f'choice_{i}.html')