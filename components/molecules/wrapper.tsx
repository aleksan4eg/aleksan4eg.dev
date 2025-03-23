const Wrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="mx-auto mb-10 flex grow flex-col gap-12 px-3 pt-20 pb-2 md:max-w-[800px] md:pt-24">
            {children}
        </main>
    );
};

export default Wrapper;
