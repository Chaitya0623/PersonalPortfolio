# Generated by Django 4.1.1 on 2023-03-03 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0005_alter_contact_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='number',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='contact',
            name='username',
            field=models.CharField(max_length=20, unique=True),
        ),
    ]
