# coding: utf-8
import leancloud
leancloud.init('TYH9McMkdViVPOs22r9ndqgP', master_key='dzHshmOz5TQ6QM04pQMm3A6a')

from flask import Flask, render_template, Blueprint
from leancloud import Object, Query, LeanCloudError, User

app = Flask(__name__)

user=User()



@app.route('/')
def index():
	return render_template('index.html')

#if __name__ == '__main__':
#    app.debug = True
#    app.run()