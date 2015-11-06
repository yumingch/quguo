# coding: utf-8
import leancloud
leancloud.init('TYH9McMkdViVPOs22r9ndqgP', master_key='dzHshmOz5TQ6QM04pQMm3A6a')

from flask import *
from leancloud import *

app = Flask(__name__)

class SavedUserMap(Object):
	@property
	def visited_countries(self):
	    return self.get('visited_countries')
	@visited_countries.setter
	def visited_countries(self, value):
		return self.set('visited_countries', value)
	@property
	def email(self):
	    return self.get('email')
	@email.setter
	def email(self, value):
		return self.set('email', value)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/<user_id>/')
def user(user_id):
	query = Query(SavedUserMap)
	usermap = query.get(user_id)
	return ('first country is %s' % usermap.visited_countries[0])
@app.route('/add/', methods=['POST'])
def add():
	if request.method == 'POST':
		title = request.json['title']
		usermap = SavedUserMap(visited_countries=title)
		usermap.save()
	return jsonify(title=title)




#if __name__ == '__main__':
#    app.debug = True
#    app.run()