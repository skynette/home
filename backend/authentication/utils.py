from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.conf import settings


apikey = settings.SENDGRID_API_KEY

class Util:
    @staticmethod
    def send_email(data):
        message = Mail(
            from_email=settings.EMAIL_HOST_USER,
            to_emails=data['to_email'],
            subject=data['subject'],
            html_content=data['email_body']
        )
        try:
            sg = SendGridAPIClient(apikey)
            response = sg.send(message)
            return {'status': True, 'message': 'success'}
        except Exception as e:
            return {'status': False, 'message': e.message}
