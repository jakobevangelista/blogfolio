import Image from "next/image";

export default function Home() {
  return (
    <div className="p-16 sm:p-32">
      <div className="mx-auto max-w-[640px] text-xl">
        <div className="mb-6 text-center">
          hello, i'm jakob. here are some things i do
        </div>
        <div className="text-center flex flex-col space-y-6">
          <a
            href="https://x.com/jakeplusev"
            className="py-4 border text-lg border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div>twitter</div>
            <div className="text-sm text-stone-400">thoughts</div>
          </a>
          <a
            href="https://www.youtube.com/@jakeplusev"
            className="py-4 border text-lg border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div>youtube</div>
            <div className="text-sm text-stone-400">yap</div>
          </a>
          <a
            href="https://github.com/jakobevangelista"
            className="py-4 border text-lg border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div>github</div>
            <div className="text-sm text-stone-400">my code</div>
          </a>
          <a
            href="https://github.com/jakobevangelista"
            className="py-4 border text-lg border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div>discord</div>
            <div className="text-sm text-stone-400">i talk here</div>
          </a>
          <a
            href="https://instagram.com/jakeplusev"
            className="py-4 border text-lg border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div>instagram</div>
            <div className="text-sm text-stone-400">fake life</div>
          </a>
          <a
            href="https://www.tiktok.com/@jakeplusev"
            className="py-4 border text-lg border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div>tiktok</div>
            <div className="text-sm text-stone-400">brain rot</div>
          </a>
        </div>
      </div>
    </div>
  );
}
