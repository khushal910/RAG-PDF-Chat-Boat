from fastapi import APIRouter, File, UploadFile
from pydantic import BaseModel

from src.controller.chat_controller import chat_controller
from src.controller.upload_controller import upload_pdf_controller

router = APIRouter()


@router.post("/upload")
async def get_pdf(file: UploadFile = File(...)):
    return await upload_pdf_controller(file)


class ChatRequest(BaseModel):
    message: str
    pdf_id: str


@router.post("/chat")
async def chat_with_pdf(request: ChatRequest):
    return await chat_controller(request)
