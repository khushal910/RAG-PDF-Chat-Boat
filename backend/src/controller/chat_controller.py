async def chat_controller(request):
    # This is a placeholder for the actual chat logic
    # You would implement the logic to retrieve the relevant chunks and generate a response based on the query and pdf_id

    return {
        "message": f"Received message: {request.message} for PDF ID: {request.pdf_id}"
    }
