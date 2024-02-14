from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.http import JsonResponse, HttpResponseForbidden
import json

# Create your views here.

def toHome(request):
    return redirect('home')

def home(request):
    return render (request, 'sites/home.html')

def ContactRequest(request):
    
    if request.method == 'POST':

        request_data = json.loads(request.body.decode('utf-8'))

        first_name = request_data['Vorname']
        last_name = request_data['Nachname']
        email = request_data['Email']
        description = request_data['Ihr Anliegen']

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

    else:
        return HttpResponseForbidden