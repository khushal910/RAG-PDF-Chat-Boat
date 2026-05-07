from fastapi import APIRouter, UploadFile, File

from src.controller.upload_controller import upload_pdf_controller

router = APIRouter()


@router.post("/upload")
async def get_pdf(file: UploadFile = File(...)):

    return await upload_pdf_controller(file)
