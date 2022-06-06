from tqdm.notebook import tqdm
import numpy as np
import pandas as pd
import tensorflow as tf
import tensorflow.keras
from nltk.stem import WordNetLemmatizer
import regex as re
import transformers
#import keras
from tensorflow.keras import backend as K
import tweepy
from transformers import BertTokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import os

# def __init__():
#     global model
#     model = create_model()

def personality_model(usernames):
    cols = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP',
       'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP']
    colnames = ['sentence']
    colnames = colnames+cols
    consumer_key = "CwGQs6IWYXq2jRwqx4LYVsJrE"
    consumer_secret= "HFzOiKHMy8PK4C8qKpf6I0gz3CFm7glTaHl4nyvas0P2d5cBh9"
    bearer_token= "AAAAAAAAAAAAAAAAAAAAAAx3dAEAAAAAs9yXntCjeM3lBvkXkSEdmAACTZk%3Dnkz7JVOqmVvACIVl04GDH10qKS5MxVwZliBrW9woXPpuBD5F1z"
    access_key= "900603028071251968-TavdcaAxdetvevjLAwv43RacpjGeigm"
    access_secret= "6taeBOQpdWenR49vAUuzf3hfj6atLBXTaNpCNUIPGERyu"
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_key, access_secret)
    # api = tweepy.API(auth,wait_on_rate_limit=True)
    # bearer_token="AAAAAAAAAAAAAAAAAAAAAJN2dAEAAAAAekcTf6JUtL9KB7KS5Y3ItMfK9mo%3DcwdiYtjJr1UxahqiapKa0Ifkpi21dyrF30mefBCINP0Ww5HtKX"
    client = tweepy.Client(bearer_token=bearer_token)
    # usernames='Cristiano'
    user = client.get_user(username=usernames)
    print(user.data.id)
    tweets = client.get_users_tweets(user.data.id)
    # tweets.data[0]
    data1=tweets.data
    posts=""
    for word in data1:
        posts=posts+"|||"+word.text   
    posts=posts[3:]
    df_predict = pd.DataFrame(columns = colnames)
    sentence=[posts]
    sentence= clean_text(sentence)

    bert_model_name = 'bert-large-uncased'
    tokenizer = BertTokenizer.from_pretrained(bert_model_name, do_lower_case=True)
    MAX_LEN = 512
    sentence_inputs = tokenize_sentences(sentence, tokenizer, MAX_LEN)
    sentence_inputs = pad_sequences(sentence_inputs, maxlen=MAX_LEN, dtype="long", value=0, truncating="post", padding="post")
    sentence_inputs
    model = create_model()
    prediction = model.predict(np.array(sentence_inputs))
    df_predict.loc[0,'sentence']=sentence
    df_predict.loc[0, cols] = prediction
    list1=[]
    for i in range(1,17):
        list1.append(str((df_predict.iloc[0][i])))
    return str(list1)

def top_five_personalities(list1):
    cols = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP','INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP']
    for i in range(16):
        for j in range(15-i):
            if list1[j]<list1[j+1]:
                temp = list1[j]
                list1[j] = list1[j+1]
                list1[j+1] = temp
                temp = cols[j]
                cols[j] = cols[j+1]
                cols[j+1] = temp
    return cols[0:5]

