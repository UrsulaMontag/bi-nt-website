import { useEffect, useState, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import Link from "next/link";

export default function PdfViewer() {
  const [pageNum, setPageNum] = useState(1);
  const canvasRef = useRef(null);

  const loadPdf = async () => {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";
    const loadingTask = pdfjsLib.getDocument(
      "/StandortvorschlagAlteZiegeleiNov2022.pdf"
    );
    const pdfDocument = await loadingTask.promise.then(function (pdf) {
      return pdf;
    });
    const page = await pdfDocument.getPage(pageNum).then(function (page) {
      return page;
    });
    const viewport = page.getViewport({ scale: 1 });
    const outputScale = window.devicePixelRatio || 1;
    const canvas = document.getElementById("the-canvas");
    const context = canvas.getContext("2d");
    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = "100%";
    canvas.style.height = "auto";
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before rendering the page
    const transform =
      outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    const renderContext = {
      canvasContext: context,
      transform: transform,
      viewport: viewport,
    };
    const renderTask = page.render(renderContext);
    await renderTask.promise;
  };

  useEffect(() => {
    loadPdf();
  }, [pageNum]);

  const handlePrevPage = () => {
    setPageNum(Math.max(pageNum - 1, 1));
  };

  const handleNextPage = () => {
    setPageNum(pageNum + 1);
  };

  return (
    <>
      <canvas ref={canvasRef} id="the-canvas" />
      <div>
        <button onClick={handlePrevPage}>Prev Page</button>
        <span>{pageNum}</span>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
      <button>
        Load PDF
        <embed
          src="/StandortvorschlagAlteZiegeleiNov2022.pdf"
          width="500"
          height="375"
          type="application/pdf"
        ></embed>
        <Link href="/StandortvorschlagAlteZiegeleiNov2022.pdf" />
      </button>
    </>
  );
}
