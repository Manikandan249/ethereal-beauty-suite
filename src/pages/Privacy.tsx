const Privacy = () => (
  <>
    <section className="section-padding gradient-blush">
      <div className="container mx-auto text-center">
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-subtitle mx-auto mt-4">How we protect your information</p>
      </div>
    </section>
    <section className="section-padding container mx-auto">
      <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground space-y-6">
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Information We Collect</h2>
          <p>We collect personal information such as name, phone number, email, and booking preferences when you use our services or fill out forms on our website.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">How We Use Your Information</h2>
          <p>Your information is used to process bookings, communicate about appointments, send promotional offers (with your consent), and improve our services.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Data Protection</h2>
          <p>We implement industry-standard security measures to protect your personal data. We do not sell or share your information with third parties except as required by law.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Booking Data</h2>
          <p>Appointment details are stored securely and retained for service quality purposes. You may request deletion of your data at any time by contacting us.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Contact Us</h2>
          <p>For privacy-related questions, contact us at hello@glowandgrace.com or call +1 234 567 890.</p>
        </div>
      </div>
    </section>
  </>
);

export default Privacy;
