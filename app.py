from flask import Flask, render_template
from flask_static_files_chache_invalidator import *
from lastfm import *

app = Flask(__name__)
app._static_folder = 'C:\\Users\\Tommi\\Desktop\\Projekt\\Portfolio\\static'


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/music')
def music():
    currentmusic = currentlyListening()
    albumcover = albumCover()
    return render_template('music.html', music = currentmusic, album = albumcover)

@app.route('/skills')
def skills():
    myskills = ['Python','Javascript', 'HTML5', 'CSS3']

    return render_template('skills.html', skills = myskills)

@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)



if __name__ == '__main__':
    app.run(debug=True)
