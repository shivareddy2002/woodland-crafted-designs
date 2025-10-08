import { Card, CardContent } from "@/components/ui/card";

const FindUs = () => {
  return (
    <section id="find-us" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Find Us
          </h2>
          <p className="text-lg text-wood-dark max-w-2xl mx-auto">
            Visit our showroom and workshop to see our premium wood solutions in person. We're located at IDL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Location Info */}
          <div className="h-full">
            <Card className="bg-card border border-wood-medium h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-6">Visit Our Location</h3>
                
                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-semibold text-wood-dark mb-2">Address</h4>
                    <p className="text-wood-dark">
                      Kopparthi industrial Hub, Plot No-55, APIIC, Kadapa, Kopparthi, Andhra Pradesh 516293
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-wood-dark mb-2">Business Hours</h4>
                    <div className="space-y-1 text-wood-dark">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-wood-dark mb-2">What to Expect</h4>
                    <ul className="space-y-1 text-wood-dark">
                      <li>• Live wood samples and finishes</li>
                      <li>• Expert consultation</li>
                      <li>• Design portfolio showcase</li>
                      <li>• Custom measurement service</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="h-full min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden border border-wood-medium shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Kopparthi+industrial+Hub,+Plot+No-55,+APIIC,+Kadapa,+Kopparthi,+Andhra+Pradesh+516293&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kopparthi Industrial Hub Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;