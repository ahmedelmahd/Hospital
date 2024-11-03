import React from "react";
import Link from 'next/link';
import { h1, main } from "framer-motion/client";

export default function Conditions () {
    return (
        <main>
            <h1 className="text-4xl text-black text-center mt-20 font-bold">Condition?</h1>
            <h3 className="text-2xl text-black text-center mt-8 font-light">Select the patient condition</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-12 px-10 mt-28">
            <div>
                <Link href="/medical-interface">
                <div className="bg-red-600 rounded-xl text-center py-24 font-semibold text-white">
                    <h3 className="text-2xl">Critical</h3>
                </div>
                </Link>
            </div>

            <div>
                <Link href="/medical-interface">
                <div className="bg-yellow-500 rounded-xl text-center py-24 font-semibold text-white">
                    <h3 className="text-2xl">Intermediate</h3>
                </div>
                </Link>
            </div>

            <div>
                <Link href="/medical-interface">
                <div className="bg-green-500 rounded-xl text-center py-24 font-semibold text-white">
                    <h3 className="text-2xl">Stable</h3>
                </div>
                </Link>
            </div>
        </div>
        </main>
    );
}