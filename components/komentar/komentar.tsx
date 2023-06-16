// buat cons
import Image from "next/image";
import Button from "../button";
import { ThumbsUp } from "../icons/thumbs-up";

const Komentar = () => {
  return (
    <div className="bg-white p-4 text-black">
      <div className="mx-auto container flex flex-col gap-6">
        <div className="flex items-center ">
          <p className="text-black shrink-0 pr-3">Daftar Komentar</p>
          <div className="h-1 w-full bg-black"></div>
        </div>
        <div className="">
          <div className="flex gap-4">
            <Image
              alt="user"
              src={"/icon/User_alt_fill.png"}
              height={64}
              width={64}
            />
            <div className="flex flex-col justify-center gap-2">
              <div>
                <span className="font-bold">Anonymous</span> berkomentar:
              </div>
              <div className="text-xs text-gray-500">
                Senin, 5 Juni 2023 pukul 18:30
              </div>
            </div>
          </div>
          <div className="bg-gray-50 mt-4 rounded w-full px-6 py-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="mt-4 flex gap-4 items-center">
            <Button name="Balas" />
            <ThumbsUp />7
          </div>
        </div>
        <div className="">
          <div className="flex gap-4">
            <Image
              alt="user"
              src={"/icon/User_alt_fill.png"}
              height={64}
              width={64}
            />
            <div className="flex flex-col justify-center gap-2">
              <div>
                <span className="font-bold">Anonymous</span> berkomentar:
              </div>
              <div className="text-xs text-gray-500">
                Senin, 5 Juni 2023 pukul 18:30
              </div>
            </div>
          </div>
          <div className="bg-gray-50 mt-4 rounded w-full px-6 py-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="mt-4 flex gap-4 items-center">
            <Button name="Balas" />
            <ThumbsUp />7
          </div>
        </div>
      </div>
      <div className="flex items-center mx-auto container">
        <p className="text-black shrink-0 mt-8 pr-3">Tinggalkan Komentar</p>
      </div>
      <div className=" mx-auto gap-2 flex container">
        <div className="flex-col">
          <div>
            Nama *
            <div className="bg-gray-50 mt-4 rounded px-6 py-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          Email *
          <div className="bg-gray-50 mt-4 rounded px-6 py-4 text-sm">wdwd</div>
          Website
          <div className="bg-gray-50 mt-4 rounded  px-6 py-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div>
          Komentar
          <div className="bg-gray-50 mt-4 rounded px-6 py-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Komentar;
