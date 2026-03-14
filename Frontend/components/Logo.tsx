
import Image from "next/image";

const Logo = () => {
    return (
        <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
                src="/logo.jpeg" // Assuming user will upload logo.jpg or we use a placeholder for now
                alt="Pavan Constructions Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}

export default Logo;
