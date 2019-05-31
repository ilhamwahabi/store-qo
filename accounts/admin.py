# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from accounts.models import Account

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('username', 'email',)
