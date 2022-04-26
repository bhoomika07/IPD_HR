# Generated by Django 4.0.4 on 2022-04-26 07:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('company', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Candidate',
            fields=[
                ('cand_name', models.CharField(max_length=200)),
                ('cand_email', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('cand_password', models.CharField(max_length=32)),
                ('cand_qualification', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Response1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('if_selected', models.BooleanField(default=False)),
                ('cv', models.FileField(upload_to='uploads/')),
                ('linkedin', models.CharField(max_length=100)),
                ('pending', models.BooleanField(default=True)),
                ('cid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='candidate.candidate')),
                ('testid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='company.test')),
            ],
        ),
        migrations.CreateModel(
            name='Personality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cand_personality', models.CharField(max_length=32)),
                ('cid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='candidate.candidate')),
            ],
        ),
    ]
