// text bold component

export default function B({ children }: { children: React.ReactNode }) {
    return (
        <span className={"font-semibold"}>{children}</span>
    );
}