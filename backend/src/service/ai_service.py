from dotenv import load_dotenv
from langchain_mistralai import ChatMistralAI
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent

load_dotenv(BASE_DIR / ".env")


print(os.getenv("MISTRAL_API_KEY"))


llm = ChatMistralAI(

    model="mistral-small",

    api_key=os.getenv("MISTRAL_API_KEY")
)


def generate_ai_response(context, question):

    prompt = f"""
    You are a helpful PDF assistant.

    Answer ONLY from the provided context.

    If answer is not found,
    say:
    "I could not find this in the PDF."

    Context:
    {context}

    Question:
    {question}
    """

    response = llm.invoke(prompt)

    return response.content
