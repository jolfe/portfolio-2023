import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav
      className={`w-full flex justify-between text-white bg-olive px-12 py-4`}
    >
      <div className={`flex justify-start pl-4`}>
        <Link href="/">
          <h1
            className={`text-start font-extrabold tracking-wide text-xl align-middle`}
          >
            jolfe
          </h1>
        </Link>
      </div>
      {/* <Image
        className="m-0 justify-start pl-4"
        src="https://portfolio-buc.s3.us-east-2.amazonaws.com/logo.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJGMEQCIHZpMPniNfzbgoB8XbodkxbdA3Po7XpMjnupID2gCwnDAiBNEZ0AQU2jWxfV0kS%2Bn%2FTWmP9RfRaNBU%2B6TR5aqmDohCrtAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDUwOTU1NTQwNjQ5OSIModepCccWCjLmFbPUKsEC%2BuyH4YcSBEuqz8csdgcmCmYzFROWzWdpo9Kd9EVM%2FmcCoKas94UIuWYqlmg7KKVVSsnU5Is6h4mY0Db5ua5tGq1%2BKnAzDXj0CA94gLSjolAQnhAiVvf0ncjzCgs%2Bprm1oju6F2ctkGb7AMCTH4%2BMCN8QiOqNdzdQuVoHtQgUysV%2FmffuXg%2FB2%2BnfzGNcuYLVkywATSuhESrGdoIhaHiHmBibWx9hTEHrmRUYTicM7ZoAd6lc0loUb2kfa1hjhx1G7DdUD451xnKEuT6cgE79LCZzbCa0tXMBbkNJw1vQGgdkM0Su34LVNIDNPATAajdM4ckKQf%2FBCjs1GoRlVsdm3zF%2F7461KnV2QsYmBw5BPrhcmXXvB7m2omzAKj0pbWmqomfKXj55RCzD4IeF2u7N0%2F1V%2BlHDRlHkCn%2Fd7XMX094xMPqBsZ4GOrQCDs7sBA2lHrtZHLL%2BND86tHDTMrMfa4qzBYlTh7oMvQ0VOzs6VLu3Bd5YhtSh8LfC5kXr8TcLGqkL8GxKAyNTmsU3OVErJEevIH%2BJmU6%2BKJv20JASod%2BuRJh%2FvT3EWgo2Oe4bJWvzdWAS4N%2Fs%2B867cKef2rZNOtoEDnSgJbDO5UY9NZrvaTTN4ne3PR66NfVQlmNZRwVHgF96Fwa586SWSrz87BZeiJuwoXLY7KA3Lp1aRzjAtq4%2FwggT4ZA2ij9JM%2ByJPDC9L9H5O9ZsgfzqPyc73iY97lq8EbMilZ4Z0stJnnbOWdG75pbCEdLw6vgd2sMEaWuqC5t6tGQXVXWUWdbra0nyNsDlz1tuasO%2FrQ5PYL5UziZRQh1zoENc7FjWSoDHqR7VeXneAlPd3pPqXpnGaSQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T202637Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXNI66O2RZ2KBITFV%2F20230121%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=0c8025023b19de75de17f6bd844736f23c06cc399901084d6afff03f7065d4a1"
        alt={""}
        width={120}
        height={120}
      /> */}
      <ul className="flex font-bold justify-between gap-4">
        <li className="mt-2 border-b-2">
          <Link href="/">HOME</Link>
        </li>
        <li className="mt-2">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="mt-2">
          <Link href="/contact">CONTACT</Link>
        </li>
        <li className="mt-2">
          <Link href="/work">WORK</Link>
        </li>
      </ul>
    </nav>
  );
}
