# Generated by Django 4.1.5 on 2023-03-25 09:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0005_remove_projects_photo_projectimage'),
    ]

    operations = [
        migrations.RenameField(
            model_name='projectimage',
            old_name='image',
            new_name='photos',
        ),
    ]
