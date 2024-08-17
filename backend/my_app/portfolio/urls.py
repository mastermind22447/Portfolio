from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import project_list, project_detail, project_create, project_update, project_delete, presentation_list, presentation_detail, presentation_create, presentation_update, presentation_delete, datascience_list, datascience_detail, datascience_create, datascience_update, datascience_delete

urlpatterns = [
    
    path('projects/', project_list, name='project-list'),
    path('projects/<int:pk>/', project_detail, name='project-detail'),
    path('projects/create/', project_create, name='project-create'),
    path('projects/<int:pk>/update/', project_update, name='project-update'),
    path('projects/<int:pk>/delete/', project_delete, name='project-delete'),
    path('presentations/', presentation_list, name='presentation-list'),
    path('presentations/<int:pk>/', presentation_detail, name='presentation-detail'),
    path('presentations/create/', presentation_create, name='presentation-create'),
    path('presentations/<int:pk>/update/', presentation_update, name='presentation-update'),
    path('presentations/<int:pk>/delete/', presentation_delete, name='presentation-delete'),
    path('datascience/', datascience_list, name='datascience-list'),
    path('datascience/<int:pk>/', datascience_detail, name='datascience-detail'),
    path('datascience/create/', datascience_create, name='datascience-create'),
    path('datascience/<int:pk>/update/', datascience_update, name='datascience-update'),
    path('datascience/<int:pk>/delete/', datascience_delete, name='datascience-delete'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
