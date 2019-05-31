# Use with python manage.py shell_plus to automatically import the models
import random

def generate_price_rating():
    stores = Store.objects.all()
    for sto in stores:
        sto.price_rating = round(random.uniform(0, 5), 1)
        sto.save()
