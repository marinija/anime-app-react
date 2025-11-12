const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-700  py-4">
            <div className="text-center">
                <p>&copy; {currentYear} Anime App. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
