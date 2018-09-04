from flask import Flask, render_template
from flask_static_files_chache_invalidator import *


app = Flask(__name__)

app._static_folder = '..\\Portfolio\\static'


@app.route('/')
def index():
    myPortfolio = {
        'Circles&Sound':'1',
        'Image-Gallery': '2',
        'Purrfect-Match': '3',
        'RGB-Game': '4',
        'ToDoList': '5'
    }

    return render_template('index.html', skills = myPortfolio)


@app.route('/<int:site>')
def work(site):
    work = {'work/circles_sound/circles_sound.html':1,'work/image_gallery/image_gallery.html':2,'work/PurrfectMatch/purrfect_match.html':3,'work/colorgame/colorgame.html':4,'work/ToDoListProject/todo_list.html':5}

    for item,value in work.items():
        if site == value:
            return render_template(item)



@app.route('/work/<int:id>', methods=['GET'])
def work_load(id=0):
    portfolio = {'work/portfolio/work-1.html':1,'work/portfolio/work-2.html':2,'work/portfolio/work-3.html':3, 'work/portfolio/work-4.html':4, 'work/portfolio/work-5.html':5 }

    for work,key in portfolio.items():
        if id == key:
            return render_template(work)


@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)



if __name__ == '__main__':
    app.run(debug=True)
