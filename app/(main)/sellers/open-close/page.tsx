"use client";

import { useState } from "react";

export default function OpenClosePage() {
    const [open, setOpen] = useState(false);

    return (
        <div className="p-4">
            <h1 className="text-lg font-semibold">
                Trạng thái cửa hàng
            </h1>

            <button
                onClick={() => setOpen(!open)}
                className={`mt-4 w-full p-4 rounded text-white ${open ? "bg-red-500" : "bg-green-500"
                    }`}
            >
                {open ? "ĐÓNG CỬA" : "MỞ CỬA"}
            </button>
        </div>
    );
}
