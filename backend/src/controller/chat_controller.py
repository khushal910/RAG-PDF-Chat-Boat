from src.service.vector_service import search_similar_chunks
from src.utils.embedding import create_embeddings
from src.service.ai_service import generate_ai_response

async def chat_controller(request):

    message = request.message
    pdf_id = request.pdf_id

    query_embedding = create_embeddings([message])[0]

    similar_chunks = search_similar_chunks(
        query_embedding,
        pdf_id
    )

    context = "\n".join(similar_chunks)

    ai_answer = generate_ai_response(context, message)

    return {
        "message": ai_answer
    }
