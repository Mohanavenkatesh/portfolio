import HomePage from "@/components/pages/HomePage";
import Image from "next/image";

export default function Home() {
    return (
        <>
            {/* <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-16 bg-white dark:bg-black sm:items-start">

                    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

                        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            Hi I am
                        </p>

                        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                            Mohanavenkatesh
                        </h1>
                        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            Web {" "}
                            <a
                                href=""
                                className="font-medium text-zinc-950 dark:text-zinc-50"
                            >
                                Developer
                            </a>{" "}
                            {" "}

                        </p>
                        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                            My Skills
                        </h1>
                        <ul className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            <li>React.Js</li>
                            <li>Version control</li>
                            <li>Tailwind</li>
                            <li>Next.Js</li>
                            <li>Bootstrap</li>
                            <li>Node.Js</li>
                            <li>MongooDB</li>
                            <li>HTML & CSS </li>
                            <li>Express.Js</li>
                        </ul>
                        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                            Get in Touch
                        </h1>
                        <p className="max-w-md mb-3 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            Interested in colloaborating or want to know more about my work ? feel free to contact me
                        </p>
                        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">


                            <a
                                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                                href="https://wa.me/7200470762"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Hire Me
                            </a>
                            <a
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                                href="https://wa.me/7200470762"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact Now
                            </a>
                        </div>

                    </div>

                </main>
            </div> */}
                <HomePage />
        </>

    );
}
