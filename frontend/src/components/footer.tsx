import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white px-4 py-8 text-base">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-8">
            <div className="flex-1 min-w-[200px] mb-4">
                <span className="block font-bold text-2xl tracking-wider mb-2">ku_thola</span>
                <p className="text-gray-300">Connecting communities, empowering opportunities.</p>
            </div>
            <div className="flex-1 min-w-[150px] flex flex-col gap-2 mb-4">
                <a href="/about" className="hover:text-teal-400 transition-colors">About</a>
                <a href="/contact" className="hover:text-teal-400 transition-colors">Contact</a>
                <a href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            </div>
            <div className="flex-1 min-w-[100px] flex items-center gap-4 mb-4">
                <a
                    href="https://twitter.com/"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                >
                    <svg width="24" height="24" fill="currentColor"><path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.93 8.93 0 0 1-2.83 1.08A4.48 4.48 0 0 0 11.1 9.03a12.72 12.72 0 0 1-9.24-4.69 4.48 4.48 0 0 0 1.39 5.98c-.74-.02-1.44-.23-2.05-.57v.06a4.48 4.48 0 0 0 3.6 4.4c-.35.1-.72.15-1.1.15-.27 0-.53-.03-.78-.07a4.48 4.48 0 0 0 4.19 3.12A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.58a9.1 9.1 0 0 0 2.24-2.32z"/></svg>
                </a>
                <a
                    href="https://facebook.com/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                >
                    <svg width="24" height="24" fill="currentColor"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
            </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ku_thola. All rights reserved.
        </div>
    </footer>
);

export default Footer;
