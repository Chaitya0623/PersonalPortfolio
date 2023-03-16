# Generated by Django 4.1.1 on 2023-03-04 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0006_alter_contact_number_alter_contact_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
        migrations.AlterField(
            model_name='contact',
            name='username',
            field=models.CharField(max_length=20),
        ),
    ]
