import re
import pandas as pd
import joblib
import fitz 
import os

def cleanResume(resumeText):
    resumeText = re.sub('http\S+\s*', ' ', resumeText)  # remove URLs
    resumeText = re.sub('RT|cc', ' ', resumeText)  # remove RT and cc
    resumeText = re.sub('[%s]' % re.escape("""!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""), ' ', resumeText)  # remove punctuations
    resumeText = re.sub(r'[^\x00-\x7f]',r' ', resumeText) 
    resumeText = re.sub('\s+', ' ', resumeText)  # remove extra whitespace
    return resumeText

def pdf_ocr_ml(pdf_path):
    strw=os.getcwd()
    strw=strw.replace('\\',"/")
    doc = fitz.open(strw+'/'+str(pdf_path))
    text = ''
    for page in doc:
        text += page.get_text()
    print(text)
    resumeText = cleanResume(text)
    df = pd.DataFrame({'id':[1, 2], 'resume': [resumeText, 'aakash']})

    #key_dict = pd.read_csv('C:/Users/aakas/key_for_model_output.csv')
    key_dict = {0: 'Advocate', 1: 'Arts', 2: 'Automation Testing', 3: 'Blockchain', 4: 'Business Analyst', 5: 'Civil Engineer', 
    6: 'Data Science', 7: 'Database', 8: 'DevOps Engineer', 9: 'DotNet Developer', 10: 'ETL Developer', 
    11: 'Electrical Engineering', 12: 'HR', 13: 'Hadoop', 14: 'Health and fitness', 15: 'Java Developer', 
    16: 'Mechanical Engineer', 17: 'Network Security Engineer', 18: 'Operations Manager', 19: 'PMO', 20: 'Python Developer',
    21: 'SAP Developer', 22: 'Sales', 23: 'Testing', 24: 'Web Designing'}
    model = joblib.load(os.getcwd()+'\\candidate\\cv_model\\text_pipeline_5.joblib')
    prediction = model.predict(df['resume'][0:1])
    output = key_dict[prediction[0]]
    return output