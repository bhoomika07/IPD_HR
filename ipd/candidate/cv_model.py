import re
import pandas as pd
import joblib
import fitz 
import os
import numpy as np

def cleanResume(resumeText):
    resumeText = re.sub('http\S+\s*', ' ', resumeText)  # remove URLs
    resumeText = re.sub('RT|cc', ' ', resumeText)  # remove RT and cc
    resumeText = re.sub('[%s]' % re.escape("""!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""), ' ', resumeText)  # remove punctuations
    resumeText = re.sub(r'[^\x00-\x7f]',r' ', resumeText) 
    resumeText = re.sub('\s+', ' ', resumeText)  # remove extra whitespace
    return resumeText

def pdf_ocr_ml(pdf_path):
    # resp_cv = cv1.url
    # index1 = (resp_cv.index('/',1))
    # resp_cv = resp_cv[0:index1] + '/uploads' + resp_cv[index1:]
    strw=os.getcwd()
    pdf_path=pdf_path.replace('/',"\\")
    print(strw+str(pdf_path))
    doc = fitz.open(strw+'\\media\\uploads\\'+str(pdf_path))
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
    # model1 = joblib.load("C:\\Users\\Shrey\\Desktop\\ipd_django\\ipd\\candidate\\cv_models\\fcvmodel.joblib")
    model1 = joblib.load(os.getcwd()+'\\candidate\\cv_models\\fcvmodel.joblib')
    model2 = joblib.load(os.getcwd()+'\\candidate\\cv_models\\fcvmodel2.joblib')
    predicted_arr = model1.predict_log_proba(df['resume'][0:1])
    range1 = np.amax(predicted_arr) - np.amin(predicted_arr)
    min1 = np.amin(predicted_arr)
    for i in range(len(predicted_arr[0])):
        predicted_arr[0][i] = (predicted_arr[0][i] - min1)/range1
    threshold1 = model2.predict(predicted_arr)
    print(predicted_arr)
    predicted_arr_indexes = np.arange(len(predicted_arr[0]))
    for i in range(len(predicted_arr[0])):
        for j in range(len(predicted_arr[0])-i-1):
            if(predicted_arr[0][j]<predicted_arr[0][j+1]):
                temp = predicted_arr[0][j]
                predicted_arr[0][j] = predicted_arr[0][j+1]
                predicted_arr[0][j+1] = temp
                temp = predicted_arr_indexes[j]
                predicted_arr_indexes[j] = predicted_arr_indexes[j+1]
                predicted_arr_indexes[j+1] = temp
#     print(predicted_arr_indexes)
    list1 = []
    for i in range(len(predicted_arr_indexes)):
        list1.append(key_dict[predicted_arr_indexes[i]])
    list2 = list(predicted_arr[0])
#     range1 = list2[0] - list2[len(list2)-1]
#     min1 = list2[len(list2)-1]
#     for i in range(len(list2)):
#         list2[i] = list2[i] - min1
#         list2[i] = list2[i]/range1
#     print(list2)
#     threshold1 = model2.predict([list2])[0]
    list11 = []
    list22 = []
    print(threshold1) # Getting better results with averaging it out
    if threshold1>0.92:
        threshold1 = 0.7
    for i in range(len(list2)):
        if list2[i] < threshold1:
            break
        list11.append(list1[i])
        list22.append(list2[i])
    list3 = [list11,list22]
    return str(list3[0])

