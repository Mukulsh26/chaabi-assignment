export default function Features() {
    return (
        <div className="bg-gradient-to-r from-green-200 to-blue-200" style={{ marginLeft: '50px', marginTop: '100px', borderRadius: "60px 0px 0px 60px" }} >
            <div className="flex justify-between items-center">
                {/* Left Section: Image */}
                <div className="flex-1">
                    <img src="/Image2.png" alt="Learning Image" className="h-48" style={{ height: '400px', width: '450px' }} />
                </div>

                {/* Center Section: WhatsApp Learning Text */}
                <div className="flex-1 text-center">
                    <h3 className="text-4xl mb-4 text-black" style={{ fontWeight: 'normal', textAlign: 'left' }}>WhatsApp Learning</h3>
                    <p className="mb-6 text-black" style={{ textAlign: 'left' }}>
                        Elevate your skills with our interactive and engaging learning content available right on WhatsApp.
                    </p>
                </div>

                {/* Right Section: Analytics and Features */}
                <div className="flex-1">
                    <div className='flex' style={{ height: '100%', float: 'right',background: 'rgba(255, 255, 255, 0.3)'   }}>
                        <div
                            className="section p-4"
                            style={{
                                width: '100px',
                                height: '500px',
                                borderRadius: '50px 0px 0px 0px',
                                border: '2px solid white',
                                borderTop: 'none',
                                borderRight: 'none',
                                color: 'black',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: '25px'
                            }}
                        >
                            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Analytics</span>
                        </div>
                        <div className="section p-4" style={{
                            width: '100px', borderLeft: '1px solid #ccc', borderRadius: '50px 0px 0px 0px',
                            border: '2px solid white',
                            borderRight: 'none',
                            borderTop: 'none',
                            color: 'black',
                            display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: '25px'
                        }}>
                            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Smart Enrollment</span>
                        </div>
                        <div className="section p-4" style={{
                            width: '100px', borderLeft: '1px solid #ccc', borderRadius: '50px 0px 0px 0px',
                            border: '2px solid white',
                            borderRight: 'none',
                            borderTop: 'none',
                            color: 'black',
                            display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: '25px'
                        }}>
                            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Gamified Platform</span>
                        </div>
                        <div className="section p-4" style={{ width: '100px', borderLeft: '1px solid #ccc', borderRadius: '50px 0px 0px 0px', border: '2px solid white', color: 'black', display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Vernacular Content</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}