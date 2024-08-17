from django.contrib import admin
from django.utils.html import format_html
from .models import Projects, Presentations, DataScience, ProjectImage

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage


class ProjectsAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]
    list_display = ('name', 'description', 'created_at', 'updated_at', 'image_tag', 'video_tag')
    readonly_fields = ['video_tag']

    def image_tag(self, obj):
        if obj.images.exists():
            return format_html('<img src="{}" width="100" height="100" />'.format(obj.images.first().photos.url))
        return "-"

    image_tag.short_description = 'Image'

    def video_tag(self, obj):
        if obj.video:
            return format_html('<a href="{}">{}</a>'.format(obj.video.url, obj.video.name))
        return "-"

    video_tag.short_description = 'Video'

    
class PresentationsAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'created_at', 'updated_at', 'image_tag', 'video_tag')
    readonly_fields = ('image_tag', 'video_tag')

    def image_tag(self, obj):
        if obj.photo:
            return format_html('<img src="{}" width="100" height="100" />'.format(obj.photo.url))
        return "-"
    image_tag.short_description = 'Image'

    def video_tag(self, obj):
        if obj.video:
            return format_html('<a href="{}">{}</a>'.format(obj.video.url, obj.video.name))
        return "-"
    video_tag.short_description = 'Video'

class DataScienceAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at', 'updated_at', 'image_tag', 'video_tag')
    readonly_fields = ('image_tag', 'video_tag')

    def image_tag(self, obj):
        if obj.photo:
            return format_html('<img src="{}" width="100" height="100" />'.format(obj.photo.url))
        return "-"
    image_tag.short_description = 'Image'

    def video_tag(self, obj):
        if obj.video:
            return format_html('<a href="{}">{}</a>'.format(obj.video.url, obj.video.name))
        return "-"
    video_tag.short_description = 'Video'


admin.site.register(Projects, ProjectsAdmin)
admin.site.register(Presentations, PresentationsAdmin)
admin.site.register(DataScience, DataScienceAdmin)
