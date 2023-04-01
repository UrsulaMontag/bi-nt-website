import Typography from "@/components/base/typography";
import Pictures from "@/components/pictures/pictures";
import { getPictures } from "@/services/get-pictures";

export default function pictures() {
  const pictures = getPictures();

  return (
    <>
      <Typography variant={"h1"}>Bilder-Sammlung vom Gelände</Typography>
      <Pictures pictures={pictures} />
    </>
  );
}
