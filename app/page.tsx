import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* <h1>Recipe Matcher</h1> */}
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Recipe Matcher</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">
                            <Link href="/ingredients">
                                Match my ingredients with a recipe
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
