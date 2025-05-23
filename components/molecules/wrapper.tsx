const Wrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main
            className="mx-auto flex grow flex-col px-3 pt-20 pb-2 md:max-w-[800px] md:pt-24"
            role="main"
        >
            {children}
        </main>
    );
};

export default Wrapper;
