import boto3
import botocore
from .config import Config


s3 = boto3.client(
    "s3",
    aws_access_key_id=Config.S3_KEY,
    aws_secret_access_key=Config.S3_SECRET
)


def upload_file_to_s3(file, bucket_name, acl="public-read"):
    print('\n\n\n before upload', file, '\n\n\n')

    try:
        s3.upload_fileobj(
            file,
            bucket_name,
            'filename',
            ExtraArgs={
                "ACL": acl,
                "ContentType": 'image'
            }
        )

    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something Happened: ", e)
        return e


    return f"{Config.S3_LOCATION}{file.filename}"