def get_top_five(list1):
    list2 = top_five_personalities(list1)
    dict1 = {}
    dict1["ISTJ"] = "Serious and quiet, interested in security and peaceful living. Extremely thorough, responsible, and dependable. Well-developed powers of concentration. Usually interested in supporting and promoting traditions and establishments. Well-organized and hard working, they work steadily towards identified goals. They can usually accomplish any task once they have set their mind to it."
    dict1["ISTP"] = "Quiet and reserved, interested in how and why things work. Excellent skills with mechanical things. Risk-takers who they live for the moment. Usually interested in and talented at extreme sports. Uncomplicated in their desires. Loyal to their peers and to their internal value systems, but not overly concerned with respecting laws and rules if they get in the way of getting something done. Detached and analytical, they excel at finding solutions to practical problems."
    dict1["ISFJ"] = "Quiet, kind, and conscientious. Can be depended on to follow through. Usually puts the needs of others above their own needs. Stable and practical, they value security and traditions. Well-developed sense of space and function. Rich inner world of observations about people. Extremely perceptive of other's feelings. Interested in serving others."
    dict1["ISFP"] = "Quiet, serious, sensitive and kind. Do not like conflict, and not likely to do things which may generate conflict. Loyal and faithful. Extremely well-developed senses, and aesthetic appreciation for beauty. Not interested in leading or controlling others. Flexible and open-minded. Likely to be original and creative. Enjoy the present moment."
    dict1["INFJ"] = "Quietly forceful, original, and sensitive. Tend to stick to things until they are done. Extremely intuitive about people, and concerned for their feelings. Well-developed value systems which they strictly adhere to. Well-respected for their perserverence in doing the right thing. Likely to be individualistic, rather than leading or following."
    dict1["INFP"] = "Quiet, reflective, and idealistic. Interested in serving humanity. Well-developed value system, which they strive to live in accordance with. Extremely loyal. Adaptable and laid-back unless a strongly-held value is threatened. Usually talented writers. Mentally quick, and able to see possibilities. Interested in understanding and helping people."
    dict1["INTJ"] = "Independent, original, analytical, and determined. Have an exceptional ability to turn theories into solid plans of action. Highly value knowledge, competence, and structure. Driven to derive meaning from their visions. Long-range thinkers. Have very high standards for their performance, and the performance of others. Natural leaders, but will follow if they trust existing leaders."
    dict1["INTP"] = "Logical, original, creative thinkers. Can become very excited about theories and ideas. Exceptionally capable and driven to turn theories into clear understandings. Highly value knowledge, competence and logic. Quiet and reserved, hard to get to know well. Individualistic, having no interest in leading or following others."
    dict1["ESTP"] = "Friendly, adaptable, action-oriented. 'Doers' who are focused on immediate results. Living in the here-and-now, they're risk-takers who live fast-paced lifestyles. Impatient with long explanations. Extremely loyal to their peers, but not usually respectful of laws and rules if they get in the way of getting things done. Great people skills."
    dict1["ESTJ"] = "Practical, traditional, and organized. Likely to be athletic. Not interested in theory or abstraction unless they see the practical application. Have clear visions of the way things should be. Loyal and hard-working. Like to be in charge. Exceptionally capable in organizing and running activities. 'Good citizens' who value security and peaceful living."
    dict1["ESFP"] = "People-oriented and fun-loving, they make things more fun for others by their enjoyment. Living for the moment, they love new experiences. They dislike theory and impersonal analysis. Interested in serving others. Likely to be the center of attention in social situations. Well-developed common sense and practical ability."
    dict1["ESFJ"] = "Warm-hearted, popular, and conscientious. Tend to put the needs of others over their own needs. Feel strong sense of responsibility and duty. Value traditions and security. Interested in serving others. Need positive reinforcement to feel good about themselves. Well-developed sense of space and function."
    dict1["ENFP"] = "Enthusiastic, idealistic, and creative. Able to do almost anything that interests them. Great people skills. Need to live life in accordance with their inner values. Excited by new ideas, but bored with details. Open-minded and flexible, with a broad range of interests and abilities."
    dict1["ENFJ"] = "Popular and sensitive, with outstanding people skills. Externally focused, with real concern for how others think and feel. Usually dislike being alone. They see everything from the human angle, and dislike impersonal analysis. Very effective at managing people issues, and leading group discussions. Interested in serving others, and probably place the needs of others over their own needs."
    dict1["ENTP"] = "Creative, resourceful, and intellectually quick. Good at a broad range of things. Enjoy debating issues, and may be into 'one-up-manship'. They get very excited about new ideas and projects, but may neglect the more routine aspects of life. Generally outspoken and assertive. They enjoy people and are stimulating company. Excellent ability to understand concepts and apply logic to find solutions."
    dict1["ENTJ"] = "Assertive and outspoken - they are driven to lead. Excellent ability to understand difficult organizational problems and create solid solutions. Intelligent and well-informed, they usually excel at public speaking. They value knowledge and competence, and usually have little patience with inefficiency or disorganization."
    list3 = []
    for x in list2:
        list3.append(x + " - " + dict1[x])
    return str(list3)



def clean_text(data):
    data_length=[]
    lemmatizer=WordNetLemmatizer()
    cleaned_text=[]
    for sentence in tqdm(data):
        sentence=sentence.lower()
        
        #removing links from text data
        sentence=re.sub('https?://[^\s<>"]+|www\.[^\s<>"]+',' ',sentence)
    
        #removing other symbols
        sentence=re.sub('[^0-9a-z]',' ',sentence)
    
        
        data_length.append(len(sentence.split()))
        cleaned_text.append(sentence)
    return cleaned_text

def tokenize_sentences(sentences, tokenizer, max_seq_len = 1800):

    tokenized_sentences = []
    MAX_LEN = 512
    for sentence in tqdm(sentences):
        tokenized_sentence = tokenizer.encode(
                            sentence,                  # Sentence to encode.
                            add_special_tokens = True, # Add '[CLS]' and '[SEP]'
                            max_length = max_seq_len,  # Truncate all sentences.
                    )
        
        tokenized_sentences.append(tokenized_sentence)
        
    return tokenized_sentences

def create_model():
    MAX_LEN = 512
    input_word_ids = tf.keras.layers.Input(shape=(MAX_LEN,), dtype=tf.int32,
                                           name="input_word_ids")
    bert_layer = transformers.TFBertModel.from_pretrained('bert-large-uncased')
    bert_outputs = bert_layer(input_word_ids)[0]
    pred = tf.keras.layers.Dense(16, activation='softmax')(bert_outputs[:,0,:])
    
    model = tf.keras.models.Model(inputs=input_word_ids, outputs=pred)
    loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
    model.compile(loss='categorical_crossentropy', optimizer=tf.keras.optimizers.Adam(
    learning_rate=0.00002))
    model.load_weights(os.getcwd()+'\\candidate\\personality_model\\best_model.h5')
    return model