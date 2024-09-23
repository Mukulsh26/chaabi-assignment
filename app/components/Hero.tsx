export default function Hero() {
    return (
        <div className="bg-white bg-gradient-to-r from-white via-green-100 to-blue-100 p-8">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="/logo.png" alt="Logo" />
                <div style={{ display: 'flex', gap: '20px', color: 'black' }}>
                    <a href="">Features</a>
                    <a href="">Testimonial</a>
                    <a href="" style={{ color: 'rgba(13, 98, 255, 1)' }}>Start Free Trial</a>
                </div>
            </nav>
            <br />
            <div className="flex justify-between items-center" style={{ marginLeft: '100px', marginTop: '80px' }}>
                {/* Left Side Content */}
                <div className="text-left" style={{ maxWidth: '600px' }}>
                    <h1
                        style={{
                            fontSize: '65px',
                            background: 'linear-gradient(179.94deg, #25D366 0.05%, #0D62FF 99.95%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent', // This is for Safari and Chrome support
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                        className="font-bold mb-4"
                    >
                        WhatsApp Learning to Transform your Delivery Workforce
                    </h1>

                    <p className="mb-6 text-black">Unlock their True Potential with AI-Driven Vernacular Training Content and WhatsApp learning.</p>
                    <div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Try chaabi for Free</button>
                        <button className="border border-blue-600 px-4 py-2 rounded-md bg-white text-black">View Demo</button>
                    </div>
                </div>

                {/* Right Side Images */}
                <div className="flex">
                    <img src="/Image1.png" alt="Delivery Worker" className="h-32 mr-4" style={{width: '540px', height: '540px'}} />
                    {/* <img src="/worker2.png" alt="Delivery Worker" className="h-32" /> */}
                </div>
            </div>
        </div>
    );
}