import { redirect } from "next/navigation";

export default function NotFound() {
    redirect("/");
}

export const dynamic = "force-dynamic";
