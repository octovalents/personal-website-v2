from django.shortcuts import render

# Create your views here.

from django.views.generic import TemplateView

class MyView(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['message'] = 'Hello, World!'
        return context
