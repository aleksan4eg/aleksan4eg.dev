export default function Home() {
    return (
        <>
            <div className="m-3 mt-[-80px] max-w-md rounded-2xl border-1 border-gray-100 bg-white p-5 py-8 text-center shadow-xl dark:border-gray-800 dark:bg-gray-900">
                <h1 className="mb-3 text-3xl font-bold text-gray-800 dark:text-gray-100">
                    I&apos;ll be back online soon!&nbsp;🚀
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Sorry for the inconvenience. I&apos;m performing some
                    maintenance at the moment.
                </p>
                <span className="my-4 block text-4xl">🛠</span>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    You can always contact me at the following links 👇
                </p>
                <div>
                    <a
                        target="_blank"
                        href="https://github.com/aleksan4eg"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                    <span className="mx-2">•</span>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/agumroian/"
                        className="text-blue-500 hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </>
    );
}
