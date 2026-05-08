from src.utils.text_chunker import chunk_text
from src.utils.pdf_reader import extract_text_from_pdf


async def upload_pdf_controller(file):

    text = extract_text_from_pdf(file.file)

    chunks = chunk_text(text)

    return {
        "total_chunks": len(chunks),
        "chunks": chunks
    }