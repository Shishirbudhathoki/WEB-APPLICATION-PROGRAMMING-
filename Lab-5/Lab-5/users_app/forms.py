from django import forms
from .models import UserProfile

class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = UserProfile
        fields = ['name', 'username', 'password', 'age', 'gender', 'email']