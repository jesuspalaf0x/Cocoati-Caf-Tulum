export const metadata = {
    title: "Crónicas de la Corte | COCOATI",
    description: "Historias sobre el arte del café y la cultura imperial.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
