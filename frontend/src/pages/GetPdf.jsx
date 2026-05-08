import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetPdf = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a valid PDF file");
      setPdfFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdfFile) {
      alert("Please select a PDF file first");

      return;
    }

    const upload_api = import.meta.env.VITE_UPLOAD_API;

    if (!upload_api) {
      console.log("UPLOAD_API is not defined");

      return;
    }

    try {
      const formData = new FormData();

      formData.append("file", pdfFile);

      const response = await fetch(upload_api, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();


      if (!response.ok) {
        alert("Upload failed");

        return;
      }

      navigate(`/chat/${data.pdf_id}`);

    } catch (error) {
      console.error(error);

      alert("Something went wrong");
    }
  };

  return (
    <main className="app-shell">
      <section className="upload-page">
        <div className="upload-panel">
          <p className="eyebrow">Upload Document</p>
          <h2>Choose a PDF to start chatting.</h2>
          <p className="lead">
            Select a document from your device. Once it is ready, you can move
            directly into the chat workspace.
          </p>

          <form className="upload-form" onSubmit={handleSubmit}>
            <label className="dropzone">
              <span>
                <strong>Drop in your PDF</strong>
                <br />
                or browse from your computer
              </span>
              <input
                className="file-input"
                name="file"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </label>

            {pdfFile && <p className="selected-file">Selected: {pdfFile.name}</p>}

            <div className="action-row">
              <button className="button" type="submit">
                Submit and Go to Chat
              </button>
              <button
                className="button secondary"
                type="button"
                onClick={() => navigate("/")}
              >
                Back Home
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default GetPdf;
