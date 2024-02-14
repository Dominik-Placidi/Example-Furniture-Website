from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import send_mail
import json

# Create your views here.

def home(request):
    return render (request, 'sites/home.html')

def ContactRequest(request):
    
    if request.method == 'POST':

        request_data = json.loads(request.body.decode('utf-8'))

        first_name = request_data['first_name']
        last_name = request_data['last_name']
        email = request_data['email']
        description = request_data['description']

        try:
            #send_mail(
            #    'Kontaktanfrage',
            #    first_name + ' ' + last_name + '\n\n' + email + '\n\n\n\n' + description,
            #    'xxx',
            #    ['xxx'],
            #    fail_silently=False,
            #)
            
            response = JsonResponse({'message' : 'Anfrage erfolgreich übermittelt'})
            response.status_code = 200
            return response

        except Exception as e:

            response = JsonResponse({'message' : f'Fehler {e}'})
            response.status_code = 500
            return response
