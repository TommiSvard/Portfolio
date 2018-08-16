from flask import Flask, render_template
from flask_static_files_chache_invalidator import *


app = Flask(__name__)
app._static_folder = 'C:\\Users\\Tommi\\Desktop\\Projekt\\Portfolio\\static'


@app.route('/')
def index():
    myPortfolio = {
        'job1':'url1',
        'job2': 'url2',
        'job3': 'url3',
        'job4': 'url4',
        'job5': 'url5',
        'job6': 'url6',
        'job7': 'url7',
    }
    return render_template('index.html', skills = myPortfolio)
"""
@app.route('/music')
def music():
    currentmusic = currentlyListening()
    albumcover = albumCover()
    return render_template('music.html', music = currentmusic, album = albumcover)
"""

@app.route('/skills')
def skills():
    return render_template('skills.html')


@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)



if __name__ == '__main__':
    app.run(debug=True)
