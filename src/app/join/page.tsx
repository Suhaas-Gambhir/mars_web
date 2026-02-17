export default function JoinUsPage() {
  return (
    <div className="container py-8 px-4 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">Join MARS</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Complete the form below to express your interest in joining the team
        </p>
      </div>

      {/* Google Form Iframe */}
      <div className="w-full mb-12">
        <div className="w-full flex justify-center">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdP-WRARME3pNVBvX2ymWzvPiWdYmz1qHiBQGuK9qeHo0PD5A/viewform?embedded=true" 
            width="100%" 
            height="1200" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="w-full max-w-[700px] min-h-[1200px] rounded-lg border shadow-sm"
            title="MARS Expression of Interest Form"
          >
            Loading form…
          </iframe>
        </div>
      </div>

      {/* What Happens Next - Simplified */}
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">What Happens Next?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold mb-1">Submit</h3>
            <p className="text-sm text-muted-foreground">
              Complete the form above
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold mb-1">Review</h3>
            <p className="text-sm text-muted-foreground">
              We&apos;ll review within 2-3 days
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold mb-1">Welcome</h3>
            <p className="text-sm text-muted-foreground">
              Get next steps via email
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 