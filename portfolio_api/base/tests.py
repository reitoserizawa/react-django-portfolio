from django.test import TestCase
from .models import Contact, Technology

class ContactTest(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        Contact.objects.create(
            name="Reito Serizawa", 
            email="s.reitiger@gmail.com", 
            phone=123456789, 
            message="Test Case"
            )
    
    def test_name_content(self):
        contact = Contact.objects.get(id=1)
        expected_object_name = f'{contact.name}'
        self.assertEquals(expected_object_name, 'Reito Serizawa')

class TechnologyTest(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        Technology.objects.create(
            name="JavaScript", 
            )
    
    def test_name_content(self):
        technology = Technology.objects.get(id=1)
        expected_object_name = f'{technology.name}'
        self.assertEquals(expected_object_name, 'JavaScript')