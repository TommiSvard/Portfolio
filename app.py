from flask import Flask, render_template
from flask_static_files_chache_invalidator import *

app = Flask(__name__)
app._static_folder = 'C:\\Users\\Tommi\\Desktop\\Portfolio\\static'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')


@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)




if __name__ == '__main__':
    app.run(debug=True)
