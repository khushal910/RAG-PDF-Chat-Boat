from fastapi import UploadFile


async def upload_pdf_controller( file: UploadFile ):

    return {
        "filename": file.filename,
        "content_type": file.content_type
    }