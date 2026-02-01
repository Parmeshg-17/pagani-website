export default function Footer() {
    return (
        <footer className="bg-black py-12 px-6 border-t border-white/10 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-white text-2xl font-bold tracking-widest uppercase">Pagani</div>
                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Pagani Automobili. All rights reserved.
                </div>
                <div className="flex gap-6">
                    {/* Socials placeholder */}
                    <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                    <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                    <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
            </div>
        </footer>
    );
}
