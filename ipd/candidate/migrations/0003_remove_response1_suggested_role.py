# Generated by Django 4.0.4 on 2022-04-27 19:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('candidate', '0002_alter_response1_suggested_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='response1',
            name='suggested_role',
        ),
    ]
