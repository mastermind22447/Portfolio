from rest_framework import serializers
from portfolio.models import Projects, Presentations, DataScience, ProjectImage

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ('id', 'photos')

class ProjectSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True)

    class Meta:
        model = Projects
        fields = ('id', 'name', 'description', 'created_at', 'updated_at', 'images', 'video')

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        project = Projects.objects.create(**validated_data)
        for image_data in images_data:
            ProjectImage.objects.create(project=project, **image_data)
        return project

    def update(self, instance, validated_data):
        images_data = validated_data.pop('images', [])
        images = instance.images.all()
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.video = validated_data.get('video', instance.video)
        instance.save()
        for image_data in images_data:
            image_id = image_data.get('id')
            if image_id:
                image = images.filter(pk=image_id).first()
                if image:
                    image.photos = image_data.get('photos', image.photos)
                    image.save()
            else:
                ProjectImage.objects.create(project=instance, **image_data)
        return instance



class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presentations
        fields = ('id', 'title', 'description', 'created_at', 'updated_at', 'photo', 'video')

class DataScienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataScience
        fields = ('id', 'name', 'description', 'created_at', 'updated_at', 'photo', 'video')
