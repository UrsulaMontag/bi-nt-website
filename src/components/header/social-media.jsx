import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SocialMedia({ children }) {
  const router = useRouter();

  return (
    <section>
      <Link
        passHref
        href={{
          pathname: "/",
        }}
      >
        <a pathName={router.pathname}>
          <Image
            src="/home.svg"
            alt="link to home page"
            width={37}
            height={37}
            overflow="hidden"
          />
        </a>
      </Link>
    </section>
  );
}
