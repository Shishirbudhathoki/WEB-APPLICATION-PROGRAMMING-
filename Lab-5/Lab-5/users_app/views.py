from django.shortcuts import render, redirect
from .forms import UserRegistrationForm
from .models import UserProfile

# Create your views here.

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('users_list')
    else:
        form = UserRegistrationForm()
    return render(request, 'users/register.html', {'form': form})

def users_list(request):
    users = UserProfile.objects.all()
    return render(request, 'users/users_list.html', {'users': users})