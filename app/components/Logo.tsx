export default function Logo() {

    // Function to render pairs of characters with different colors
    const renderColoredText = (text: string) => {
        const pairs = [
            { text: text.slice(0, 2), color: '#A9EAE5' },    // First two characters
            { text: text.slice(2, 4), color: '#E5E288' },    // Second two characters
            { text: text.slice(4, 6), color: '#95FF9A' },    // Third pair of characters
            { text: text.slice(6, 8), color: '#FFFCF3' },    // Final two characters
        ];
    
        return pairs.map(({ text, color }, index) => (
            <span key={index} style={{ color }}>
            {text}
            </span>
        ));
    };

    return (
        <h1 className="text-4xl text-custom-text mb-8">{renderColoredText("mercator")}</h1>
    )
}