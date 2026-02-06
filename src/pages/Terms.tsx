const Terms = () => (
  <>
    <section className="section-padding gradient-blush">
      <div className="container mx-auto text-center">
        <h1 className="section-title">Terms & Conditions</h1>
        <p className="section-subtitle mx-auto mt-4">Service policies and guidelines</p>
      </div>
    </section>
    <section className="section-padding container mx-auto">
      <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground space-y-6">
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Booking & Appointments</h2>
          <p>Appointments are subject to availability. We recommend booking at least 48 hours in advance. Walk-ins are accepted based on availability.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Cancellation Policy</h2>
          <p>Cancellations must be made at least 24 hours before the appointment. Late cancellations or no-shows may incur a charge of up to 50% of the service fee.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Payment</h2>
          <p>Payment is due at the time of service. We accept cash, credit/debit cards, and digital payments. Package bookings may require a non-refundable deposit.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Refund Policy</h2>
          <p>Refunds are handled on a case-by-case basis. If you're not satisfied with a service, please speak to our manager within 48 hours.</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Liability</h2>
          <p>Clients are advised to inform us of any allergies or sensitivities before treatments. We are not liable for reactions to products when prior information was not disclosed.</p>
        </div>
      </div>
    </section>
  </>
);

export default Terms;
