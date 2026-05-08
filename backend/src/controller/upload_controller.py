from src.utils.text_chunker import chunk_text
from src.utils.pdf_reader import extract_text_from_pdf
from src.utils.embedding import create_embeddings
from src.utils.vector_db import store_embeddings


async def upload_pdf_controller(file):

    text = extract_text_from_pdf(file.file)

    chunks = chunk_text(text)
    
    embeddings = create_embeddings(chunks)
    
    store_embeddings(chunks, embeddings)

    return {
        "message": "PDF processed and stored successfully."
    }