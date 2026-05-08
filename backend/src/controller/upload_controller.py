from src.utils.text_chunker import chunk_text
from src.utils.pdf_reader import extract_text_from_pdf
from src.utils.embedding import create_embeddings


async def upload_pdf_controller(file):

    text = extract_text_from_pdf(file.file)

    chunks = chunk_text(text)
    
    embeddings = create_embeddings(chunks)

    return {
        'size': len(embeddings),
        "embeddings": embeddings
    }