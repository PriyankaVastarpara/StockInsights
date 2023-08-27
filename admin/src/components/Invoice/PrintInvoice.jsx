import React from "react";

const PrintInvoice = () => {
  const items = [
    { id: 1, name: "Product A", quantity: 2, unitPrice: 10.0 },
    { id: 2, name: "Product B", quantity: 3, unitPrice: 15.0 },
  ];

  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );

  const total = subtotal;
  const salesOrderNo = "SO-00122";
  const orderDate = "02/08/2023";
  const shipmentDate = "03/08/2023";
  const billTo = "Priyanka Vastarpara";

  return (
    <div className=" mt-8 mx-auto py-4 px-8 max-w-2xl border border-gray-300">
      <header className="mb-4">
        <div className="flex justify-between mb-2">
          <div className="text-left">
            <p className="text-sm">Bill To:</p>
            <h2 className="text-lg font-semibold">{billTo}</h2>
          </div>
          <div className="text-right">
            <div className="mb-8">
              <h1 className="text-3xl font-bold font-sans tracking-wide">
                {" "}
                SALES ORDER
              </h1>
              <p className="text-lg font-medium">Sales Order# {salesOrderNo}</p>
            </div>
            <p className="text-md mb-2">Order No: 101</p>
            <p className="text-md mb-2">Order Date: {orderDate}</p>
            <p className="text-md mb-2">
              Expected Shipment Date: {shipmentDate}
            </p>
          </div>
        </div>
      </header>
      <main>
        <table className="mt-6 w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Unit Price</th>
              <th className="py-2 px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t text-center">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">₹ {item.unitPrice.toFixed(2)}</td>
                <td className="py-2 px-4">
                  ₹ {(item.quantity * item.unitPrice).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8">
          <div className="flex justify-end">
            <p className="pr-4">
              <span className="font-semibold text-md mb-2">Sub Total : </span> ₹ 
              {subtotal.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-end">
            <span className="font-bold text-md mb-2">
              Total Amount : ₹ {total.toFixed(2)}
            </span>
          </div>
        </div>
      </main>
      <footer className="mt-8 text-center">
        <p className="text-sm">Thank you for your Purchase!</p>
      </footer>
    </div>
  );
};

export default PrintInvoice;
