import Link from "next/link";

export default function Success(){
    return (
        <>
            <strong>Post created</strong>
            <button className="bg-white text-black px-3 ">
                <Link href="/">Go back</Link>
            </button>
        </>
    )
}