import { useRouter } from "next/router";
// import React from "react";

// function ThankYou() {
//     const router = useRouter();
//     console.log('router', router.query)
//     return (
//         <div>
//             <h1>
//                 Thank you for shopping with us
//             </h1>
//         </div>
//     )
// }

// import React from 'react';
// import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ThankYou = () => {
//   return (
//     <div>
//       <Head>
//         <title>Invoice Page</title>
//       </Head>
//       <div className="container">
//         <h1>Invoice</h1>
//         <div className="row">
//           <div className="col-md-6">
//             <h3>Bill From:</h3>
//             <p>Your Company Name</p>
//             <p>123 Main Street</p>
//             <p>City, State, ZIP</p>
//             <p>Phone: 123-456-7890</p>
//           </div>
//           <div className="col-md-6">
//             <h3>Bill To:</h3>
//             <p>Client Name</p>
//             <p>123 Client Street</p>
//             <p>City, State, ZIP</p>
//             <p>Phone: 987-654-3210</p>
//           </div>
//         </div>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Description</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Item 1</td>
//               <td>Description 1</td>
//               <td>1</td>
//               <td>$10.00</td>
//               <td>$10.00</td>
//             </tr>
//             <tr>
//               <td>Item 2</td>
//               <td>Description 2</td>
//               <td>2</td>
//               <td>$5.00</td>
//               <td>$10.00</td>
//             </tr>
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 <strong>Subtotal:</strong>
//               </td>
//               <td>$20.00</td>
//             </tr>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 <strong>Tax:</strong>
//               </td>
//               <td>$2.00</td>
//             </tr>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 <strong>Total:</strong>
//               </td>
//               <td>$22.00</td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   );
// };



// export default ThankYou

import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const InvoicePage = () => {
  return (
    <div>
      <Head>
        <title>Invoice</title>
      </Head>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header">
                <h4>Invoice</h4>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <strong>Invoice Number:</strong> INV-123456
                  </div>
                  <div className="col-md-6 text-md-end">
                    <strong>Date:</strong> May 19, 2023
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <strong>Customer Name:</strong> John Doe
                  </div>
                  <div className="col-md-6 text-md-end">
                    <strong>Customer Email:</strong> john.doe@example.com
                  </div>
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Product 1</td>
                      <td>2</td>
                      <td>$10.00</td>
                      <td>$20.00</td>
                    </tr>
                    <tr>
                      <td>Product 2</td>
                      <td>1</td>
                      <td>$15.00</td>
                      <td>$15.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-end">
                        <strong>Total:</strong>
                      </td>
                      <td>$35.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
