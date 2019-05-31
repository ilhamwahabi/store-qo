# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator
from accounts.models import *

class StoreManager(models.Manager):

    def create_store(self, name, phone, address, type, description, owner):
        store = self.model(name=name, phone=phone, address=address, type=type,
                           description=description, owner=owner)

        store.save()
        return store

class Store(models.Model):
    CAFE, DINEOUT, DELIVERY = 'cafe', 'dineout', 'delivery'

    TYPE = (
        (CAFE, ('Cafe')),
        (DINEOUT, ('Dineout')),
        (DELIVERY, ('Delivery'))
    )

    name = models.CharField(max_length=50, blank=False)
    phone = models.CharField(max_length=50, blank=False)
    address = models.CharField(max_length=150, blank=False)
    type = models.CharField(max_length=10, choices=TYPE, default=CAFE)
    description = models.CharField(max_length=250, blank=False)
    price_rating = models.FloatField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
    image = models.TextField(blank=True)
    owner = models.ForeignKey(
        Account, related_name='stores', on_delete=models.PROTECT
    )

    objects = StoreManager()

    def __unicode__(self):
        return str(self.name) + ' ' + str(self.owner)
