import React, { useState } from "react";

const Checkout = ({ onPurchaseComplete }) => {
    console.log("Componente Checkout renderizado");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFinishPurchase = () => {
    // Lógica para finalizar la compra (puedes enviar los datos a tu backend aquí)
    console.log("Compra finalizada:", formData);

    // Llama a la función proporcionada por el padre para indicar que la compra está completa
    onPurchaseComplete();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Dirección:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
      </form>
      <br />
      <button onClick={handleFinishPurchase}>Finalizar compra</button>
    </div>
  );
};

export default Checkout;