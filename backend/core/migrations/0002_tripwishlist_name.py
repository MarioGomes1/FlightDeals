# Generated by Django 4.0.1 on 2022-01-15 04:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tripwishlist',
            name='name',
            field=models.CharField(default='trip', max_length=50),
        ),
    ]