from src.utils.pdf_reader import extract_text_from_pdf
from fastapi import UploadFile
from pypdf import PdfReader


async def upload_pdf_controller( file: UploadFile ):
    
    extracted_text = extract_text_from_pdf(file.file)

    print(f"Extracted Text: {extracted_text}")
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "extracted_text": extracted_text
    }