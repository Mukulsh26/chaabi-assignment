export default function Testimonial() {
    return (
      <div
        style={{
          maxWidth: '900px',
          justifyContent: 'center',
          marginLeft: '350px',
          marginRight: 'auto',
          marginTop: '150px',
        }}
      >
        <div className="relative">
          {/* First Background Image */}
          <img
            src="/background1.png" // Replace with actual image URL
            alt="Background 1"
            className="absolute inset-0 object-cover"
            style={{ zIndex: 3, width: '737px', height: '295px', marginRight: '400px', marginLeft: '-44px' }}
          />
  
          {/* Second Background Image */}
          <img
            src="/background2.png" // Replace with actual image URL
            alt="Background 2"
            className="absolute inset-0 object-cover"
            style={{ zIndex: 2, width: '750px', height: '295px', marginLeft: '-89px', opacity: 0.7 }} // Adjust opacity as needed
          />
  
          {/* Card Content */}
          <div
            className="bg-[#F6E5C7] p-8 relative flex"
            style={{
              marginTop: '40px', // Adjust this to provide space below the images
              background: `linear-gradient(99.48deg, #EFCD8A 7.75%, #FAE7A6 87.6%),
              linear-gradient(0deg, rgba(65, 65, 65, 0.13), rgba(65, 65, 65, 0.13))`,
              borderRadius: '200px',
              zIndex: 4
            }}
          >
            <div className="w-[30%] relative">
              <img
                src="/CEO.png" // Replace with actual image URL
                alt="Madhav Kasturia"
                className="absolute inset-0 object-cover"
              />
            </div>
            <div className="w-[70%] pl-8">
              <div className="text-2xl font-bold text-black">Zippee</div>
              <div className="flex items-center text-green-600 font-bold my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* Replace with your desired icon */}
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 10.586V7z" clipRule="evenodd" />
                </svg>
                57% Reduction
              </div>
              <p className="text-sm text-black">In Customer Complaints</p>
              <p className="mt-4 text-sm text-black">
                The detailed training with chaabi has led to great business impacts. We've seen a rise in product adaptation amongst riders leading to an increase in customer satisfaction.
              </p>
              <p className="mt-6 text-sm font-medium text-black">Madhav Kasturia,</p>
              <p className="text-sm text-black">Founder & CEO, Zippee</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  