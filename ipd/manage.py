#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import tensorflow as tf
import transformers
# def create_model():
#     MAX_LEN = 512
#     input_word_ids = tf.keras.layers.Input(shape=(MAX_LEN,), dtype=tf.int32,
#                                            name="input_word_ids")
#     bert_layer = transformers.TFBertModel.from_pretrained('bert-large-uncased')
#     bert_outputs = bert_layer(input_word_ids)[0]
#     pred = tf.keras.layers.Dense(16, activation='softmax')(bert_outputs[:,0,:])
    
#     model = tf.keras.models.Model(inputs=input_word_ids, outputs=pred)
#     loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
#     model.compile(loss='categorical_crossentropy', optimizer=tf.keras.optimizers.Adam(
#     learning_rate=0.00002))
#     model.load_weights(os.getcwd()+'\\candidate\\personality_model\\best_model.h5')
#     return model

def main():
    """Run administrative tasks."""
    # global model1
    # model1 = create_model()
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ipd.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
