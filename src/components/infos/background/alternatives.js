import { ContentContainerFlexColumnGap } from "@/components/base/content-containerFlexColumnGap.styled";
import Typography from "@/components/base/typography";
import pdfjsLib from "pdfjs-dist";
import { useEffect, useRef, useState } from "react";

export default function Alternatives() {
  const [pageNum, setPageNum] = useState(1);
  const canvasRef = useRef(null);

  const loadPdf = async () => {
    const pdfPath = "/StandortvorschlagAlteZiegeleiNov2022.pdf"; // specify the path of your PDF file in the public folder
    const response = await fetch(pdfPath);
    const data = await response.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    const pageCount = pdf.numPages;
    setNumPages(pageCount);
    setPageNumber(1);
    setPdf(pdf);
  };

  useEffect(() => {
    const renderPage = async () => {
      const pdfDocument = await loadPdf();
      const page = await pdfDocument.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext);
    };
    renderPage();
  }, [pageNum]);

  const handlePrevPage = () => {
    setPageNum(Math.max(pageNum - 1, 1));
  };

  const handleNextPage = () => {
    setPageNum(pageNum + 1);
  };

  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>Unsere Alternativen</Typography>
      <div>
        <h4>keine ahnung überschrift</h4>
        <canvas ref={canvasRef} />
        <div>
          <button onClick={handlePrevPage}>Prev Page</button>
          <span>{pageNum}</span>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
        <a href="#">hier unter anderem pdf zu konzeptentwurf</a>
      </div>
      <div>
        <h4>keine ahnung überschrift</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          corporis similique ratione! Ex maxime corrupti magnam numquam quia
          omnis error vitae quo ipsa quaerat natus accusamus excepturi fugiat,
          fugit illo.
        </p>
        <a href="#">hier unter anderem pdf zu konzeptentwurf</a>
      </div>
    </ContentContainerFlexColumnGap>
  );
}
