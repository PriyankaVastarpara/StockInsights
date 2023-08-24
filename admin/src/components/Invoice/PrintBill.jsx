import React from "react";

const PrintBill = () => {
  const items = [
    { id: 1, name: "Product A", quantity: 2, unitPrice: 10.0 },
    { id: 2, name: "Product B", quantity: 3, unitPrice: 15.0 },
  ];

  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );

  const total = subtotal;

  const billNo = "PO-01122";
  const orderno = 27;
  const billDate = "03/08/2023";
  const dueDate = "05/08/2023";
  const billFrom = "Priyanka Vastarpara";

  return (
    <div className=" mt-8 mx-auto py-4 px-8 max-w-2xl border border-gray-300">
      <header className="mb-4">
        <div className="flex justify-between mb-2">
          <div className="text-left">
            <p className="text-sm">Bill From:</p>
            <h2 className="text-lg font-semibold">{billFrom}</h2>
          </div>
          <div className="text-right">
            <div className="mb-8">
              <h1 className="text-3xl font-bold font-sans tracking-wide">
                {" "}
                BILL
              </h1>
              <p className="text-lg font-medium">Bill# {billNo}</p>
              <p className="text-sm font-medium mt-3"> Balance Due</p>
              <p className="text-md font-bold"> Rs. {total.toFixed(2)} </p>
            </div>

            <p className="text-md mb-2">Order number: {orderno}</p>
            <p className="text-md mb-2">Bill Date: {billDate}</p>
            <p className="text-md mb-2">Due Date: {dueDate}</p>
          </div>
        </div>
      </header>
      <main>
        <table className="mt-6 w-full border-collapse">
          <thead>
            <tr className="bg-gray-300">
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
              <span className="font-medium text-md mb-2">Sub Total : </span>Rs.{" "}
              {subtotal.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-end">
            <span className="font-semibold text-md mb-2">
              Total :Rs. {total.toFixed(2)}{" "}
            </span>
          </div>
          <div className="flex justify-end">
            <span className="font-bold text-md mb-2 p-2 bg-gray-200">
              Balance Due :Rs.{total.toFixed(2)}{" "}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrintBill;
