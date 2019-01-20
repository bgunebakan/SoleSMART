from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.dashboard_epc, name='dashboard_epc'),
    url(r'investor/$', views.dashboard_investor, name='dashboard_investor'),
]
