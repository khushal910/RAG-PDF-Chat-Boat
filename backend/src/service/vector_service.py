from src.utils.vector_db import collection


def search_similar_chunks(query_embedding, pdf_id):

    results = collection.query(

        query_embeddings=[query_embedding],

        n_results=5,

        where={"pdf_id": pdf_id}
    )

    return results["documents"][0]