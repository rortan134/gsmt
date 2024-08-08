import { redirect } from "next/navigation";

export default function Callback({ searchParams: { code } }: { searchParams: { code: string } }) {
    redirect(`notion-sticky-notes://${code}`);
}
