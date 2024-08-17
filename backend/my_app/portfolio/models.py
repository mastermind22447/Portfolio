from django.db import models

class Projects(models.Model):
    """
    Projects model defines the structure for storing project related information.
    
    Fields:
    - name (CharField): name of the project
    - description (TextField): description of the project
    - video (FileField): project's video
    - created_at (DateTimeField): date and time when the project was created
    - updated_at (DateTimeField): date and time when the project was last updated
    """
    name = models.CharField(max_length=255)
    description = models.TextField()
    video = models.FileField(upload_to='projects/videos', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class ProjectImage(models.Model):
    """
    ProjectImage model defines the structure for storing multiple images for each project.

    Fields:
    - project (ForeignKey): foreign key relationship with the Projects model
    - image (ImageField): project's image
    """
    project = models.ForeignKey(Projects, on_delete=models.CASCADE, related_name='images')
    photos = models.ImageField(upload_to='projects/images')

    def __str__(self):
        return f'{self.project.name} - {self.photos.name}'


class Presentations(models.Model):
    """
    Presentations model defines the structure for storing presentation related information.

    Fields:
    - title (CharField): title of the presentation
    - description (TextField): description of the presentation
    - photo (ImageField): project's photo
    - video (FileField): project's video
    - created_at (DateTimeField): date and time when the presentation was created
    - updated_at (DateTimeField): date and time when the presentation was last updated
    """
    title = models.CharField(max_length=255)
    description = models.TextField()
    photo = models.ImageField(upload_to='projects/photos', blank=True, null=True)
    video = models.FileField(upload_to='projects/videos', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class DataScience(models.Model):
    """
    DataScience model defines the structure for storing data science related information.

    Fields:
    - name (CharField): name of the data science
    - description (TextField): description of the data science
    - photo (ImageField): project's photo
    - video (FileField): project's video
    - created_at (DateTimeField): date and time when the data science was created
    - updated_at (DateTimeField): date and time when the data science was last updated
    """
    name = models.CharField(max_length=255)
    description = models.TextField()
    photo = models.ImageField(upload_to='projects/photos', blank=True, null=True)
    video = models.FileField(upload_to='projects/videos', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
