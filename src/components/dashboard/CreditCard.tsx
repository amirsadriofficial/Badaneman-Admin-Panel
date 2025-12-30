interface CreditCardProps {
  cardNumber: string;
  cardHolder: string;
  validThru: string;
}

export function CreditCard({
  cardNumber,
  cardHolder,
  validThru,
}: CreditCardProps) {
  return (
    <div className="credit-card gradient-green-yellow">
      <div className="card-chip">🔲</div>
      <div className="card-details">
        <div className="card-number-label">CARD NUMBER</div>
        <div className="card-number">{cardNumber}</div>
        <div className="card-holder">
          <div className="card-holder-label">CARD HOLDER NAME</div>
          <div className="card-holder-name">{cardHolder}</div>
        </div>
        <div className="card-valid">
          <div className="card-valid-label">VALID THRU</div>
          <div className="card-valid-date">{validThru}</div>
        </div>
      </div>
    </div>
  );
}
