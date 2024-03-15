from flask import jsonify, Flask, request
from flask_cors import CORS

from scraping import infojobs_scraper

app = Flask(__name__)
CORS(app)

@app.route('/api/jobs')
def index():
    job_name = request.args.get('jobname')
    job_city = request.args.get('jobcity')
    
    jobs_list = infojobs_scraper.jobs(job_name, job_city)
    
    return jsonify(jobs_list)

if __name__ == '__main__':
    app.run(debug=True)