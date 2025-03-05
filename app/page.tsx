import Image from "next/image";

export default function Home() {
    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-8 text-center">
                <Image
                    src="/me.png"
                    alt="Aleksandr Gumroian"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-gray-700"
                />
                <h1 className="inline text-4xl font-bold">
                    Aleksandr Gumroian
                </h1>
                <p>
                    I am a skilled and experienced Full-Stack Software Developer
                    with a strong focus on clean code and best practices,
                    currently living in Prague, Czech Republic. With a deep
                    understanding of both front-end and back-end technologies, I
                    excel in developing robust web applications that meet
                    clients&apos; needs. My passion for problem-solving and
                    continuous learning allows me to stay updated with the
                    latest industry trends.
                </p>
            </main>
        </div>
    );
}
