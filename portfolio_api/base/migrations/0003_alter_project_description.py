# Generated by Django 4.1.6 on 2023-02-28 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_project_technologies'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
